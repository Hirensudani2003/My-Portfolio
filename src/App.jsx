import { useState, useEffect, useRef } from 'react'
import './App.css'

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main">

      <nav className={`navbar glass-nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <h2 className="logo-text">Hiren Sudani</h2>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="nav-links">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Global Background Engine */}
      <div className="global-background">
        <div className="grid-overlay"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <section id="home" className="hero">

        <div className="hero-container">
          <div className="hero-content">

            {/* Left Column: Copy & CTA */}
            <div className="hero-text-column">
              <div className="badge glowing-badge animate-fade-in-up">
                <span className="pulse-dot"></span> Available for Work
              </div>
              <h1 className="hero-title animate-fade-in-up delay-100">
                Building <span className="text-gradient">Business Software</span><br /> That Solves Real Problems
              </h1>
              <div className="identity-badge glass-panel animate-fade-in-up delay-200">
                <span className="highlight-text">3+ Years Experience</span>
                <span className="divider">|</span>
                <span className="highlight-text">200+ Windows Forms</span>
                <span className="divider">|</span>
                <span className="highlight-text">SQL Server Specialist</span>
              </div>
              <div className="hero-buttons animate-fade-in-up delay-300">
                <a href="#projects" className="btn btn-primary magnetic-btn">View Projects</a>
                <a href="#contact" className="btn btn-secondary glass-btn">Contact Me</a>
              </div>
            </div>

            {/* Right Column: Premium Visual Architecture Layout */}
            <div className="hero-visual-column animate-slide-in-right delay-400">
              <div className="architecture-wrapper">
                {/* Floating Ambient Badges */}
                <div className="tech-badge badge-csharp">C#</div>
                <div className="tech-badge badge-react">React</div>
                <div className="tech-badge badge-sql">SQL Server</div>
                <div className="tech-badge badge-api">REST API</div>

                {/* Main Glowing Container */}
                <div className="architecture-container">

                  {/* Node 1 */}
                  <div className="arch-node node-frontend">
                    <div className="node-icon">💻</div>
                    <div className="node-info">
                      <h4>User Interface</h4>
                      <span>(React / UI)</span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="arch-connection">
                    <div className="flow-dot"></div>
                  </div>

                  {/* Node 2 */}
                  <div className="arch-node node-api">
                    <div className="node-icon">⚙️</div>
                    <div className="node-info">
                      <h4>Business Logic</h4>
                      <span>(.NET / Node.js)</span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="arch-connection">
                    <div className="flow-dot"></div>
                  </div>

                  {/* Node 3 */}
                  <div className="arch-node node-db">
                    <div className="node-icon">🛢️</div>
                    <div className="node-info">
                      <h4>Data Layer</h4>
                      <span>(SQL Server)</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="section">
        <FadeInSection>
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I develop scalable business software solutions with strong expertise in <span className="highlight">C#</span>, <span className="highlight">.NET Framework</span>, <span className="highlight">SQL Server</span> and API integration.
              </p>
              <p>
                Focused on creating reliable, high-performance systems used in real production environments. Passionate about clean code and modern architecture.
              </p>
            </div>
            <div className="about-visual">
              <div className="tech-grid-container">
                <div className="tech-tag glow-cyan">C#</div>
                <div className="tech-tag glow-cyan">.NET</div>
                <div className="tech-tag glow-cyan">SQL Server</div>
                <div className="tech-tag glow-cyan">React.js</div>
                <div className="tech-tag glow-cyan">WinForms</div>
                <div className="tech-tag glow-cyan">REST APIs</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="services" className="section">
        <FadeInSection>
          <h2 className="section-title">What I Build</h2>
          <div className="services-grid">
            <div className="service-card glass-panel">
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Business Software</h3>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Inventory Systems</h3>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>REST APIs</h3>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Desktop Applications</h3>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="impact" className="section">
        <FadeInSection>
          <h2 className="section-title">Systems Running in Real Industry</h2>
          <div className="impact-grid">
            <div className="impact-stat glass-panel">
              <h3>200+</h3>
              <p>Windows Forms Built</p>
            </div>
            <div className="impact-stat glass-panel">
              <h3>50+</h3>
              <p>Databases Managed</p>
            </div>
            <div className="impact-stat glass-panel">
              <h3>24/7</h3>
              <p>System Uptime</p>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="projects" className="section">
        <FadeInSection>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid projects-asym">
            <div className="project-desktop glass-panel">
              <div className="mac-header">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="project-body">
                <h3>Diamond Inventory Management</h3>
                <p>Large-scale product-based solution for diamond stock tracking, order management and reporting.</p>
                <div className="tech-capsules">
                  <span className="capsule">C#</span>
                  <span className="capsule">SQL Server</span>
                  <span className="capsule">.NET</span>
                </div>
                <a href="#" className="btn-project magnetic mouse-gradient">View Project</a>
              </div>
            </div>

            <div className="project-desktop glass-panel">
              <div className="mac-header">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="project-body">
                <h3>Textile Management Software</h3>
                <p>Automated textile inventory and billing software using C# and SQL Server.</p>
                <div className="tech-capsules">
                  <span className="capsule">C#</span>
                  <span className="capsule">WinForms</span>
                  <span className="capsule">SQL Server</span>
                </div>
                <a href="#" className="btn-project magnetic mouse-gradient">View Project</a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="contact" className="section">
        <FadeInSection>
          <h2 className="section-title">Contact</h2>
          <div className="contact-card glass-panel">
            <p><span>📞</span> 9537162540</p>
            <p><span>📧</span> hirensudani690@gmail.com</p>
            <p><span>📍</span> Surat, India</p>
            <p><span>🔗</span> <a href="https://linkedin.com/in/hirensudani" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn Profile</a></p>
          </div>
        </FadeInSection>
      </section>

    </div>
  )
}

export default App