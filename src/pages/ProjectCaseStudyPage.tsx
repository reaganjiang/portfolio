import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { ProjectVisual } from "../components/ProjectVisual";
import type { Project } from "../types/project";

interface ProjectCaseStudyPageProps {
  project: Project;
}

export function ProjectCaseStudyPage({ project }: ProjectCaseStudyPageProps) {
  const scrollToSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = `${project.title} Case Study — Reagan Jiang`;
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = "Reagan Jiang — Business Web Application Developer"; };
  }, [project]);

  return (
    <main className="case-study">
      <section className="case-hero">
        <div className="container">
          <a className="back-link" href="#projects"><ArrowLeft size={17} /> All projects</a>
          <div className="case-title-row"><div><p className="eyebrow">Case study · {project.number}</p><h1>{project.title}</h1></div><span className="status-badge">{project.status}</span></div>
          <p className="case-lede">{project.shortDescription}</p>
          <ProjectVisual project={project} large />
          <p className="screenshot-note">Interface preview placeholder — replace with an actual project screenshot when available.</p>
        </div>
      </section>

      <section className="case-content section">
        <div className="container case-layout">
          <aside className="case-sidebar"><span>Contents</span><a href="#overview" onClick={scrollToSection("overview")}>Overview</a><a href="#problem" onClick={scrollToSection("problem")}>Problem</a><a href="#solution" onClick={scrollToSection("solution")}>Solution</a><a href="#features" onClick={scrollToSection("features")}>Key Features</a><a href="#technology" onClick={scrollToSection("technology")}>Technology</a></aside>
          <div className="case-main">
            <section id="overview"><p className="eyebrow">Overview</p><h2>What this application is designed to do.</h2><p>{project.overview}</p></section>
            <section id="problem"><p className="eyebrow">Problem</p><h2>The operational friction.</h2><p>{project.problem}</p></section>
            <section id="solution"><p className="eyebrow">Solution</p><h2>A clearer way to manage the work.</h2><p>{project.solution}</p><div className="value-callout"><span>Intended business value</span><p>{project.result}</p></div></section>
            <section id="features"><p className="eyebrow">Key features</p><h2>Core functionality.</h2><ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={18} /> {feature}</li>)}</ul></section>
            <section className="screenshots-section"><p className="eyebrow">Screenshots</p><h2>Product views.</h2><div className="screenshot-grid"><ProjectVisual project={project} /><ProjectVisual project={project} /></div><p className="screenshot-note">Replace these placeholders in the project data/assets when real screens are ready.</p></section>
            <section id="technology"><p className="eyebrow">Technology</p><h2>Application stack.</h2><ul className="technology-list">{project.technology.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="case-links"><p className="eyebrow">Links</p><h2>Explore the project.</h2><div>{project.links.map((link) => link.url ? <a className="button button-primary" href={link.url} key={link.label} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={17} /></a> : <span className="button button-disabled" key={link.label}>{link.label} · Coming soon</span>)}</div></section>
          </div>
        </div>
      </section>
    </main>
  );
}
