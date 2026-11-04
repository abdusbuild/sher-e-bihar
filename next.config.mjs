/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets test builds use a separate folder (NEXT_DIST_DIR=.next-test) without touching the dev server's .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    // Serve AVIF where supported (smallest), WebP otherwise; the original JPEG is the fallback.
    formats: ["image/avif", "image/webp"],
    // 85 for photos on the page, 90 for the full-screen viewer: high enough that compression isn't visible.
    qualities: [85, 90],
    // Optimised copies are cached for 30 days. Give a replaced photo a new file name to refresh it sooner.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
