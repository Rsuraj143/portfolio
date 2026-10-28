import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/static/images/hero-cutout.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 78% 40%, #2e1065 0%, #05060a 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 80px", width: 680 }}>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>Hi, I&apos;m</div>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2, marginTop: 4 }}>{profile.name}</div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#c4b5fd", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 26, color: "#a1a1aa", marginTop: 24 }}>
            {`${profile.location} · ${profile.experienceYears}+ years experience`}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            {stack.map((s) => (
              <div
                key={s}
                style={{
                  fontSize: 22,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={600} height={600} style={{ position: "absolute", right: 0, bottom: -30 }} />
      </div>
    ),
    size,
  );
}
