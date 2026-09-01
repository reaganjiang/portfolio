import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { projects } from "./data/projects";
import { useHashRoute } from "./hooks/useHashRoute";
import { useTheme } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";
import { ProjectCaseStudyPage } from "./pages/ProjectCaseStudyPage";

export default function App() {
  const route = useHashRoute();
  const { theme, toggleTheme } = useTheme();
  const projectId = route.startsWith("projects/") ? route.split("/")[1] : undefined;
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    if (!project && route !== "home") requestAnimationFrame(() => document.getElementById(route)?.scrollIntoView({ behavior: "smooth" }));
  }, [project, route]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div id="main-content">{project ? <ProjectCaseStudyPage project={project} /> : <HomePage />}</div>
      <Footer />
    </>
  );
}
