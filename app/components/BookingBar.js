import { rooms } from "../data/site";
import Icon from "./Icon";

// Hyatt-style "find a room" bar that overlaps the bottom of the home hero.
// On submit (SiteScripts) the values are copied into the enquiry popup.
export default function BookingBar() {
  return (
    <div className="booking wrap">
      <form className="booking__form animate__animated animate__fadeIn" style={{ animationDelay: ".7s" }} data-booking noValidate>
        <div className="bfield">
          <label htmlFor="b-in">Check-in date</label>
          <div className="box">
            <Icon name="calendar" />
            <input id="b-in" name="checkin" type="date" required />
          </div>
        </div>
        <div className="bfield">
          <label htmlFor="b-out">Check-out date</label>
          <div className="box">
            <Icon name="calendar" />
            <input id="b-out" name="checkout" type="date" required />
          </div>
        </div>
        <div className="bfield">
          <label htmlFor="b-guests">Guests</label>
          <div className="box">
            <Icon name="user" />
            <select id="b-guests" name="guests" defaultValue="2 Adults">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>Family (5+)</option>
            </select>
          </div>
        </div>
        <div className="bfield">
          <label htmlFor="b-room">Room</label>
          <div className="box">
            <Icon name="bed" />
            <select id="b-room" name="room" defaultValue="">
              <option value="">Any room</option>
              {rooms.map((r) => (
                <option key={r.id}>{r.name}</option>
              ))}
              <option>Banquet / Event</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn-gold">
          Check Availability
        </button>
        <p className="booking__note">
          <Icon name="tag" />
          <span>
            <b>Best rate when you book direct</b> — by phone or WhatsApp, no booking fees.
          </span>
        </p>
      </form>
    </div>
  );
}
