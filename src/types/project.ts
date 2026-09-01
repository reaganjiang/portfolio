export type ProjectStatus = "Portfolio Demo" | "In Progress";

export interface ProjectLink {
  label: string;
  url?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  technology: string[];
  status: ProjectStatus;
  accent: "teal" | "blue" | "amber";
  links: ProjectLink[];
}
