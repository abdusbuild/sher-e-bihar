import { hotel } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Auto-sliding photo frame (SiteScripts' [data-slider]: moves on every 3s, holds on hover, swipes on touch).
// Only the sharpest shots: portrait photos that fill the tall frame as they are, or 4096px originals.
const photos = [
  { src: "/images/exterior-forecourt.jpg", alt: "Hotel Sher-e-Bihar on the GT Road" },
  { src: "/images/room-double-window.jpg", alt: "Double bed by the window" },
  { src: "/images/room-family-1.jpg", alt: "Family room with two double beds" },
  { src: "/images/banquet-hall-4.jpg", alt: "Banquet hall from the entrance" },
];

// Home page band: why booking by phone or WhatsApp is the better deal.
export default function BookDirect() {
  return (
    <section className="section band--navy">
      <div className="wrap media-split">
        <div className="reveal">
          <span className="kicker">Best available rate</span>
          <h2 className="subhead">Book direct, with no booking fees</h2>
          <p>Booking by phone or WhatsApp means no booking-site commission, so we can offer you the best available rate.</p>
          <div className="btns">
            <a href={`tel:${hotel.phoneTel}`} className="btn-gold">
              <Icon name="phone" /> Call Now
            </a>
            <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </div>
          <a href={hotel.brochure.href} download className="brochure-link">
            <Icon name="download" /> Download our brochure <span>(PDF, {hotel.brochure.size})</span>
          </a>
        </div>
        <div className="media-split__img media-split__img--tall framed slider reveal" style={{ "--d": ".15s" }} data-slider>
          <div className="slider__view" role="group" aria-label="Hotel photos">
            {photos.map((p, i) => (
              <figure key={p.src} className={i ? "slider__slide" : "slider__slide is-on"}>
                <Photo src={p.src} alt={p.alt} sizes="(max-width: 860px) 100vw, 420px" />
              </figure>
            ))}
            <div className="slider__bars" aria-hidden="true">
              {photos.map((p, i) => (
                <span key={p.src} className={i ? undefined : "is-on"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
