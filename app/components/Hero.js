import { heroImages } from "../data/site";
import Img from "./Img";

// Full-width looping hero film with nothing on top of it. The page heading sits in <Intro />.
// Landscape screens get the 16:9 cut, portrait screens (phones, upright tablets) the vertical cut.
// Each cut ships as WebM (smaller) with an MP4 fallback. While the video loads, its own first frame
// shows as a CSS background (see .hero__video), so there's no jump from a photo to the film.
// With reduced motion the video is hidden and the first hero photo underneath shows instead.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Img src={heroImages[0]} alt="" className="is-active" sizes="100vw" priority />
        <video className="hero__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1}>
          <source src="/videos/hero-desktop.webm" type="video/webm" media="(min-aspect-ratio: 1/1)" />
          <source src="/videos/hero-desktop.mp4" type="video/mp4" media="(min-aspect-ratio: 1/1)" />
          <source src="/videos/hero-mobile.webm" type="video/webm" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
