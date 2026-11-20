import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <span className="section-eyebrow">04 / EDUCATION</span>

        <div className="education-heading">
          <h2>
            My academic
            <br />
            <span>background.</span>
          </h2>

          <p>The foundation behind my journey into frontend development.</p>
        </div>

        <article className="education-card">
          <div className="education-year">
            <span>2021 — 2025</span>
            <span className="education-dot" />
          </div>

          <div className="education-details">
            <span className="education-degree-label">
              BACHELOR OF ENGINEERING
            </span>

            <h3>Electronics and Instrumentation Engineering</h3>

            <p className="education-college">
              SRM Valliammai Engineering College
            </p>

            <div className="education-result">
              <span>Academic Performance</span>
              <strong>8.03 CGPA</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
