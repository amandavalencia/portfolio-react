import "./Project.css";
import { projects, type ProjectItem, type ProjectStatus } from "./projects";

const statusLabel: Record<ProjectStatus, string> = {
  klar: "Klar",
  pågående: "Pågående",
  "kommer-snart": "Kommer snart",
};

const ProjectImage = ({ project }: { project: ProjectItem }) => (
  <div className="project-media">
    {project.image ? (
      <img src={project.image} alt={`Skärmdump av ${project.title}`} loading="lazy" />
    ) : (
      <div className="project-media-fallback" aria-hidden="true">
        <span>
          {project.status === "kommer-snart" ? "Kommer snart" : project.title}
        </span>
      </div>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const comingSoon = project.status === "kommer-snart";
  const classes = [
    "project-card",
    project.featured ? "featured" : "",
    comingSoon ? "coming-soon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      <ProjectImage project={project} />

      <div className="project-card-body">
        <div className="project-meta">
          {project.featured && <span className="badge badge-accent">Utvalt</span>}
          {project.status === "pågående" && (
            <span className="badge">{statusLabel[project.status]}</span>
          )}
          {project.context && <span className="badge">{project.context}</span>}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.tech.length > 0 && (
          <ul className="project-tags" aria-label="Teknik">
            {project.tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        )}

        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export const Project = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="projects-section">
      <h1>Mina projekt</h1>
      <p className="section-sub">Ett urval av saker jag har byggt.</p>

      {featured.length > 0 && (
        <div className="projects-featured">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}

      <div className="projects-grid">
        {rest.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};
