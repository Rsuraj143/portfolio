"use client";

import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { experience } from "@/data/resume";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve been <span className="text-gradient">shipping</span>.
          </>
        }
      />

      <ol ref={listRef} className="relative space-y-12 pl-8 md:pl-14">
        <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:left-[15px]" />
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 md:left-[15px]"
        />

        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="absolute top-8 -left-8 grid size-4 place-items-center rounded-full bg-ink-950 ring-2 ring-violet-400 md:-left-14 md:size-8"
            >
              <span className={`size-1.5 rounded-full bg-violet-300 md:size-2.5 ${job.current ? "animate-pulse" : ""}`} />
            </motion.span>

            <Reveal delay={i * 0.05}>
              <SpotlightCard className="p-6 md:p-9">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2">
                      <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="object-contain" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{job.role}</h3>
                      <p className="text-zinc-300">{job.company}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-zinc-500">
                        <FiMapPin /> {job.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`self-start rounded-full px-3.5 py-1.5 font-mono text-xs ${
                      job.current
                        ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20"
                        : "bg-white/5 text-zinc-400 ring-1 ring-white/10"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-7 grid gap-3 md:grid-cols-2 md:gap-x-8">
                  {job.points.map((point, j) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: 0.04 * j, duration: 0.5 }}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
