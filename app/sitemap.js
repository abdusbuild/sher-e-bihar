import { abs } from "./data/seo";

const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "monthly" },
  { path: "/banquet", priority: 0.9, changeFrequency: "monthly" },
  { path: "/dining", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return pages.map((p) => ({ url: abs(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority }));
}
