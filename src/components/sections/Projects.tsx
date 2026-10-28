"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import { ProjectArt } from "@/components/ProjectArt";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { profile, projects, type Project } from "@/data/resume";

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

function ProjectCard({
  project,
  index,
  total,
  progress,
  stacked,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  // Earlier cards shrink slightly as later ones stack on top of them.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index - 1) * 0.035]);

  return (
    <div className="md:sticky" style={{ top: `calc(6.5rem + ${index * 18}px)` }}>
      <motion.div style={{ scale: stacked ? scale : 1 }} className="origin-top">
        <SpotlightCard className="bg-ink-900/95 backdrop-blur-xl">
          <article className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1.05fr_1fr] md:gap-10 md:p-8">
            <ProjectArt art={project.art} accent={project.accent} />

            <div className="flex flex-col px-2 pb-2 md:px-0 md:py-2">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  {String(index + 1).padStart(2, "0")} / {project.category}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
              <p className="mt-1 text-zinc-400">{project.tagline}</p>

              {project.stats && (
                <div className="mt-5 flex gap-3">
                  {project.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-emerald-400/10 px-3.5 py-2 ring-1 ring-emerald-400/20">
                      <p className="font-display text-lg font-bold text-emerald-300">{s.value}</p>
                      <p className="text-[11px] tracking-wide text-emerald-200/70 uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                    <FiCheck className="mt-1 shrink-0 text-violet-300" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-white"
                >
                  <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover/link:bg-[length:100%_1px]">
                    View live
                  </span>
                  <FiArrowUpRight className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
            </div>
          </article>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const stacked = useIsDesktop();

  return (
    <section id="projects" className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Projects &amp; <span className="text-gradient">achievements</span>.
          </>
        }
        description="From high-traffic marketing sites to real-time CRMs and offline-first apps."
      />

      <div ref={ref} className="flex flex-col gap-8 md:gap-[12vh]">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} total={projects.length} progress={scrollYProgress} stacked={stacked} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:bg-white/10"
        >
          <FiGithub /> More on GitHub <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
