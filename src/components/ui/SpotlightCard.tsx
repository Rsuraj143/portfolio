"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

/** Card with a soft radial glow that follows the cursor. */
export function SpotlightCard({ children, className = "", color = "rgba(139, 92, 246, 0.18)" }: Props) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${color}, transparent 70%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <div
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
