"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiBootstrap,
  SiFigma,
  SiFramer,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Magnetic } from "@/components/ui/Magnetic";
import { profile } from "@/data/resume";

const ease = [0.22, 1, 0.36, 1] as const;

// positions are % of the portrait; the side tiles also cover where baked-in icons were removed
const floatingIcons = [
  { icon: SiReact, label: "React", color: "#61dafb", left: "15%", top: "19%" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff", left: "68%", top: "20.5%" },
  { icon: SiJavascript, label: "JavaScript", color: "#f7df1e", left: "3.5%", top: "42.5%" },
  { icon: SiFigma, label: "Figma", color: "#f24e1e", left: "78.5%", top: "42.5%" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38bdf8", left: "6%", top: "70%" },
  { icon: SiBootstrap, label: "Bootstrap", color: "#7952b3", left: "77%", top: "70%" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6", left: "2.5%", top: "2.5%", small: true },
  { icon: SiRedux, label: "Redux", color: "#764abc", left: "85.5%", top: "2.5%", small: true },
  { icon: SiFramer, label: "Framer Motion", color: "#e5e7eb", left: "2.5%", top: "89%", small: true },
  { icon: SiGit, label: "Git", color: "#f05032", left: "85.5%", top: "89%", small: true },
];

function FloatingIcon({
  icon: Icon,
  label,
  color,
  left,
  top,
  small,
  index,
}: (typeof floatingIcons)[number] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 + index * 0.08, ease }}
      className={`absolute z-10 ${small ? "w-[12%]" : "w-[15.5%]"}`}
      style={{ left, top }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4 + (index % 4) * 0.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        title={label}
        className="grid aspect-square place-items-center rounded-[24%] border border-white/10 bg-ink-800 shadow-lg shadow-black/50"
        style={{ color }}
      >
        <Icon aria-hidden className="size-[46%]" />
      </motion.div>
    </motion.div>
  );
}

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-gradient whitespace-nowrap"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SplitName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-label={text} className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "110%", rotate: 8, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + i * 0.035, ease }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]"
      style={{ perspective: 1000 }}
    >
      {/* soft glow behind the portrait */}
      <div aria-hidden className="absolute -inset-6 rounded-full bg-violet-600/15 blur-3xl" />

      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
        style={{ rotateX, rotateY }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square"
        >
          <Image
            src="/static/images/hero-cutout.png"
            alt={`${profile.name}, ${profile.role}`}
            fill
            priority
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 460px, 340px"
            className="object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent_97%)]"
          />

          <div aria-hidden>
            {floatingIcons.map((item, i) => (
              <FloatingIcon key={item.label} {...item} index={i} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease }}
        className="glass absolute -bottom-5 left-1/2 z-10 bg-ink-900/80 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-4 py-2.5 whitespace-nowrap shadow-xl shadow-black/40"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-sm text-zinc-300">
          Currently at <span className="font-semibold text-white">Miles Education</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.95], [1, 0]);

  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgba(139,92,246,0.12), transparent 70%)`;

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-20"
    >
      {/* background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/4 size-[36rem] animate-aurora rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 size-[30rem] animate-aurora rounded-full bg-cyan-500/20 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute -bottom-40 -left-20 size-[28rem] animate-aurora rounded-full bg-fuchsia-600/15 blur-[120px] [animation-delay:-12s]" />
        <motion.div style={{ background: spotlight }} className="absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-10"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-zinc-300"
          >
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {profile.location} · {profile.experienceYears}+ years experience
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1 text-2xl font-medium text-zinc-400 sm:text-3xl">
              <SplitName text="Hi, I'm" />
            </span>{" "}
            <span className="block overflow-hidden pb-2">
              <SplitName text={profile.name} delay={0.25} />
            </span>
            <span className="sr-only">, {profile.role}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            I build fast, accessible and SEO-friendly web experiences with{" "}
            <span className="text-zinc-200">React, Next.js, TypeScript</span> and{" "}
            <span className="text-zinc-200">Tailwind CSS</span>, and I care about every
            millisecond, taking a production site&apos;s PageSpeed score from{" "}
            <span className="font-semibold text-emerald-300">40 to 98</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">View my work</span>
                <FiArrowUpRight className="relative transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <FiDownload /> Resume
              </a>
            </Magnetic>
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
                  className="grid size-11 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <Banner />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 md:flex"
      >
        Scroll <FiArrowDown />
      </motion.a>
    </section>
  );
}
