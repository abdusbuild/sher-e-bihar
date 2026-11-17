import { heroImages } from "../data/site";
import Img from "./Img";

// Full-width looping video reel with nothing on top of it. The page heading sits in <Intro />.
// Wide screens get three clips side by side, phones a single upright clip. The first hero photo
// sits underneath and shows until the video starts (or instead of it when motion is reduced).
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Img src={heroImages[0]} alt="" className="is-active" sizes="100vw" priority />
        <video className="hero__video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
          <source src="/videos/hero-landscape.mp4" type="video/mp4" media="(min-width: 560px)" />
          <source src="/videos/hero-portrait.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
