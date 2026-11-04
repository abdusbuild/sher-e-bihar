import Link from "next/link";
import { hotel, rooms } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";
import Title from "./Title";

// Home page room showcase with pill tabs.
export default function Rooms() {
  return (
    <section className="section">
      <div className="wrap">
        <Title sub={`Clean, comfortable rooms with attached bathrooms and room service. Check-in ${hotel.checkIn} · Check-out ${hotel.checkOut}.`}>
          Our Rooms
        </Title>
        <div className="pills reveal" data-tabs="#room-showcase" role="tablist">
          {rooms.map((r, i) => (
            <button key={r.id} className={`pill ${i === 0 ? "is-active" : ""}`} data-tab={r.id} role="tab" aria-selected={i === 0}>
              {r.name}
            </button>
          ))}
        </div>
        <div className="showcase reveal" id="room-showcase">
          {rooms.map((r, i) => (
            <div key={r.id} className={`showcase__panel ${i === 0 ? "is-active" : ""}`} data-panel={r.id}>
              <div className="showcase__img">
                <Photo src={r.images[0]} alt={r.name} />
              </div>
              <div className="showcase__body">
                <span className="showcase__tag">{r.tag}</span>
                <h3>{r.name}</h3>
                <ul className="showcase__meta">
                  {r.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p>{r.text}</p>
                <div className="btns">
                  <a href="#" className="btn-white" data-open-modal data-room={r.name}>
                    Book Now
                  </a>
                  <Link href={`/rooms#${r.id}`} className="btn-outline">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center hide-phone">
          <span className="tip reveal">
            <b>Tip:</b> Book direct by phone or WhatsApp for the best available rate
          </span>
        </div>
        <div className="center reveal" style={{ marginTop: 26 }}>
          <Link href="/rooms" className="btn-gradient">
            View All Rooms
            <span className="arrow">
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
