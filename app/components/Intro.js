import Link from "next/link";
import { heroStats, hotel } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Auto-sliding photo frame (SiteScripts' [data-slider]: moves on every 3s and loops forever, holds on hover, swipes on touch).
// No position bars on purpose. Every slide loads up front so none arrives blurry when its turn comes.
// The building and its grounds.
const photos = [
  { src: "/images/exterior-entrance.jpg", alt: "Hotel Sher-e-Bihar seen from the GT Road forecourt" },
  { src: "/images/exterior-garden.jpg", alt: "Hotel building from the garden side" },
  { src: "/images/garden-walkway.jpg", alt: "Garden walkway beside the hotel" },
];

// Opening block of the home page (its heading is an h2: the page's <h1> sits on the hero video), with a photo in a softly rounded portrait frame.
export default function Intro() {
  return (
    <section className="section">
      <div className="wrap intro">
        <div className="reveal">
          <span className="kicker">Welcome to {hotel.name}</span>
          <h2 className="intro__title">Comfort on the GT Road, with taste &amp; celebration under one roof</h2>
          <p>
            {hotel.name} stands right on the GT Road (NH-19) at Akauna, Sherghati — an easy stop between Gaya, Bodh
            Gaya, Dobhi and Aurangabad, with plenty of space to park and rest.
          </p>
          <p className="intro__more">
            We welcome families, pilgrims bound for Bodh Gaya and Gaya, wedding parties and highway travellers with
            clean rooms, fresh home-style food and a banquet hall for your celebrations.
          </p>
          <div className="intro-stats">
            {heroStats.map((s) => (
              <div key={s.label} className="stat-big">
                <b>{s.text}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="arrow-link">
            About Us <Icon name="arrow" />
          </Link>
        </div>
        <div className="leaf slider reveal" style={{ "--d": ".15s" }} data-slider>
          <div className="slider__view" role="group" aria-label="Hotel photos">
            {photos.map((p, i) => (
              <figure key={p.src} className={i ? "slider__slide" : "slider__slide is-on"}>
                <Photo src={p.src} alt={p.alt} loading="eager" sizes="(max-width: 600px) 100vw, (max-width: 860px) min(78vw, 380px), 440px" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
