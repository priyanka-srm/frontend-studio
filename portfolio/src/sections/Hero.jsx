import "./Hero.css"

const highlights = ["React", "JavaScript", "Responsive UI"];

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-container container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="status-dot" />
            OPEN TO FRONTEND OPPORTUNITIES
          </p>

          <p className="hero-intro">Hello, I'm</p>

          <h1 id="hero-title">
            Priyanka
            <span className="hero-name-accent"> S.</span>
          </h1>

          <h2 className="hero-role">Frontend Developer</h2>

          <p className="hero-description">
            I build responsive and user-friendly web experiences with React and
            modern frontend technologies. I enjoy turning ideas into clean,
            functional interfaces.
          </p>

          <div className="hero-highlights" aria-label="Core skills">
            {highlights.map((item) => (
              <span className="hero-highlight" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#projects">
              View my work
              <span aria-hidden="true">Γåù</span>
            </a>

            <a className="hero-button hero-button-secondary" href="#contact">
              Get in touch
            </a>

            <a
              className="hero-button hero-button-secondary"
              href="/Priyanka-Swaminathan-Resume.pdf"
              download="Priyanka-Swaminathan-Resume.pdf"
            >
              Download Resume
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-note">
            Curious mind. Thoughtful code. Continuous growth.
          </p>
        </div>

        <div className="hero-visual" aria-label="Decorative code illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-card">
            <div className="visual-card-header">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="visual-file-name">developer.jsx</span>
            </div>

            <div className="visual-code">
              <p>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span> developer = {"{"}
              </p>
              <p>
                <span className="code-muted">02</span> &nbsp;name:{" "}
                <span className="code-green">'Priyanka'</span>,
              </p>
              <p>
                <span className="code-muted">03</span> &nbsp;role:{" "}
                <span className="code-green">'Frontend Developer'</span>,
              </p>
              <p>
                <span className="code-muted">04</span> &nbsp;skills: [
              </p>
              <p>
                <span className="code-muted">05</span> &nbsp;&nbsp;
                <span className="code-green">'React'</span>,
              </p>
              <p>
                <span className="code-muted">06</span> &nbsp;&nbsp;
                <span className="code-green">'JavaScript'</span>,
              </p>
              <p>
                <span className="code-muted">07</span> &nbsp;&nbsp;
                <span className="code-green">'CSS'</span>
              </p>
              <p>
                <span className="code-muted">08</span> &nbsp;],
              </p>
              <p>
                <span className="code-muted">09</span> &nbsp;learning:{" "}
                <span className="code-purple">true</span>
              </p>
              <p>
                <span className="code-muted">10</span> {"}"}
              </p>
            </div>

            <div className="visual-card-footer">
              <span className="footer-indicator" />
              <span>Always building, always learning</span>
            </div>
          </div>

          <div className="floating-chip chip-react">
            <span className="chip-symbol">ΓÜ¢</span>
            React
          </div>

          <div className="floating-chip chip-js">
            <span className="chip-symbol">JS</span>
            JavaScript
          </div>

          <div className="visual-decoration decoration-top">Γ£│</div>
          <div className="visual-decoration decoration-bottom">Γ£ª</div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span />
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
