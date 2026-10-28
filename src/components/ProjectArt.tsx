"use client";

import { motion } from "motion/react";
import type { ProjectArt as Art } from "@/data/resume";

// Lightweight illustrative "screens" for each project — pure CSS/SVG, no heavy screenshots.

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink-950/80 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-rose-400/70" />
        <span className="size-2.5 rounded-full bg-amber-400/70" />
        <span className="size-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-white/5" />
      </div>
      <div className="relative flex-1 p-4">{children}</div>
    </div>
  );
}

function Site() {
  return (
    <BrowserFrame>
      <div className="flex h-full gap-4">
        <div className="flex flex-1 flex-col gap-2.5">
          <div className="h-3 w-3/4 rounded bg-white/25" />
          <div className="h-3 w-1/2 rounded bg-white/15" />
          <div className="mt-2 h-16 rounded-lg bg-gradient-to-r from-violet-500/40 to-orange-400/30" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-10 rounded-md bg-white/10" />
            ))}
          </div>
        </div>
        <div className="grid w-28 place-items-center">
          <div className="relative size-24">
            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#34d399"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0.4 }}
                whileInView={{ pathLength: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </svg>
            <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold text-emerald-300">98</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function Crm() {
  const rows = ["New lead", "Contacted", "Enrolled", "Follow-up"];
  return (
    <BrowserFrame>
      <div className="flex h-full gap-3">
        <div className="hidden w-14 flex-col gap-2 rounded-lg bg-white/5 p-2 sm:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-6 rounded ${i === 1 ? "bg-cyan-400/40" : "bg-white/10"}`} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {rows.map((status, i) => (
            <motion.div
              key={status}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2"
            >
              <span className="size-6 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-500" />
              <span className="h-2 flex-1 rounded bg-white/20" />
              <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[10px] text-cyan-200">{status}</span>
            </motion.div>
          ))}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="mt-auto self-end rounded-full bg-emerald-400/20 px-3 py-1 text-[10px] font-medium text-emerald-200"
          >
            ● Live call · Pusher
          </motion.div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function MapArt() {
  const pins = [
    [22, 30],
    [58, 22],
    [74, 58],
    [36, 66],
    [50, 44],
  ];
  return (
    <BrowserFrame>
      <div className="bg-grid absolute inset-0 opacity-60" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" preserveAspectRatio="none">
        <path d="M10,80 C30,60 40,70 55,45 S85,30 92,15" fill="none" stroke="rgba(45,212,191,0.35)" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M5,30 C25,40 50,20 95,55" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
      </svg>
      {pins.map(([x, y], i) => (
        <span key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="absolute -inset-3 animate-ping rounded-full bg-emerald-400/30" style={{ animationDelay: `${i * 0.4}s` }} />
          <span className="relative block size-3 rounded-full bg-emerald-300 ring-4 ring-emerald-300/20" />
        </span>
      ))}
      <div className="glass absolute right-3 bottom-3 rounded-lg px-3 py-1.5 text-[10px] text-zinc-200">Offline · 12 queued ↻</div>
    </BrowserFrame>
  );
}

function Chart() {
  const bars = [40, 65, 52, 80, 58, 92, 74];
  return (
    <BrowserFrame>
      <div className="flex h-full flex-col">
        <div className="mb-3 flex gap-2">
          {["Reach", "CTR", "Conv."].map((k) => (
            <div key={k} className="flex-1 rounded-lg bg-white/[0.06] px-2 py-1.5">
              <p className="text-[9px] text-zinc-500">{k}</p>
              <div className="mt-1 h-2 w-2/3 rounded bg-amber-300/50" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-orange-500/50 to-amber-300/80"
            />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function Templates() {
  return (
    <div className="relative h-full">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ rotate: 0, x: 0 }}
          whileInView={{ rotate: (i - 1) * 7, x: `${(i - 1) * 16}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-[18%] inset-y-[6%] overflow-hidden rounded-xl border border-white/15 bg-ink-900 shadow-2xl"
          style={{ zIndex: i === 1 ? 2 : 1 }}
        >
          <div
            className={`h-1/3 bg-gradient-to-br ${
              ["from-pink-500/50 to-violet-500/40", "from-rose-400/60 to-orange-300/40", "from-violet-500/50 to-cyan-400/40"][i]
            }`}
          />
          <div className="space-y-2 p-3">
            <div className="h-2 w-2/3 rounded bg-white/25" />
            <div className="h-2 w-1/2 rounded bg-white/15" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-8 rounded bg-white/10" />
              <div className="h-8 rounded bg-white/10" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const arts: Record<Art, () => React.ReactElement> = {
  site: Site,
  crm: Crm,
  map: MapArt,
  chart: Chart,
  templates: Templates,
};

export function ProjectArt({ art, accent }: { art: Art; accent: string }) {
  const Component = arts[art];
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl p-5 sm:p-7">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-25 transition-opacity duration-500 group-hover:opacity-40`} />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <Component />
      </div>
    </div>
  );
}
