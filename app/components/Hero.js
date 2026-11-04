import { heroImages } from "../data/site";
import Img from "./Img";

// Full-width photo slideshow with nothing on top of it. The page heading sits in <Intro />.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        {heroImages.map((src, i) => (
          <Img key={src} src={src} alt="" className={i === 0 ? "is-active" : undefined} sizes="100vw" priority={i === 0} />
        ))}
      </div>
    </section>
  );
}
