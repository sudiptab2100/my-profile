import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { Reveal, Section, SectionHeading, Socials } from "./ui";

export default function Contact() {
  const rows = [
    { icon: <FiMail />, label: "Email", value: profile.email, href: profile.socials.email },
    { icon: <FiPhone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <FiMapPin />, label: "Location", value: profile.location, href: null },
  ];

  return (
    <Section id="contact" className="bg-black-100/40">
      <SectionHeading
        kicker="Contact"
        title="Let's build something"
        sub="Have a role, project or idea in mind? My inbox is always open."
      />

      <div className="mx-auto grid max-w-4xl gap-8 xl:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="card h-full bg-gradient-to-br from-[#17171d] to-[#101014]">
            <h3 className="h3">
              Ready to start a <span className="text-accent">conversation</span>?
            </h3>
            <p className="mt-4 text-white/65">
              Whether it&apos;s backend engineering, blockchain, or zero-knowledge
              work — reach out and I&apos;ll get back to you.
            </p>
            <a
              href={profile.socials.email}
              className="btn-outline mt-8"
            >
              Say hello <FiArrowUpRight className="text-base" />
            </a>
            <div className="mt-8">
              <Socials />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-4">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent/10 text-lg text-accent ring-1 ring-accent/30">
                    {r.icon}
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                      {r.label}
                    </span>
                    <p className="text-white/90">{r.value}</p>
                  </div>
                </>
              );
              return r.href ? (
                <a
                  key={r.label}
                  href={r.href}
                  className="card flex items-center gap-4 hover:bg-[#1a1a21]"
                >
                  {inner}
                </a>
              ) : (
                <div key={r.label} className="card flex items-center gap-4">
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
