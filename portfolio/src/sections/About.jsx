import "./About.css";

const highlights = [
  {
    value: "2025",
    label: "Graduation year",
  },
  {
    value: "8.03",
    label: "CGPA",
  },
  {
    value: "React",
    label: "Frontend focus",
  },
];

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>
          <h2>
            A little about <span>me.</span>
          </h2>
          <p className="section-subtitle">The person behind the code.</p>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">
              I'm a curious learner with a growing passion for
              <span> frontend development.</span>
            </p>

            <p>
              I graduated with a B.E. in Electronics and Instrumentation
              Engineering. During my learning journey, I discovered my interest
              in building web interfaces and creating useful experiences through
              code.
            </p>

            <p>
              I work with React and JavaScript to build responsive applications,
              connect APIs, and create interfaces that are clear and easy to
              use. I also enjoy testing my work and improving it through
              feedback.
            </p>

            <p>
              I'm currently focused on strengthening my frontend skills,
              building practical projects, and growing into a confident frontend
              developer.
            </p>

            <a className="about-text-link" href="#projects">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-side">
            <div className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                ✳
              </div>
              <p className="about-card-label">MY APPROACH</p>
              <h3>Learn. Build. Improve.</h3>
              <p>
                I believe in learning by building, staying curious, and making
                every project a little better than the last.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="about-highlight" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
