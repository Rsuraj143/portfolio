import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import { profile } from "@/data/resume";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

const title = "Rauda Suraj — Front-End Developer | React, Next.js, TypeScript";
// keep under ~160 chars so search results don't truncate it
const description =
  "Front-End Developer in Bengaluru with 4+ years building fast, accessible, SEO-friendly web apps using React, Next.js, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title,
  description,
  applicationName: "Rauda Suraj",
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Bengaluru",
    "Core Web Vitals",
    "Technical SEO",
    "Rauda Suraj",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/static/images/logo.svg", apple: "/apple-icon.png" },
  // og/twitter images come from opengraph-image.tsx and twitter-image.tsx
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Rauda Suraj",
    locale: "en_IN",
    title,
    description,
    firstName: "Suraj",
    lastName: "Rauda",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.site}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      description,
      image: `${profile.site}/static/images/hero-cutout.png`,
      email: `mailto:${profile.email}`,
      url: profile.site,
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      worksFor: { "@type": "Organization", name: "Miles Education" },
      sameAs: [profile.socials.github, profile.socials.linkedin],
      knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "AWS", "Web Performance", "SEO"],
    },
    {
      "@type": "WebSite",
      "@id": `${profile.site}/#website`,
      url: profile.site,
      name: "Rauda Suraj",
      inLanguage: "en-IN",
      publisher: { "@id": `${profile.site}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
