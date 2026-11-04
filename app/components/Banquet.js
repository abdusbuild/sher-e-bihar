import Link from "next/link";
import { banquet } from "../data/site";
import Icon from "./Icon";
import Title from "./Title";

function Cards({ items }) {
  return (
    <div className="cards" data-stagger="0.1">
      {items.map((e) => (
        <div key={e.title} className="card reveal">
          <Icon name={e.icon} />
          <h3>{e.title}</h3>
          <p>{e.text}</p>
        </div>
      ))}
    </div>
  );
}

export function EnquireEvent() {
  return (
    <a href="#" className="btn-gradient" data-open-modal data-room="Banquet / Event">
      Enquire For Your Event
      <span className="arrow">
        <Icon name="arrow" />
      </span>
    </a>
  );
}

// Banquet events section. On the home page it links to /banquet.
export default function Banquet({ teaser = false }) {
  return (
    <section className="section">
      <div className="wrap">
        <Title sub={banquet.text}>Banquet &amp; Celebrations</Title>
        <Cards items={banquet.events} />
        <div className="center reveal btns-center" style={{ marginTop: 34 }}>
          {banquet.capacity && <p className="small-note">Capacity: {banquet.capacity}</p>}
          {teaser ? (
            <Link href="/banquet" className="btn-gradient">
              Explore Banquet
              <span className="arrow">
                <Icon name="arrow" />
              </span>
            </Link>
          ) : (
            <EnquireEvent />
          )}
        </div>
      </div>
    </section>
  );
}

export function BanquetWhy() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Title sub="Everything your function needs, under one roof on the GT Road.">Why Celebrate With Us?</Title>
        <Cards items={banquet.why} />
        <div className="center reveal" style={{ marginTop: 34 }}>
          <EnquireEvent />
        </div>
      </div>
    </section>
  );
}
