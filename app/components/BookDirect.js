import { hotel } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Home page band: why booking by phone or WhatsApp is the better deal.
export default function BookDirect() {
  return (
    <section className="section band--stone">
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
        </div>
        <div className="media-split__img framed reveal" style={{ "--d": ".15s" }}>
          <Photo src="/images/exterior-day.jpg" alt="Hotel Sher-e-Bihar on the GT Road" />
        </div>
      </div>
    </section>
  );
}
