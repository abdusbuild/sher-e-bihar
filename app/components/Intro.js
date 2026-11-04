import Link from "next/link";
import { heroStats, hotel } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Opening block of the home page: holds the page's <h1>, with a photo in the arch shape.
export default function Intro() {
  return (
    <section className="section">
      <div className="wrap intro">
        <div className="reveal">
          <span className="kicker">Welcome to {hotel.name}</span>
          <h1>Comfort on the GT Road, with taste &amp; celebration under one roof</h1>
          <p>
            {hotel.name} stands right on the GT Road (NH-19) at Akauna, Sherghati — an easy stop between Gaya, Bodh
            Gaya, Dobhi and Aurangabad, with plenty of space to park and rest.
          </p>
          <p>
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
        <div className="arch reveal" style={{ "--d": ".15s" }}>
          <Photo src="/images/exterior-night.jpg" alt="Hotel Sher-e-Bihar lit up at night" sizes="(max-width: 860px) 90vw, 440px" />
        </div>
      </div>
    </section>
  );
}
