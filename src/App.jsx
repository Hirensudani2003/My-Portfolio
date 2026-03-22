import { useState, useEffect, useRef } from 'react'
import { Monitor, Settings, Database } from 'lucide-react'
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
                <div className="tech-badge badge-csharp float-slow">C#</div>
                <div className="tech-badge badge-react float-med">React</div>
                <div className="tech-badge badge-sql float-fast">SQL Server</div>
                <div className="tech-badge badge-api float-slow">REST API</div>

                {/* Main Glowing Container */}
                <div className="architecture-container hover-container-glow">

                  {/* Node 1 */}
                  <div className="arch-node double-border">
                    <div className="node-icon"><Monitor size={24} className="lucide-glow" /></div>
                    <div className="node-info">
                      <h4 className="sora-title">User Interface</h4>
                      <div className="neon-pill-container">
                        <span className="neon-pill">React</span><span className="neon-pill">UI</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="arch-connection active-glow-path">
                    <div className="data-pulse"></div>
                  </div>

                  {/* Node 2 */}
                  <div className="arch-node double-border">
                    <div className="node-icon"><Settings size={24} className="lucide-glow" /></div>
                    <div className="node-info">
                      <h4 className="sora-title">Business Logic</h4>
                      <div className="neon-pill-container">
                        <span className="neon-pill">.NET</span><span className="neon-pill">Node.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="arch-connection active-glow-path">
                    <div className="data-pulse"></div>
                  </div>

                  {/* Node 3 */}
                  <div className="arch-node double-border">
                    <div className="node-icon"><Database size={24} className="lucide-glow" /></div>
                    <div className="node-info">
                      <h4 className="sora-title">Data Layer</h4>
                      <div className="neon-pill-container">
                        <span className="neon-pill">SQL Server</span>
                      </div>
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

      <section id="services" className="section bento-section">
        <FadeInSection>
          <h2 className="section-title">What I Build</h2>
          <div className="bento-grid">
            <svg className="flow-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 L50 150" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="0.5" strokeDasharray="2,2" fill="none" />
            </svg>

            {/* Box 1 */}
            <div className="bento-card float-slow tilt-card feature-bus">
              <span className="corner top-left">+</span><span className="corner top-right">+</span>
              <span className="corner bottom-left">+</span><span className="corner bottom-right">+</span>
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Enterprise ERP & SaaS</h3>
              <p className="silver-desc">Architecting scalable business management systems with C# and .NET.</p>
              <div className="bento-tags">
                <span>C#</span><span>.NET Core</span><span>Microservices</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bento-card float-med tilt-card feature-inv">
              <span className="corner top-left">+</span><span className="corner top-right">+</span>
              <span className="corner bottom-left">+</span><span className="corner bottom-right">+</span>
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Inventory & Warehouse Logic</h3>
              <p className="silver-desc">Developing mission-critical stock tracking and supply chain automation.</p>
              <div className="bento-tags">
                <span>WinForms</span><span>EF Core</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bento-card float-fast tilt-card feature-api">
              <span className="corner top-left">+</span><span className="corner top-right">+</span>
              <span className="corner bottom-left">+</span><span className="corner bottom-right">+</span>
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>High-Performance REST APIs</h3>
              <p className="silver-desc">Building secure, stateless backend services for seamless data integration.</p>
              <div className="bento-tags">
                <span>ASP.NET Web API</span><span>JWT</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bento-card float-slow tilt-card feature-desktop">
              <span className="corner top-left">+</span><span className="corner top-right">+</span>
              <span className="corner bottom-left">+</span><span className="corner bottom-right">+</span>
              <div className="service-icon"><span className="checkmark-anim"></span></div>
              <h3>Production SQL Architectures</h3>
              <p className="silver-desc">Designing optimized database schemas and complex stored procedures for high-load environments.</p>
              <div className="bento-tags">
                <span>SQL Server</span><span>T-SQL</span><span>Optimization</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="projects" className="section">
        <FadeInSection>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid projects-asym relative-container">
            {/* Gradient Connecting to Impact */}
            <div className="vertical-gradient-line hidden-mobile"></div>

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

      <section id="impact" className="section stats-section">
        <div className="impact-radial-glow"></div>
        <FadeInSection>
          <h2 className="section-title">Industry Footprint</h2>
          <div className="impact-cards-container">
            <div className="stat-glass-card float-slow stat-hover-lift tilt-card">
              <h3 className="metallic-text">200+</h3>
              <p className="impact-label">Enterprise UI Modules Deployed</p>
            </div>

            <div className="stat-glass-card float-med stat-hover-lift tilt-card">
              <h3 className="metallic-text">50+</h3>
              <p className="impact-label">High-Availability SQL Instances</p>
            </div>

            <div className="stat-glass-card float-fast stat-hover-lift tilt-card">
              <div className="pulse-indicator-live">
                <span className="live-dot"></span> Live
              </div>
              <h3 className="metallic-text">99.9%</h3>
              <p className="impact-label">Zero-Downtime Deployments</p>
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