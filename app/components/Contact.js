import { hotel, reach, rooms } from "../data/site";
import Icon from "./Icon";
import { ReceptionBell } from "./Illustrations";
import Title from "./Title";

// Short call-to-action shown on the phone home page only.
export function ContactCta() {
  return (
    <section className="section show-phone">
      <div className="wrap">
        <div className="contact-cta">
          <Title sub={hotel.frontDesk}>Talk To Us</Title>
          <div className="contact-cta__btns reveal">
            <a href={`tel:${hotel.phoneTel}`} className="btn-gold">
              <Icon name="phone" /> Call Now
            </a>
            <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-amber">
              <Icon name="whatsapp" /> WhatsApp
            </a>
            <a href="#" className="btn-outline-amber" data-open-modal>
              <Icon name="mail" /> Enquire
            </a>
            <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline-amber">
              <Icon name="pin" /> Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// "Contact Us Via The Form" block, used on About, Banquet and Contact.
export default function Contact({ map = false }) {
  return (
    <section className="section" id="enquiry">
      <div className="wrap">
        <div className="title contact-title reveal">
          <h2>Contact Us Via The Form</h2>
          <p className="sub">&amp; We&apos;ll Get Back To You As Soon As We Can.</p>
          <div className="uline" />
        </div>
        <div className="contact-box reveal" style={{ "--d": ".1s" }}>
          <div className="contact-box__info">
            <div>
              <p className="lbl">Phone</p>
              <a className="val" href={`tel:${hotel.phoneTel}`}>
                {hotel.phoneDisplay}
              </a>
            </div>
            {hotel.email && (
              <div>
                <p className="lbl">Email</p>
                <a className="val" href={`mailto:${hotel.email}`}>
                  {hotel.email}
                </a>
              </div>
            )}
            <div>
              <p className="lbl">Address</p>
              <p className="val">{hotel.address}</p>
              <a className="val dir" href={hotel.mapLink} target="_blank" rel="noopener noreferrer">
                Get directions →
              </a>
            </div>
            <div>
              <p className="lbl">Timings</p>
              <p className="val">
                {hotel.frontDesk}
                <br />
                Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
              </p>
            </div>
            <div>
              <p className="lbl">Social</p>
              <div className="socials-sm">
                <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <Icon name="whatsapp" />
                </a>
                <a href={hotel.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icon name="instagram" />
                </a>
                <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                  <Icon name="pin" />
                </a>
              </div>
            </div>
            <ReceptionBell />
          </div>

          <form data-enquiry noValidate>
            <div className="uf-row">
              <div className="uf">
                <label htmlFor="c-name">Name *</label>
                <input id="c-name" name="name" required autoComplete="name" />
              </div>
              <div className="uf">
                <label htmlFor="c-phone">Phone *</label>
                <input id="c-phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
            </div>
            <div className="uf">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" />
            </div>
            <div className="uf-row">
              <div className="uf">
                <label htmlFor="c-in">Check-in</label>
                <input id="c-in" name="checkin" type="date" />
              </div>
              <div className="uf">
                <label htmlFor="c-out">Check-out</label>
                <input id="c-out" name="checkout" type="date" />
              </div>
            </div>
            <div className="uf-row">
              <div className="uf">
                <label htmlFor="c-room">Room / Purpose</label>
                <select id="c-room" name="room" defaultValue="">
                  <option value="">Select</option>
                  {rooms.map((r) => (
                    <option key={r.id}>{r.name}</option>
                  ))}
                  <option>Banquet / Event</option>
                  <option>Restaurant / Group Meal</option>
                </select>
              </div>
              <div className="uf">
                <label htmlFor="c-guests">Guests</label>
                <select id="c-guests" name="guests" defaultValue="2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>
            <div className="uf">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="message" />
            </div>
            <button type="submit" className="btn-outline-amber">
              Submit
            </button>
            <p className="form-status" aria-live="polite" />
          </form>
        </div>

        {map && (
          <div className="map-frame reveal">
            <iframe src={hotel.mapEmbed} title={`${hotel.name} location map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Reach() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Title sub="Approximate distances — call us and we'll help plan your route.">How To Reach Us</Title>
        <div className="cards cards--3" data-stagger=".1">
          {reach.map((r) => (
            <div key={r.title} className="card reveal">
              <Icon name={r.icon} />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
