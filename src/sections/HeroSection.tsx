import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-identity"><strong>Reagan Jiang</strong><span>Business Web Application Developer</span></div>
          <p className="eyebrow"><span className="availability-dot" /> Available for selected freelance projects</p>
          <h1>I build web applications that help businesses manage their <span>operations, data, and workflows.</span></h1>
          <p className="hero-intro">I design practical, maintainable systems around the way a business actually works—from internal operations to customer-facing workflows.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Work <ArrowDownRight size={18} /></a>
            <a className="button button-secondary" href="#contact">Contact Me <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Development focus">
          <div className="hero-card-top"><span>Business application focus</span><span>01—03</span></div>
          <div className="process-map">
            <div><small>01</small><strong>Understand</strong><span>Business process</span></div><i />
            <div><small>02</small><strong>Structure</strong><span>Data & rules</span></div><i />
            <div><small>03</small><strong>Build</strong><span>Useful software</span></div>
          </div>
          <p>Software should make the work clearer—not add another layer of complexity.</p>
        </aside>
      </div>
      <div className="container hero-footer"><span>React · TypeScript · ASP.NET Core</span><span>Based in Indonesia · Working remotely</span></div>
    </section>
  );
}
