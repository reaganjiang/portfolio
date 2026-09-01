import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { siteDetails } from "../data/site";

const contacts = [
  { label: "Email", value: siteDetails.email, icon: Mail },
  { label: "WhatsApp", value: siteDetails.whatsapp, icon: MessageCircle },
  { label: "GitHub", value: siteDetails.github, icon: ArrowUpRight },
  { label: "LinkedIn", value: siteDetails.linkedin, icon: ArrowUpRight },
];

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div><p className="eyebrow">Start a conversation</p><h2>Have a project or business process that could benefit from a custom web application? <span>Let&apos;s discuss it.</span></h2></div>
        <div className="contact-links">
          {contacts.map(({ label, value, icon: Icon }) => value ? (
            <a href={value} key={label} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"><span>{label}</span><Icon size={19} /></a>
          ) : (
            <div className="contact-placeholder" key={label}><span>{label}</span><small>Add your {label} link</small></div>
          ))}
        </div>
      </div>
    </section>
  );
}
