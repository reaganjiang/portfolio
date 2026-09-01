import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div><p className="eyebrow">About</p><p className="about-index">04</p></div>
        <div className="about-copy">
          <h2>I build software around the way a business needs to operate.</h2>
          <div className="about-columns">
            <p>I specialize in business applications and internal systems that help companies manage operational workflows, transactions, and data more reliably.</p>
            <p>My background includes C#, VB.NET, ASP.NET, REST API development, and relational databases. I am extending that foundation into modern web experiences with React, TypeScript, and Angular.</p>
          </div>
          <a className="text-link" href="#contact">Discuss a project <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
