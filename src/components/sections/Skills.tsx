"use client";

import { motion } from "motion/react";
import { FiCloud, FiCpu, FiDatabase, FiLayers, FiLink, FiPenTool, FiTool, FiTrendingUp } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { skills } from "@/data/resume";

const icons = [FiLayers, FiPenTool, FiDatabase, FiLink, FiCloud, FiTrendingUp, FiTool, FiCpu];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              Technologies &amp; <span className="text-gradient">skills</span>.
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 ? "sm:col-span-2" : i === skills.length - 1 ? "sm:col-span-2 lg:col-span-4" : ""}
              >
                <SpotlightCard className="h-full p-6" color={i % 2 ? "rgba(34,211,238,0.14)" : "rgba(139,92,246,0.18)"}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-lg text-violet-200 ring-1 ring-white/10 transition-transform duration-500 group-hover:-rotate-12">
                      <Icon />
                    </span>
                    <h3 className="font-display font-semibold text-white">{group.group}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.03 }}
                        whileHover={{ y: -2 }}
                        className="chip cursor-default py-1.5 transition-colors hover:border-violet-300/40 hover:text-white"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
