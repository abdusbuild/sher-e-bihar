import { hotel, rooms } from "../data/site";
import Icon from "./Icon";

// Loader, "Enquire" button + options panel, and the Get-in-touch popup.
// Behaviour is wired up in SiteScripts.
export default function Overlays() {
  return (
    <>
      <div className="enquire-panel" id="enquirePanel" role="dialog" aria-label="Contact options" hidden>
        <button type="button" className="enquire-panel__close" aria-label="Close">
          <Icon name="close" />
        </button>
        <strong className="enquire-panel__title">Need Help?</strong>
        <p className="enquire-panel__lede">Choose how you&apos;d like to reach us:</p>
        <div className="enquire-panel__list">
          <a className="enquire-opt" href={`tel:${hotel.phoneTel}`}>
            <span className="enquire-opt__icon enquire-opt__icon--call">
              <Icon name="phone" />
            </span>
            <span className="enquire-opt__copy">
              <strong>Call Us</strong>
              <small>{hotel.phoneDisplay}</small>
            </span>
          </a>
          <a className="enquire-opt" href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <span className="enquire-opt__icon enquire-opt__icon--whatsapp">
              <Icon name="whatsapp" />
            </span>
            <span className="enquire-opt__copy">
              <strong>WhatsApp</strong>
              <small>Chat with the front desk</small>
            </span>
          </a>
          {hotel.email && (
            <a className="enquire-opt" href={`mailto:${hotel.email}`}>
              <span className="enquire-opt__icon enquire-opt__icon--mail">
                <Icon name="mail" />
              </span>
              <span className="enquire-opt__copy">
                <strong>Email Us</strong>
                <small>{hotel.email}</small>
              </span>
            </a>
          )}
          <a className="enquire-opt" href={hotel.mapLink} target="_blank" rel="noopener noreferrer">
            <span className="enquire-opt__icon enquire-opt__icon--mail">
              <Icon name="pin" />
            </span>
            <span className="enquire-opt__copy">
              <strong>Get Directions</strong>
              <small>NH-19, Akauna, Sherghati</small>
            </span>
          </a>
          <a className="enquire-opt" href="#" data-open-modal>
            <span className="enquire-opt__icon enquire-opt__icon--book">
              <Icon name="calendar" />
            </span>
            <span className="enquire-opt__copy">
              <strong>Booking Enquiry</strong>
              <small>Send your dates &amp; room</small>
            </span>
          </a>
        </div>
        <span className="enquire-panel__foot">{hotel.frontDesk}</span>
      </div>
      <button type="button" className="enquire-fab" aria-haspopup="dialog" aria-expanded="false" aria-controls="enquirePanel">
        <Icon name="chat" />
        <span>Enquire</span>
      </button>

      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal__box">
          <button className="modal__close" aria-label="Close">
            <Icon name="close" />
          </button>
          <h2 id="modal-title">GET IN TOUCH</h2>
          <div className="uline" />
          <p className="lead">Share your details for a quick booking enquiry</p>
          <form data-enquiry noValidate>
            <div className="ifield">
              <label htmlFor="m-name">Your Name</label>
              <div className="box">
                <Icon name="user" />
                <input id="m-name" name="name" placeholder="Enter your name" required autoComplete="name" />
              </div>
            </div>
            <div className="ifield">
              <label htmlFor="m-phone">Phone Number</label>
              <div className="box">
                <Icon name="phone" />
                <input id="m-phone" name="phone" type="tel" placeholder="Enter your phone number" required autoComplete="tel" />
              </div>
            </div>
            <div className="ifield-row">
              <div className="ifield">
                <label htmlFor="m-in">Check-in</label>
                <div className="box">
                  <input id="m-in" name="checkin" type="date" required />
                </div>
              </div>
              <div className="ifield">
                <label htmlFor="m-out">Check-out</label>
                <div className="box">
                  <input id="m-out" name="checkout" type="date" required />
                </div>
              </div>
            </div>
            <div className="ifield">
              <label htmlFor="m-room">Room (Optional)</label>
              <div className="box">
                <Icon name="bed" />
                <select id="m-room" name="room" defaultValue="">
                  <option value="">Any room</option>
                  {rooms.map((r) => (
                    <option key={r.id}>{r.name}</option>
                  ))}
                  <option>Banquet / Event</option>
                </select>
              </div>
            </div>
            <input type="hidden" id="m-guests" name="guests" />
            <button type="submit" className="btn-submit">
              Send Enquiry
            </button>
            <p className="form-status" aria-live="polite" style={{ textAlign: "center", marginTop: 10 }} />
            <p className="note">Opens WhatsApp with your details — we reply as quickly as we can</p>
          </form>
        </div>
      </div>
    </>
  );
}
