import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Business applications shaped around real operational needs." description="Each project starts with the process that needs to work better—not with a list of technologies." />
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <a className="project-visual-link" href={`#projects/${project.id}`} aria-label={`View ${project.title} case study`}><ProjectVisual project={project} /></a>
              <div className="project-card-copy">
                <div className="project-meta"><span>{project.number}</span><span className="status-badge">{project.status}</span></div>
                <h3><a href={`#projects/${project.id}`}>{project.title}</a></h3>
                <p>{project.shortDescription}</p>
                <ul className="tag-list" aria-label={`${project.title} key areas`}>{project.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <a className="text-link" href={`#projects/${project.id}`}>View case study <ArrowUpRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="disclosure-note">These are portfolio demonstration projects. Their status is shown clearly and they are not presented as completed client engagements.</p>
      </div>
    </section>
  );
}
