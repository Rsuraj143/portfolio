"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/data/resume";

const links = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-4"
      >
        <nav
          aria-label="Primary"
          className={`container-x flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? "glass max-w-5xl py-2.5 shadow-2xl shadow-black/40" : "py-4"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
            <Image
              src="/static/images/logo.svg"
              alt=""
              width={36}
              height={36}
              priority
              className="transition-transform duration-500 group-hover:rotate-[360deg]"
            />
            <span className="font-display text-lg font-light tracking-wide text-white">
              SURAJ<span className="font-bold">RAUDA</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                    active === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-violet-200 sm:inline-flex"
            >
              Resume <FiArrowUpRight />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="glass grid size-10 place-items-center rounded-full text-white lg:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink-900/95 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-lenis-prevent
          >
            <div className="container-x flex items-center justify-between py-6">
              <span className="font-display text-lg text-white">
                SURAJ<span className="font-bold">RAUDA</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full bg-white text-ink-950"
              >
                <FiX />
              </button>
            </div>
            <ul className="container-x flex flex-1 flex-col justify-center gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 font-display text-4xl font-bold text-white/90 hover:text-white sm:text-5xl"
                  >
                    <span className="font-mono text-sm text-violet-300/70">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x flex flex-wrap gap-3 pb-10">
              <a href={profile.resume} target="_blank" rel="noopener" className="chip py-2 text-sm">
                Download resume
              </a>
              <a href={`mailto:${profile.email}`} className="chip py-2 text-sm">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
