import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { profile } from "../data/portfolio";
import { Reveal, Section, SectionHeading, Socials } from "./ui";
import { SpotlightCard } from "./aceternity/spotlight-card";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — fail silently.
    }
  };

  const rows = [
    {
      icon: <FiMail />,
      label: "Email",
      value: profile.email,
      href: profile.socials.email,
      copy: true,
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <Section id="contact" className="bg-black-100/40">
      <SectionHeading
        kicker="Contact"
        title="Get in touch"
        sub="Have a role, project or idea in mind? My inbox is always open."
      />

      <div className="mx-auto grid max-w-5xl items-stretch gap-6 xl:grid-cols-[1.15fr_1fr]">
        {/* CTA tile */}
        <Reveal>
          <div className="group relative h-full">
            {/* animated mint→cyan glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-0.5 rounded-[1.7rem] bg-gradient-to-r from-accent via-accent2 to-accent bg-[length:200%_auto] opacity-20 blur-lg transition-opacity duration-500 animate-gradient-pan group-hover:opacity-40 motion-reduce:animate-none"
            />
            <SpotlightCard className="glass-strong flex h-full flex-col justify-between gap-10 p-8 xl:p-10">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-white/70 backdrop-blur">
                  <span className="h-2 w-2 flex-none rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,153,0.85)] animate-pulse-dot motion-reduce:animate-none" />
                  Available for opportunities
                </span>

                <h3 className="h3 mt-6">
                  <span className="text-gradient animate-gradient-pan">
                    Let&apos;s build something
                  </span>
                </h3>
                <p className="mt-4 max-w-md text-white/65">
                  Whether it&apos;s backend engineering, blockchain, or
                  zero-knowledge work — reach out and I&apos;ll get back to you.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-8">
                <a href={profile.socials.email} className="btn-outline w-fit">
                  Say hello <FiArrowUpRight className="text-base" />
                </a>
                <div className="border-t border-white/10 pt-6">
                  <Socials />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>

        {/* Contact rows */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-4">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent/10 text-lg text-accent ring-1 ring-accent/30">
                    {r.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                      {r.label}
                    </span>
                    <p className="truncate text-white/90">{r.value}</p>
                  </div>
                </>
              );

              if (r.copy) {
                return (
                  <div key={r.label} className="card flex items-center gap-3">
                    <a
                      href={r.href}
                      className="flex min-w-0 flex-1 items-center gap-4"
                    >
                      {inner}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={
                        copied ? "Email address copied" : "Copy email address"
                      }
                      className="flex h-9 flex-none items-center gap-2 rounded-full border border-white/10 px-3 font-mono text-xs uppercase tracking-widest text-white/60 transition-all duration-300 hover:border-accent/50 hover:text-accent"
                    >
                      {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                );
              }

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
