import { useEffect, useRef } from 'react';

export default function ParticleField({ paused }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0,
      height = 0,
      frame = 0,
      previous = 0,
      visible = true;
    let points = [];
    const pointer = { x: -1000, y: -1000 };
    function paint(time = 0) {
      frame = 0;
      const moving = !paused && !media.matches && visible && !document.hidden;
      const delta = previous ? Math.min((time - previous) / 16.67, 2) : 1;
      previous = time;
      context.clearRect(0, 0, width, height);
      for (const point of points) {
        if (moving) {
          point.x += point.vx * delta;
          point.y += point.vy * delta;
          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(121,210,169,.65)';
        context.fill();
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i],
            b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 155) {
            context.strokeStyle = `rgba(98,183,146,${(1 - distance / 155) * 0.24})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
        const point = points[i];
        const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (distance < 190) {
          context.strokeStyle = `rgba(116,235,169,${(1 - distance / 190) * 0.4})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
      }
      if (moving) frame = requestAnimationFrame(paint);
    }
    function restart() {
      if (frame) cancelAnimationFrame(frame);
      previous = 0;
      paint();
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from(
        {
          length: Math.min(
            90,
            Math.max(30, Math.round((width * height) / 14000)),
          ),
        },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.3 + 0.7,
        }),
      );
      restart();
    }
    function pointerMove(event) {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    }
    function pointerLeave() {
      pointer.x = -1000;
      pointer.y = -1000;
    }
    const parent = canvas.parentElement;
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    visibility.observe(canvas);
    parent.addEventListener('pointermove', pointerMove);
    parent.addEventListener('pointerleave', pointerLeave);
    media.addEventListener('change', restart);
    document.addEventListener('visibilitychange', restart);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      parent.removeEventListener('pointermove', pointerMove);
      parent.removeEventListener('pointerleave', pointerLeave);
      media.removeEventListener('change', restart);
      document.removeEventListener('visibilitychange', restart);
    };
  }, [paused]);
  return (
    <canvas className="particle-field" ref={canvasRef} aria-hidden="true" />
  );
}
