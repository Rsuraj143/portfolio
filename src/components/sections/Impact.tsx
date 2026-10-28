"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { metrics } from "@/data/resume";

const R = 52;
const CIRC = 2 * Math.PI * R;

function Gauge({ from, to, max, decimals, id }: { from: number; to: number; max: number; decimals: number; id: string }) {
  return (
    <div className="relative size-36">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
        {/* the "before" value, faint */}
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="rgba(244,114,182,0.35)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(from / max) * CIRC} ${CIRC}`}
        />
        <motion.circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: from / max }}
          whileInView={{ pathLength: to / max }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-4xl font-bold text-white tabular-nums">
          <Counter from={from} to={to} decimals={decimals} />
        </span>
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Impact"
          title={
            <>
              Numbers that <span className="text-gradient">moved</span>.
            </>
          }
          description="Measurable results from performance and technical SEO work on production websites."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="glass group flex h-full flex-col items-center rounded-3xl p-7 text-center transition-transform duration-500 hover:-translate-y-1.5">
                <Gauge id={`gauge-${i}`} from={m.from} to={m.to} max={m.max} decimals={m.decimals} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{m.label}</h3>
                <p className="mt-1 text-sm text-zinc-400">{m.note}</p>
                {m.from > 0 && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {m.from} → {m.to} · +{m.to - m.from} pts
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
