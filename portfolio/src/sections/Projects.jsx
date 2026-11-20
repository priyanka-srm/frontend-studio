
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "TestFlow",
    category: "React Testing Lab",
    description:
      "A hands-on testing environment built to explore how React applications can be tested with confidence. Focused on component behaviour, user interactions, and reliable test coverage.",
    highlights: [
      "Component and interaction testing",
      "Vitest and React Testing Library",
      "Error boundary and route testing",
    ],
    technologies: ["React", "Vitest", "Testing Library", "JavaScript"],
    type: "Testing",
    liveUrl: "https://testflow-sand.vercel.app/",
    sourceUrl:
      "https://github.com/priyanka-srm/frontend-studio/tree/main/testflow",
  },
  {
    number: "02",
    name: "Smart Movie Explorer",
    category: "Movie Discovery Application",
    description:
      "A movie discovery experience that lets users search for films, explore movie details, and save favourites. Built with a focus on API integration and smooth user interactions.",
    highlights: [
      "Movie search using OMDb API",
      "Detailed movie information",
      "Favorites saved with localStorage",
    ],
    technologies: ["React", "JavaScript", "OMDb API", "CSS"],
    type: "Web Application",
    liveUrl: "https://frontend-studio-inky.vercel.app/",
    sourceUrl:
      "https://github.com/priyanka-srm/frontend-studio/tree/main/smart-movie-explorer-react",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-eyebrow">03 / SELECTED WORK</span>

          <div className="projects-heading-content">
            <h2>
              Things I've
              <br />
              <span>built & learned.</span>
            </h2>

            <p>
              A collection of projects where I turn concepts into
              working applications and learn by building.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.number}>
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-content">
                <div className="project-intro">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                <div className="project-details">
                  <div className="project-highlights">
                    <h4>WHAT IT DOES</h4>

                    <ul>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-stack">
                    <h4>BUILT WITH</h4>

                    <div className="project-tech-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
