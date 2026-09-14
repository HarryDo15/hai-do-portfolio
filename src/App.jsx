import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Atom,
  Braces,
  Boxes,
  Container,
  Database,
  GitBranch,
  Mail,
  ShieldCheck,
  Terminal,
  Workflow,
  Check,
  Pause,
  Play,
  Code2,
  LockKeyhole,
  Server,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleField from './components/ParticleField';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
const navigation = [
  ['hero', 'Home'],
  ['about', 'About'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];
const skills = [
  [Atom, 'REACT'],
  [Braces, 'JAVASCRIPT'],
  [Terminal, 'PYTHON'],
  [Boxes, 'KUBERNETES'],
  [Container, 'DOCKER'],
  [GitBranch, 'GIT'],
  [Code2, 'C# / .NET'],
  [Database, 'SQL'],
  [ShieldCheck, 'APPSEC'],
];
const roles = [
  {
    title: 'DevSecOps Engineer',
    company: 'ASIC Technologies',
    location: 'Hanoi, Vietnam',
    date: 'Sep 2024 — Apr 2026',
    description:
      'Directed intensive two-week proof of concept builds, deployed enterprise AppSec solutions, and validated scan findings with source code review and targeted manual testing.',
    stack: 'Kubernetes · Docker · GitLab · Jenkins · Burp Suite',
  },
  {
    title: 'Software Developer',
    company: 'Sandhills Global',
    location: 'Lincoln, Nebraska',
    date: 'Jan — Aug 2024',
    description:
      'Built full-stack features and secure REST APIs with enterprise SSO and role-based access control. Automated testing and CI/CD helped reduce post-release defects by 30%.',
    stack: 'C# · .NET · React · MySQL · CI/CD',
  },
  {
    title: 'Associate Product Manager',
    company: 'NSAA',
    location: 'Lincoln, Nebraska',
    date: 'Aug 2023 — May 2024',
    description:
      'Built Python/Django APIs and backend services for self-service features. Redesigned PostgreSQL data models to improve performance, integrity, and access control.',
    stack: 'Python · Django · PostgreSQL · Figma',
  },
  {
    title: 'Associate Software Engineer',
    company: 'Hudl',
    location: 'Lincoln, Nebraska',
    date: 'Aug 2022 — May 2023',
    description:
      'Delivered full-stack web features and REST API integrations used by 200+ organizations, focusing on scalability, data integrity, and usability.',
    stack: 'JavaScript · TypeScript · C# · React · d3.js',
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="section-heading">
      <span>{children}</span>
    </h2>
  );
}

function EngineeringVisual({ type }) {
  if (type === 'security')
    return (
      <div
        className="engineering-visual visual-security"
        aria-label="Application security workflow: code, scan, validate, and release"
      >
        <div className="diagram-heading">
          <ShieldCheck size={20} />
          <span>APPLICATION SECURITY</span>
          <span className="diagram-index">01</span>
        </div>
        <div className="pipeline">
          {[
            [Code2, 'Code'],
            [ShieldCheck, 'Scan'],
            [Check, 'Validate'],
            [Server, 'Release'],
          ].map(([Icon, label], index) => (
            <div className="pipeline-step" key={label}>
              <div>
                <Icon size={25} />
              </div>
              <span>{label}</span>
              {index < 3 && <ArrowRight className="step-arrow" size={17} />}
            </div>
          ))}
        </div>
        <div className="scan-types">
          <span>SAST</span>
          <span>SCA</span>
          <span>DAST</span>
          <span>IAST</span>
        </div>
        <p>Security from the first commit.</p>
      </div>
    );
  if (type === 'delivery')
    return (
      <div
        className="engineering-visual visual-delivery"
        aria-label="Automated delivery workflow with a 30 percent reduction in post-release defects at Sandhills Global"
      >
        <div className="diagram-heading">
          <Workflow size={20} />
          <span>CONTINUOUS DELIVERY</span>
          <span className="diagram-index">02</span>
        </div>
        <div className="delivery-stages">
          {['Build', 'Test', 'Deploy'].map((label) => (
            <div key={label}>
              <Check size={17} />
              <span>{label}</span>
              <span>Automated</span>
            </div>
          ))}
        </div>
        <div className="result">
          <strong>
            30% <ArrowDown size={35} />
          </strong>
          <span>fewer post-release defects</span>
        </div>
      </div>
    );
  return (
    <div
      className="engineering-visual visual-product"
      aria-label="Full-stack engineering across interfaces, APIs, and data for more than 200 organizations"
    >
      <div className="diagram-heading">
        <Braces size={20} />
        <span>FULL-STACK ENGINEERING</span>
        <span className="diagram-index">03</span>
      </div>
      <div className="system-layers">
        <div>
          <Atom size={24} />
          <span>Interfaces</span>
          <small>React · TypeScript</small>
        </div>
        <div>
          <LockKeyhole size={24} />
          <span>Application layer</span>
          <small>REST APIs · C#</small>
        </div>
        <div>
          <Database size={24} />
          <span>Data & integration</span>
          <small>Scalability · Integrity</small>
        </div>
      </div>
      <p>
        <strong>200+</strong> organizations supported
      </p>
    </div>
  );
}

function ContactForm() {
  const [draftReady, setDraftReady] = useState(false);
  function openDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get('name').trim();
    const email = fields.get('email').trim();
    const message = fields.get('message').trim();
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:haithanh23.15@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  }
  return (
    <form className="contact-form" onSubmit={openDraft}>
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        placeholder="Name"
        autoComplete="name"
        required
        maxLength={100}
        pattern=".*\S.*"
      />
      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        type="email"
        required
        maxLength={200}
      />
      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Message"
        required
        minLength={2}
        maxLength={3000}
        rows={6}
      />
      <div className="form-footer">
        <p>
          Opens your email app with a draft.
          <br />
          You review and send it.
        </p>
        <Button type="submit" className="line-button">
          Open email draft <ArrowRight size={17} />
        </Button>
      </div>
      {draftReady && (
        <output className="form-feedback">
          Your email app has been requested. If it didn’t open, email{' '}
          <a href="mailto:haithanh23.15@gmail.com">haithanh23.15@gmail.com</a>{' '}
          directly.
        </output>
      )}
    </form>
  );
}

export default function Portfolio() {
  const [paused, setPaused] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActiveSection(entry.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    for (const [id] of navigation) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <section className="hero" id="hero" aria-labelledby="hero-heading">
        <ParticleField paused={paused} />
        <div className="hero-heading">
          <h1 id="hero-heading">
            Hello, I’m <span>Hai.</span>
            <br />
            <span className="hero-role">
              I’m a software &amp; DevSecOps engineer.
            </span>
          </h1>
          <Button
            className="hero-cta"
            render={<a href="#about" aria-label="View my work" />}
            nativeButton={false}
          >
            View my work <ArrowRight className="hero-arrow" size={23} />
          </Button>
        </div>
        <Button
          className="motion-toggle"
          variant="ghost"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? 'Play background animation' : 'Pause background animation'
          }
          aria-pressed={paused}
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
          <span>{paused ? 'Play motion' : 'Pause motion'}</span>
        </Button>
      </section>
      <nav className="navigation-bar" aria-label="Main navigation">
        <div className="navigation">
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <main>
        <section className="about section wrap" id="about">
          <SectionHeading>About</SectionHeading>
          <div className="about-content">
            <div className="profile">
              <div className="profile-picture">
                <img
                  src={`${import.meta.env.BASE_URL}hai-portrait.webp`}
                  alt="Hai Do outside a vintage clothing shop"
                  width="1200"
                  height="1600"
                  loading="lazy"
                />
              </div>
              <h3>Secure software. Reliable delivery.</h3>
              <p>
                I’m a software and DevSecOps engineer based in Singapore,
                working across application development, security, and
                infrastructure. I enjoy turning complex problems into practical
                solutions — from secure APIs to automated delivery pipelines.
              </p>
              <p>
                I’m currently pursuing an MSc in Computer Science
                (Cybersecurity) at NTU, and I’m a Certified Kubernetes
                Administrator.
              </p>
              <a
                className="line-link"
                href={resumeUrl}
                download="Hai-Do-Resume.pdf"
              >
                Download resume <ArrowDown size={16} />
              </a>
            </div>
            <div className="skills-panel">
              <div className="skills-grid">
                {skills.map(([Icon, label]) => (
                  <div className="skill-tile" key={label}>
                    <Icon size={38} strokeWidth={1.5} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="skills-caption">
                The tools I use to build, secure, and deliver.
              </p>
            </div>
          </div>
        </section>
        <section className="work section wrap" id="work">
          <SectionHeading>Selected work</SectionHeading>
          <p className="section-intro">
            A few highlights from my professional experience.
          </p>
          <article className="project">
            <EngineeringVisual type="security" />
            <div className="project-info">
              <p className="project-company">ASIC TECHNOLOGIES</p>
              <h3>
                Application security
                <br />
                across the lifecycle.
              </h3>
              <p>
                Embedded enterprise AppSec solutions from the developer’s IDE to
                production. Combined automated scanning with source code review,
                manual validation, and targeted testing.
              </p>
              <p className="project-stack">SAST · SCA · DAST · IAST · ASPM</p>
              <a className="line-link" href="#experience">
                View experience <ArrowRight size={16} />
              </a>
            </div>
          </article>
          <article className="project project-reverse">
            <EngineeringVisual type="delivery" />
            <div className="project-info">
              <p className="project-company">SANDHILLS GLOBAL</p>
              <h3>
                Better releases.
                <br />
                Fewer defects.
              </h3>
              <p>
                Built secure REST APIs with enterprise SSO and role-based access
                control. Introduced automated testing and CI/CD pipelines that
                reduced post-release defects by 30%.
              </p>
              <p className="project-stack">C# · .NET · React · MySQL · CI/CD</p>
              <a className="line-link" href="#experience">
                View experience <ArrowRight size={16} />
              </a>
            </div>
          </article>
          <article className="project">
            <EngineeringVisual type="product" />
            <div className="project-info">
              <p className="project-company">HUDL</p>
              <h3>
                Full-stack features.
                <br />
                Real-world scale.
              </h3>
              <p>
                Built web features and REST API integrations used by 200+
                organizations. Focused on scalability, data integrity, and
                usability across multiple release cycles.
              </p>
              <p className="project-stack">
                React · TypeScript · C# · REST APIs
              </p>
              <a className="line-link" href="#experience">
                View experience <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </section>
        <section className="experience section wrap" id="experience">
          <SectionHeading>Experience</SectionHeading>
          <div className="timeline">
            {roles.map((role) => (
              <article className="role" key={role.company}>
                <div className="role-date">{role.date}</div>
                <div className="role-content">
                  <h3>{role.title}</h3>
                  <p className="company">
                    {role.company} <span>· {role.location}</span>
                  </p>
                  <p>{role.description}</p>
                  <p className="role-stack">{role.stack}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="credentials">
            <article>
              <p className="credential-label">EDUCATION</p>
              <h3>MSc, Computer Science</h3>
              <p>
                Nanyang Technological University
                <br />
                Cybersecurity · In progress, 2026
              </p>
              <h3>BSc, Software Engineering</h3>
              <p>
                University of Nebraska–Lincoln · May 2024
                <br />
                High Distinction · GPA 3.9 / 4.0
              </p>
            </article>
            <article>
              <p className="credential-label">CERTIFICATIONS</p>
              <h3>Certified Kubernetes Administrator</h3>
              <p>CKA</p>
              <h3>Certified DevSecOps Professional</h3>
              <p>Practical DevSecOps</p>
              <p className="languages">
                English · Fluent-native
                <br />
                Vietnamese · Native
              </p>
            </article>
          </div>
        </section>
        <section className="contact section wrap" id="contact">
          <SectionHeading>Contact</SectionHeading>
          <p className="contact-intro">
            Have a question or want to work together?
            <br />
            Let’s talk about what you have in mind.
          </p>
          <ContactForm />
        </section>
      </main>
      <footer>
        <a className="return-home" href="#hero" aria-label="Back to top">
          <ArrowUp size={25} />
        </a>
        <div className="socials">
          <a
            href="https://github.com/HarryDo15"
            target="_blank"
            rel="noreferrer"
            aria-label="Hai Do on GitHub"
          >
            <GitBranch size={27} />
          </a>
          <a href="mailto:haithanh23.15@gmail.com" aria-label="Email Hai Do">
            <Mail size={29} />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume"
          >
            <ExternalLink size={25} />
          </a>
        </div>
        <a className="footer-email" href="mailto:haithanh23.15@gmail.com">
          haithanh23.15@gmail.com
        </a>
        <p>
          HAI DO <span>© {new Date().getFullYear()}</span>
        </p>
      </footer>
    </>
  );
}
