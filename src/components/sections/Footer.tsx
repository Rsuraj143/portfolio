import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="container-x overflow-hidden pt-16 pb-10">
        <p
          aria-hidden
          className="pointer-events-none bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-center font-display text-[13vw] leading-none font-bold tracking-tighter whitespace-nowrap text-transparent select-none lg:text-[9.5rem]"
        >
          RAUDA SURAJ
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS &amp; Motion.
          </p>
          <div className="flex items-center gap-2">
            {[
              { href: profile.socials.github, icon: FiGithub, label: "GitHub" },
              { href: profile.socials.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/10 transition hover:border-white/30 hover:text-white"
              >
                <Icon />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 grid size-10 place-items-center rounded-full bg-white text-ink-950 transition hover:-translate-y-1"
            >
              <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
