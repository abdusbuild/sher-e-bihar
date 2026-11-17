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
    </a>
  );
}

// Home page: one self-advancing photo slider beside the list of occasions, leading to /banquet.
function BanquetTeaser() {
  const photos = [
    { src: "/images/banquet-stage-2.jpg", alt: "Stage drapes and chandeliers" },
    { src: "/images/banquet-hall-3.jpg", alt: "Banquet hall floor and stage" },
    { src: "/images/banquet-hall-4.jpg", alt: "Banquet hall from the entrance" },
    { src: "/images/banquet-lounge.jpg", alt: "Lounge seating beside the hall" },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <Title sub={banquet.text}>Weddings &amp; Celebrations</Title>
        <div className="celebrate">
          {/* SiteScripts moves it on every 3 seconds, looping forever, and wires up the arrows, bars and swipe */}
          <div className="slider reveal" data-slider>
            <div className="slider__view" role="group" aria-label="Banquet hall photos">
              {photos.map((p, i) => (
                <figure key={p.src} className={i ? "slider__slide" : "slider__slide is-on"}>
                  <Photo src={p.src} alt={p.alt} sizes="(max-width: 860px) 100vw, 60vw" />
                </figure>
              ))}
              <div className="slider__bars" aria-hidden="true">
                {photos.map((p, i) => (
                  <span key={p.src} className={i ? undefined : "is-on"} />
                ))}
              </div>
            </div>
            <div className="slider__foot">
              <p data-slider-cap>{photos[0].alt}</p>
              <div className="slider__nav">
                <button type="button" className="peek__btn" data-slider-prev aria-label="Previous banquet photo">
                  <Icon name="arrow" className="ico--flip" />
                </button>
                <span data-slider-count>1 / {photos.length}</span>
                <button type="button" className="peek__btn" data-slider-next aria-label="Next banquet photo">
                  <Icon name="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="celebrate__body reveal" style={{ "--d": ".15s" }}>
            <ul className="occasions">
              {banquet.events.map((e) => (
                <li key={e.title}>
                  <Icon name={e.icon} />
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
            <div className="celebrate__actions">
              <EnquireEvent />
              <Link href="/banquet" className="arrow-link">
                View Details <Icon name="arrow" />
              </Link>
            </div>
          </div>
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
