import type { Project } from "../types/project";

interface ProjectVisualProps {
  project: Project;
  large?: boolean;
}

export function ProjectVisual({ project, large = false }: ProjectVisualProps) {
  return (
    <div className={`project-visual accent-${project.accent} ${large ? "is-large" : ""}`} role="img" aria-label={`${project.title} interface screenshot placeholder`}>
      <div className="visual-toolbar"><i /><i /><i /><span>Screenshot placeholder</span></div>
      <div className="visual-layout">
        <div className="visual-sidebar"><b /><span /><span /><span /><span /></div>
        <div className="visual-content">
          <div className="visual-heading"><strong /><em /></div>
          <div className="visual-metrics"><span /><span /><span /></div>
          <div className="visual-table"><b /><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}
