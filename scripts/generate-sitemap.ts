// Runs before `vite dev` and `vite build` (predev/prebuild); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://medamine-portfolio.lovable.app";

const projectIds = [
  "hotel-booking",
  "project-flow",
  "clothes-store-tn",
  "debt-recovery",
  "ecommerce",
  "leave-management",
  "product-management",
];

const skillSlugs = [
  "react", "javascript", "typescript", "java", "python", "c-c", "php",
  "nodejs", "expressjs", "springboot", "restful-apis", "html-css",
  "tailwind-css", "ant-design", "material-ui", "android-java",
  "android-studio", "mobile-ui-ux", "mysql", "mongodb", "oracle",
  "sqlite", "postgresql", "git-github", "agile-scrum", "powerbi",
  "postman", "docker", "visual-studio-code", "eclipse", "intellij-idea",
];

interface Entry { path: string; changefreq?: string; priority?: string }

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...projectIds.map((id) => ({ path: `/project/${id}`, changefreq: "monthly", priority: "0.8" })),
  ...skillSlugs.map((s) => ({ path: `/skill/${s}`, changefreq: "monthly", priority: "0.5" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
