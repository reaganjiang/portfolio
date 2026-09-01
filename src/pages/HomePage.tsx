import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export function HomePage() {
  return <main><HeroSection /><ProjectsSection /><AboutSection /><SkillsSection /><ContactSection /></main>;
}
