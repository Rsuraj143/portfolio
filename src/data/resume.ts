// Single source of truth for portfolio content — mirrors public/Suraj_Rauda_Resume.pdf.

export const profile = {
  name: "Rauda Suraj",
  shortName: "Suraj",
  role: "Front-End Developer",
  location: "Bengaluru, India",
  email: "raudasuraj4@gmail.com",
  phone: "+91 7008298174",
  experienceYears: 4.1,
  resume: "/Suraj_Rauda_Resume.pdf",
  site: "https://surajrauda.vercel.app",
  socials: {
    github: "https://github.com/Rsuraj143",
    linkedin: "https://www.linkedin.com/in/surajrauda/",
  },
  roles: [
    "Front-End Developer",
    "React & Next.js Engineer",
    "Performance Optimizer",
    "UI Craftsman",
  ],
  summary:
    "Front-End Developer with 4.1 years of experience building scalable, responsive, and user-friendly web applications using React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, and Redux. Experienced in developing high-performance websites, integrating REST APIs, implementing SEO best practices, and optimizing Core Web Vitals and website performance. Familiar with AWS services, including S3, CloudFront, and Lambda. Strong focus on clean, maintainable code, reusable components, accessibility, and delivering seamless user experiences.",
};

export const metrics = [
  { label: "PageSpeed score", from: 40, to: 98, max: 100, decimals: 0, note: "Miles Education website" },
  { label: "Ahrefs site health", from: 78, to: 99, max: 100, decimals: 0, note: "Technical SEO overhaul" },
  { label: "Landing page PSI", from: 60, to: 85, max: 100, decimals: 0, note: "Image & frontend optimization" },
  { label: "Years of experience", from: 0, to: 4.1, max: 5, decimals: 1, note: "React · Next.js · TypeScript" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Miles Education",
    role: "Front-End Developer",
    location: "Bengaluru, India",
    period: "May 2024 — Present",
    logo: "/static/images/milesLogo.png",
    current: true,
    points: [
      "Develop and maintain responsive, high-performance web applications and websites using React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.",
      "Develop and enhance MilesForce CRM features — lead management, enrollment workflows, user authorization, lead details, and team management interfaces.",
      "Build reusable UI components, landing pages, course pages, blog pages, and dynamic forms to improve development efficiency and user experience.",
      "Optimized Core Web Vitals, improving the landing page's PageSpeed Insights score from 60 to 85 through frontend and image optimization.",
      "Implement SEO best practices: server-side rendering, URL restructuring, pagination improvements, robots.txt corrections, and technical SEO fixes.",
      "Integrate REST APIs and backend services for form submissions, lead generation, data validation, and enrollment workflows.",
      "Improve CSS performance by removing unused and duplicated styles and optimizing shared components and stylesheets.",
      "Work with AWS S3, CloudFront, and Lambda for website hosting and backend workflows.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "AWS"],
  },
  {
    company: "TRooInbound Pvt. Ltd.",
    role: "Front-End Developer",
    location: "Surat, Gujarat, India",
    period: "Nov 2022 — May 2024",
    logo: "/static/images/TrooInbound_logo.svg",
    points: [
      "Developed dynamic web applications using React.js, Redux, and Tailwind CSS.",
      "Collaborated with cross-functional teams to integrate APIs and enhance performance.",
      "Built an Admin Analytics Dashboard with React, Formik, and Recharts.",
      "Created in-house templates for TRooThemes using React.js, Bootstrap, Tailwind CSS, and Material UI.",
      "Delivered an offline-first voting app using React.js, Tailwind CSS, and Service Workers for offline support.",
    ],
    stack: ["React", "Redux", "Tailwind CSS", "Formik", "Recharts", "Service Workers"],
  },
];

export type ProjectArt = "site" | "crm" | "map" | "chart" | "templates";

export type Project = {
  title: string;
  art: ProjectArt;
  tagline: string;
  category: string;
  accent: string;
  stack: string[];
  highlights: string[];
  stats?: { value: string; label: string }[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Miles Education Website",
    art: "site",
    tagline: "Website development & performance optimization",
    category: "Marketing site · SEO · Performance",
    accent: "from-violet-500 via-fuchsia-500 to-orange-400",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "AWS S3", "CloudFront", "Lambda"],
    highlights: [
      "Responsive, SEO-friendly course landing pages, blogs, campaign pages, and reusable UI components.",
      "Image optimization, CSS cleanup, and removal of duplicate and unused styles.",
      "Fixed 404s, URL structures, pagination, and robots.txt issues for technical SEO.",
      "SSR, optimized blog routing, improved related-blog functionality, and image quality.",
      "Lead-generation forms with validation, thank-you redirects, and Google Tag Manager.",
    ],
    stats: [
      { value: "40 → 98", label: "PageSpeed" },
      { value: "78 → 99", label: "Ahrefs health" },
    ],
  },
  {
    title: "MilesForce CRM",
    art: "crm",
    tagline: "Internal CRM for leads, enrollments & teams",
    category: "Web app · Real-time · RBAC",
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Axios", "Pusher"],
    highlights: [
      "Responsive, interactive CRM UI components converted from Figma.",
      "Real-time lead calling with Pusher for instant communication updates.",
      "Role-based routing and access control for secure, personalized experiences.",
      "REST APIs for lead tracking, enrollment workflows, and performance analytics.",
      "Code splitting and lazy loading for a fast experience on every screen.",
    ],
  },
  {
    title: "Canvassing App",
    art: "map",
    tagline: "Offline-first voting web application",
    category: "PWA · Offline sync · Maps",
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    stack: ["React", "Tailwind CSS", "Service Workers", "IndexedDB", "Google Maps API", "Axios"],
    highlights: [
      "Built for areas with low or no internet access.",
      "Service Workers + IndexedDB for offline storage, sync, and retrieval.",
      "Google Maps API to track user location and visualize voter zones.",
      "Seamless offline-to-online transitions across devices.",
    ],
  },
  {
    title: "Push Analytics",
    art: "chart",
    tagline: "Admin panel for marketing data visualization",
    category: "Dashboard · Data viz",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    stack: ["React", "Tailwind CSS", "Recharts", "Formik", "Axios"],
    highlights: [
      "Interactive charts and graphs with Recharts for insightful data display.",
      "Secure role-based routing and user-specific views.",
      "Reusable, responsive components translated from Figma mockups.",
    ],
  },
  {
    title: "TRooThemes",
    art: "templates",
    tagline: "Business-ready React website templates",
    category: "Templates · Design systems",
    accent: "from-pink-500 via-rose-500 to-violet-500",
    stack: ["React", "Tailwind CSS", "Bootstrap", "React-Bootstrap", "Material UI"],
    highlights: [
      "A collection of templates tailored for diverse industries.",
      "Fully responsive, cross-browser compatible UI components.",
      "Mobile-first performance and consistent visual design.",
    ],
    link: "https://www.troothemes.com/products/category/react-js-themes/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Aceternity UI"],
  },
  {
    group: "UI/UX & Animation",
    items: ["Responsive Design", "Material UI", "Framer Motion", "Figma → React", "UI Implementation"],
  },
  {
    group: "State & Forms",
    items: ["Redux", "Context API", "React Hooks", "React Hook Form", "Formik", "Yup", "Zustand"],
  },
  {
    group: "API & Integration",
    items: ["REST APIs", "Axios", "JSON", "Form Validation", "Backend Integration"],
  },
  {
    group: "AWS & Cloud",
    items: ["AWS S3", "CloudFront", "Lambda", "API Gateway"],
  },
  {
    group: "Performance & SEO",
    items: ["Core Web Vitals", "PageSpeed Insights", "Technical SEO", "SSR", "Image Optimization"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Google Tag Manager", "ImageKit"],
  },
  {
    group: "Core Competencies",
    items: ["Reusable Components", "Cross-Browser Compatibility", "Accessibility", "Clean Code"],
  },
];

export const education = [
  { title: "UI Full Stack Development", place: "Naresh IT" },
  { title: "B.Tech, Mechanical Engineering", place: "BPUT, Odisha, India" },
];

export const languages = ["English", "Hindi", "Odia", "Telugu", "Gujarati"];
