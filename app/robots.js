import { abs } from "./data/seo";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: abs("/sitemap.xml"),
  };
}
