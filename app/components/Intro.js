import Link from "next/link";
import { highlights, hotel, photos } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

export function MarqueeRow({ items, reverse }) {
  // Items are rendered twice so the -50% marquee loop is seamless.
  return (
    <div className={`img-marquee__row ${reverse ? "img-marquee__row--rev" : ""}`}>
      {[...items, ...items].map((p, i) => (
        <Photo key={i} src={p.src} alt={p.alt} sizes="360px" />
      ))}
    </div>
  );
}

export default function Intro() {
  const half = Math.ceil(photos.length / 2);
  const rowB = [...photos.slice(half), ...photos.slice(0, half)];
  return (
    <section className="section">
      <div className="wrap intro">
        <div className="reveal" style={{ "--y": "18px" }}>
          <h2>
            We Provide <span className="text-amber">Comfortable</span>
            <br />
            Stays, Food &amp; Celebrations
          </h2>
          <p>
            {hotel.name} stands right on the GT Road (NH-19) at Akauna, Sherghati — an easy stop between Gaya, Bodh
            Gaya, Dobhi and Aurangabad, with plenty of space to park and rest.
          </p>
          <p>
            We welcome families, pilgrims bound for Bodh Gaya and Gaya, wedding parties and highway travellers with
            clean rooms, fresh home-style food and a banquet hall for your celebrations.
          </p>
          {/* Phones only: stands in for the hidden "We Are Perfect For" section */}
          <ul className="check-list show-phone">
            {highlights.map((h) => (
              <li key={h}>
                <Icon name="check" />
                {h}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-black">
            About Us
          </Link>
        </div>
        <div className="img-marquee reveal" style={{ "--d": ".15s" }}>
          <MarqueeRow items={photos} />
          <MarqueeRow items={rowB} reverse />
        </div>
        {/* Phones only: stands in for the hidden "Inside The Hotel" section */}
        <div className="center show-phone">
          <Link href="/gallery" className="btn-gradient">
            <Icon name="camera" /> View Gallery
            <span className="arrow">
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
