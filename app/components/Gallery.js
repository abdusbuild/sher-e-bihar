import Link from "next/link";
import { photos } from "../data/site";
import Icon from "./Icon";
import { MarqueeRow } from "./Intro";
import Title from "./Title";

// Home page "Inside The Hotel" photo strips.
export default function Gallery() {
  return (
    <section className="section hide-phone" style={{ paddingBottom: 0 }}>
      <Title sub="A glimpse of our hotel on the GT Road.">Inside The Hotel</Title>
      <div className="img-marquee feature-rows reveal">
        <MarqueeRow items={photos} />
        <MarqueeRow items={[...photos].reverse()} reverse />
      </div>
      <div className="center reveal" style={{ margin: "30px 0 clamp(64px, 9vw, 110px)" }}>
        <Link href="/gallery" className="btn-gradient">
          <Icon name="camera" /> View Gallery
          <span className="arrow">
            <Icon name="arrow" />
          </span>
        </Link>
      </div>
    </section>
  );
}
