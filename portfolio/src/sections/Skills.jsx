
import './Skills.css'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      { name: 'HTML & CSS', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'React', level: 65 },
    ],
  },
  {
    number: '02',
    title: 'Tools & Integration',
    description: 'Working with APIs and everyday development tools.',
    skills: [
      { name: 'REST APIs', level: 60 },
      { name: 'Git', level: 70 },
      { name: 'GitHub', level: 65 },
      { name: 'Vite', level: 60 },
    ],
  },
  {
    number: '03',
    title: 'Testing',
    description: 'Writing tests and checking application behaviour.',
    skills: [
      { name: 'Vitest', level: 60 },
      { name: 'React Testing Library', level: 60 },
    ],
  },
]

function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">WHAT I WORK WITH</p>
          <h2>
            My technical <span>toolkit.</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use while building and testing web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-card-symbol" aria-hidden="true">
                  ✳
                </span>
              </div>

              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-heading">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>

                    <div
                      className="skill-progress"
                      role="progressbar"
                      aria-label={`${skill.name} self-assessed proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
