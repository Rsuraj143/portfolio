"use client";

import { useEffect } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/resume";

const channels = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "in/surajrauda", href: profile.socials.linkedin },
  { icon: FiGithub, label: "GitHub", value: "Rsuraj143", href: profile.socials.github },
];

const field =
  "peer w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 pt-6 pb-2.5 text-white placeholder-transparent outline-none transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-violet-500/10";
const label =
  "pointer-events-none absolute top-2 left-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-300";

export function Contact() {
  useEffect(() => {
    import("kwesforms").then((m) => m.default.init());
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">great</span> together.
            </>
          }
          description="Have a role, a project or just want to talk front-end? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            {channels.map(({ icon: Icon, label: name, value, href }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/20 text-lg text-white ring-1 ring-white/10">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500">{name}</span>
                  <span className="block truncate font-medium text-white">{value}</span>
                </span>
                <FiArrowUpRight className="text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            ))}
            <p className="mt-2 flex items-center gap-2 px-1 text-sm text-zinc-500">
              <FiMapPin /> Based in {profile.location}, open to remote opportunities
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="kwes-form glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
              action="https://kwesforms.com/api/f/vjupCiNM6fcJihlNE8mx"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input id="name" name="name" type="text" placeholder="Your name" data-kw-rules="required|min:2|max:50" className={field} />
                  <label htmlFor="name" className={label}>
                    Your name *
                  </label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" placeholder="Email" data-kw-rules="required|email" className={field} />
                  <label htmlFor="email" className={label}>
                    Email *
                  </label>
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  data-kw-rules="required|min:50|max:1000"
                  className={`${field} resize-none`}
                />
                <label htmlFor="message" className={label}>
                  Tell me about your project *
                </label>
              </div>
              <div className="mt-2">
                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)] transition hover:bg-violet-100"
                  >
                    Send message
                    <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
