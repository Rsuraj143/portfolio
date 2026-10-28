import { FiBookOpen, FiCode, FiGlobe, FiMapPin, FiZap } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { education, languages, profile } from "@/data/resume";

const pillars = [
  {
    icon: FiZap,
    title: "Performance-obsessed",
    body: "Core Web Vitals, image optimization, CSS cleanup, code splitting. I treat speed as a feature.",
  },
  {
    icon: FiCode,
    title: "Clean, reusable UI",
    body: "Component-driven, typed and accessible, from pixel-precise Figma handoffs to production.",
  },
  {
    icon: FiGlobe,
    title: "SEO that ships",
    body: "SSR, URL structure, pagination, robots.txt and technical fixes that move real health scores.",
  },
];

export function About() {
  return (
    <section id="about" className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            Turning designs into <span className="text-gradient">fast, delightful</span> products.
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <SpotlightCard className="h-full p-8 md:p-10">
            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="chip gap-2 py-1.5">
                <FiMapPin /> {profile.location}
              </span>
              {languages.map((l) => (
                <span key={l} className="chip py-1.5">
                  {l}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full p-8" color="rgba(34, 211, 238, 0.16)">
            <div className="mb-6 flex items-center gap-3 text-white">
              <span className="grid size-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <FiBookOpen />
              </span>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <ol className="relative space-y-6 border-l border-white/10 pl-6">
              {education.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-cyan-300 ring-4 ring-cyan-300/15" />
                  <p className="font-semibold text-white">{e.title}</p>
                  <p className="text-sm text-zinc-400">{e.place}</p>
                </li>
              ))}
            </ol>
          </SpotlightCard>
        </Reveal>

        {pillars.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={0.1 * i}>
            <SpotlightCard className="h-full p-7">
              <span className="mb-5 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-xl text-violet-200 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
