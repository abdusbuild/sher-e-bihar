import Link from "next/link";
import { banquet } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";
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

// Home page: two alternating photo and text rows that lead to /banquet.
function BanquetTeaser() {
  const rows = [
    { event: banquet.events[0], src: "/images/banquet-hall-1.jpg", alt: "Banquet hall seating with decorated stage" },
    { event: banquet.events[1], src: "/images/banquet-stage-heart.jpg", alt: "Floral heart stage" },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <Title sub={banquet.text}>Weddings &amp; Celebrations</Title>
        <div className="rows">
          {rows.map(({ event, src, alt }, i) => (
            <div key={event.title} className={`media-split ${i % 2 ? "media-split--rev" : ""}`}>
              <div className="reveal">
                <h3 className="subhead">{event.title}</h3>
                <p>{event.text}</p>
                <Link href="/banquet" className="arrow-link">
                  View Details <Icon name="arrow" />
                </Link>
              </div>
              <div className="media-split__img reveal" style={{ "--d": ".15s" }}>
                <Photo src={src} alt={alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Banquet events section. On the home page it links to /banquet.
export default function Banquet({ teaser = false }) {
  if (teaser) return <BanquetTeaser />;
  return (
    <section className="section">
      <div className="wrap">
        <Title sub={banquet.text}>Banquet &amp; Celebrations</Title>
        <Cards items={banquet.events} />
        <div className="center reveal btns-center" style={{ marginTop: 34 }}>
          {banquet.capacity && <p className="small-note">Capacity: {banquet.capacity}</p>}
          <EnquireEvent />
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
