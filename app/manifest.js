import { hotel } from "./data/site";

export default function manifest() {
  return {
    name: hotel.name,
    short_name: "Sher-e-Bihar",
    description: `${hotel.name}: hotel, restaurant and banquet on GT Road, Sherghati, Gaya.`,
    start_url: "/",
    display: "standalone",
    background_color: "#211551",
    theme_color: "#211551",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
