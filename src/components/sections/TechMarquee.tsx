import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiAxios,
  SiBootstrap,
  SiCss,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGoogletagmanager,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const rowA: [IconType, string][] = [
  [SiReact, "React"],
  [SiNextdotjs, "Next.js"],
  [SiTypescript, "TypeScript"],
  [SiJavascript, "JavaScript"],
  [SiTailwindcss, "Tailwind CSS"],
  [SiRedux, "Redux"],
  [SiFramer, "Framer Motion"],
  [FaAws, "AWS"],
  [SiHtml5, "HTML5"],
];

const rowB: [IconType, string][] = [
  [SiCss, "CSS3"],
  [SiMui, "Material UI"],
  [SiBootstrap, "Bootstrap"],
  [SiReacthookform, "React Hook Form"],
  [SiAxios, "Axios"],
  [SiFigma, "Figma"],
  [SiGoogletagmanager, "Tag Manager"],
  [SiGit, "Git"],
  [SiGithub, "GitHub"],
];

function Row({ items, reverse = false }: { items: [IconType, string][]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul
        className={`flex w-max shrink-0 animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {doubled.map(([Icon, label], i) => (
          <li
            key={`${label}-${i}`}
            aria-hidden={i >= items.length}
            className="glass flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-medium whitespace-nowrap text-zinc-300 transition-colors hover:text-white"
          >
            <Icon className="text-xl text-violet-300" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="relative flex flex-col gap-4 py-10">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </section>
  );
}
