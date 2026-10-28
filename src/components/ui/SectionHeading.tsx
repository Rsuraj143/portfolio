import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 flex flex-col gap-4 md:mb-16 ${centered ? "items-center text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-violet-300/80">
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base text-zinc-400 md:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
