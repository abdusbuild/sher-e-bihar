import { hotel } from "./data/site";

export default function manifest() {
  return {
    name: hotel.name,
    short_name: "Sher-e-Bihar",
    description: `${hotel.name}: hotel, restaurant and banquet on GT Road, Sherghati, Gaya.`,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
