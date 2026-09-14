import { Button } from '@/components/ui/button';

export default function Portfolio() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="hero-shell">
        <header className="wrap site-header">
          <a className="wordmark" href="#main">
            Hai Do<span className="brand-dot">.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="mailto:haithanh23.15@gmail.com">Get in touch ↗</a>
          </nav>
        </header>
      </div>
      <main id="main">
        <div className="hero-shell">
          <section className="hero wrap" aria-labelledby="intro-heading">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="dot" /> Software engineer · Singapore
              </p>
              <h1 id="intro-heading">
                Hi, I’m Hai.
                <br />I build with
                <br />
                <em>care & curiosity.</em>
              </h1>
              <p className="intro">
                Software, security, and the space in between.
              </p>
              <p className="subintro">
                I bring applications to life and help teams deliver them
                securely — from the first line of code to the infrastructure
                behind it.
              </p>
              <div className="actions">
                <Button
                  className="hero-button"
                  render={<a href="#work" aria-label="Explore my work" />}
                  nativeButton={false}
                >
                  Explore my work <span aria-hidden="true">↗</span>
                </Button>
                <a
                  className="text-link"
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Hai-Do-Resume.pdf"
                >
                  My resume <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-footnote">
                DEVELOPMENT <span> / </span> DEVSECOPS <span> / </span> CLOUD
              </p>
            </div>
            <figure className="portrait">
              <div className="portrait-window">
                <img
                  src={`${import.meta.env.BASE_URL}hai-portrait.webp`}
                  alt="Hai Do outside a vintage clothing shop"
                  width="1200"
                  height="1600"
                  fetchPriority="high"
                />
              </div>
              <figcaption>
                <span>A little about the person behind the code.</span>
                <span aria-hidden="true">↙</span>
              </figcaption>
              <div className="portrait-label">
                Engineer.
                <br />
                <em>Always learning.</em>
              </div>
            </figure>
          </section>
        </div>
        <div className="proof wrap">
          <div>
            <strong>
              2+ <em>years</em>
            </strong>
            <span>Software & solutions engineering</span>
          </div>
          <div>
            <strong>
              200+ <em>organizations</em>
            </strong>
            <span>Supported by features built at Hudl</span>
          </div>
          <div>
            <strong>
              30% <em>fewer defects</em>
            </strong>
            <span>Post-release, at Sandhills Global</span>
          </div>
        </div>
        <section id="work" className="section wrap">
          <div className="section-heading">
            <p className="eyebrow">01 — SELECTED WORK</p>
            <h2>
              A few things I’ve <em>worked on.</em>
            </h2>
            <p>Highlights from my professional experience.</p>
          </div>
          <div className="work-grid">
            <article className="work-card">
              <span className="card-index">01 / APPLICATION SECURITY</span>
              <h3>Security across the software lifecycle.</h3>
              <p>
                Embedded enterprise AppSec tools from the developer’s IDE to
                production. Validated scan findings, reviewed source code, and
                supplemented automated scans with targeted manual testing.
              </p>
              <div className="tags">
                <span>SAST / DAST</span>
                <span>SCA / IAST</span>
                <span>ASPM</span>
              </div>
              <p className="attribution">
                ASIC Technologies · DevSecOps Engineer
              </p>
            </article>
            <article className="work-card">
              <span className="card-index">02 / SECURE DELIVERY</span>
              <h3>Better releases. Fewer defects.</h3>
              <p>
                Built REST APIs with enterprise SSO, role-based access control,
                and directory integration. Implemented automated testing and
                CI/CD pipelines, reducing post-release defects by 30%.
              </p>
              <div className="tags">
                <span>C# / .NET</span>
                <span>React</span>
                <span>CI/CD</span>
              </div>
              <p className="attribution">
                Sandhills Global · Software Developer
              </p>
            </article>
            <article className="work-card">
              <span className="card-index">03 / PRODUCT ENGINEERING</span>
              <h3>Full-stack features at scale.</h3>
              <p>
                Built web features and REST API integrations used by more than
                200 organizations, with a focus on scalability, data integrity,
                usability, and code quality.
              </p>
              <div className="tags">
                <span>TypeScript</span>
                <span>React</span>
                <span>REST APIs</span>
              </div>
              <p className="attribution">Hudl · Associate Software Engineer</p>
            </article>
          </div>
        </section>
        <section id="experience" className="section experience">
          <div className="wrap experience-layout">
            <div className="section-heading">
              <p className="eyebrow">02 — THE JOURNEY</p>
              <h2>
                Good work starts
                <br />
                with <em>experience.</em>
              </h2>
              <p>Building across development, delivery, and security.</p>
            </div>
            <div className="timeline">
              <article>
                <div className="role-top">
                  <h3>DevSecOps Engineer</h3>
                  <span>Sep 2024 — Apr 2026</span>
                </div>
                <p className="company">ASIC Technologies · Hanoi, Vietnam</p>
                <p>
                  Directed intensive two-week proof of concept builds with
                  security, DevOps, and development teams. Deployed AppSec
                  solutions and researched CVE and n-day vulnerabilities to
                  improve scan accuracy.
                </p>
                <p className="stack">
                  Kubernetes · Docker · GitLab · Jenkins · Burp Suite
                </p>
              </article>
              <article>
                <div className="role-top">
                  <h3>Software Developer</h3>
                  <span>Jan — Aug 2024</span>
                </div>
                <p className="company">Sandhills Global · Lincoln, Nebraska</p>
                <p>
                  Delivered full-stack features, secure REST APIs, automated
                  tests, and consistent deployment pipelines for internal
                  enterprise applications.
                </p>
                <p className="stack">C# · .NET · React · MySQL</p>
              </article>
              <article>
                <div className="role-top">
                  <h3>Associate Product Manager</h3>
                  <span>Aug 2023 — May 2024</span>
                </div>
                <p className="company">NSAA · Lincoln, Nebraska</p>
                <p>
                  Built Python/Django APIs and backend services for self-service
                  features. Led PostgreSQL data model redesigns to improve
                  performance, integrity, and access control.
                </p>
                <p className="stack">Python · Django · PostgreSQL · Figma</p>
              </article>
              <article>
                <div className="role-top">
                  <h3>Associate Software Engineer</h3>
                  <span>Aug 2022 — May 2023</span>
                </div>
                <p className="company">Hudl · Lincoln, Nebraska</p>
                <p>
                  Collaborated across release cycles to deliver scalable
                  full-stack features and API integrations for 200+
                  organizations.
                </p>
                <p className="stack">
                  JavaScript · TypeScript · C# · React · d3.js
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="section wrap">
          <div className="section-heading">
            <p className="eyebrow">03 — WHAT I BRING</p>
            <h2>
              A curious mind.
              <br />
              <em>A practical toolkit.</em>
            </h2>
          </div>
          <div className="about-grid">
            <div>
              <h3 className="small-title">TECHNICAL TOOLKIT</h3>
              <dl className="skills">
                <dt>Systems & infrastructure</dt>
                <dd>
                  Kubernetes · Docker · Linux · RBAC · NetworkPolicy ·
                  Persistent storage
                </dd>
                <dt>Languages & frameworks</dt>
                <dd>
                  Python · Django · C# · .NET · JavaScript · TypeScript · React
                  · SQL
                </dd>
                <dt>Delivery & reliability</dt>
                <dd>
                  Jenkins · GitLab · Git · CI/CD · Automated testing ·
                  Root-cause analysis
                </dd>
                <dt>Application security</dt>
                <dd>
                  SAST · DAST · SCA · IAST · OWASP Top 10 · CVE / n-day analysis
                </dd>
              </dl>
            </div>
            <div className="education">
              <h3 className="small-title">EDUCATION & CREDENTIALS</h3>
              <article>
                <span className="muted">2026 — In progress</span>
                <h3>MSc, Computer Science</h3>
                <p>
                  Cybersecurity · Nanyang Technological University
                  <br />
                  Singapore
                </p>
              </article>
              <article>
                <span className="muted">Graduated May 2024</span>
                <h3>BSc, Software Engineering</h3>
                <p>
                  University of Nebraska–Lincoln
                  <br />
                  High Distinction · GPA 3.9 / 4.0
                </p>
              </article>
              <div className="cert">
                <span>↗</span>
                <p>
                  Certified Kubernetes Administrator <b>CKA</b>
                </p>
              </div>
              <div className="cert">
                <span>↗</span>
                <p>
                  Certified DevSecOps Professional <b>Practical DevSecOps</b>
                </p>
              </div>
              <p className="languages">
                English · Fluent-native &nbsp; / &nbsp; Vietnamese · Native
              </p>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="wrap">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>
              Let’s build
              <br />
              <em>something good.</em>
            </h2>
            <a href="mailto:haithanh23.15@gmail.com">
              haithanh23.15@gmail.com <span>↗</span>
            </a>
            <p>Software engineering · DevSecOps · Application security</p>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#main">
          Hai Do.
        </a>
        <span>Singapore · Built with care.</span>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Hai-Do-Resume.pdf"
        >
          Download resume ↓
        </a>
      </footer>
    </>
  );
}
