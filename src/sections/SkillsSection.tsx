import { SectionHeading } from "../components/SectionHeading";
import { skillGroups } from "../data/site";

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="A practical stack for dependable business software." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article key={group.title}><div><span>0{index + 1}</span><h3>{group.title}</h3></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
          ))}
        </div>
      </div>
    </section>
  );
}
