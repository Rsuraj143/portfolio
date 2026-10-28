"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = { from?: number; to: number; duration?: number; decimals?: number };

/** Counts from `from` to `to` once it enters the viewport. */
export function Counter({ from = 0, to, duration = 1.8, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(from);
  const text = useTransform(value, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
