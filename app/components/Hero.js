import { heroImages } from "../data/site";
import Img from "./Img";
import HeroVideo from "./HeroVideo";

// Full-width looping hero film with the page's one-line <h1> centred on top of it.
// Landscape screens get the 16:9 cut, portrait screens (phones, upright tablets) the vertical cut.
// Each cut ships as WebM (smaller) with an MP4 fallback. While the video loads, its own first frame
// shows as a CSS background (see .hero__video), so there's no jump from a photo to the film.
// With reduced motion the video is hidden and the first hero photo underneath shows instead.
// HeroVideo adds a pause/play button (top-right) so visitors can stop the motion.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Img src={heroImages[0]} alt="" className="is-active" sizes="100vw" priority />
        <HeroVideo />
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">Stay, Dine &amp; Celebrate on NH-19</h1>
        <p className="hero__tagline">Hotel · Restaurant · Banquet — Sherghati</p>
      </div>
    </section>
  );
}
