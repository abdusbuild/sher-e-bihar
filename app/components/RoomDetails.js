import { hotel, rooms } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Rooms page: one alternating block per room with a 3-photo mosaic.
export default function RoomDetails() {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        {rooms.map((r, i) => (
          <div key={r.id} id={r.id} className={`room-detail ${i % 2 ? "room-detail--rev" : ""}`}>
            <div className="room-detail__media reveal">
              {r.images.map((src, j) => (
                <div key={j} className="room-detail__tile">
                  <Photo src={src} alt={`${r.name} photo ${j + 1}`} sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
              ))}
            </div>
            <div className="reveal" style={{ "--d": ".15s" }}>
              <span className="showcase__tag">{r.tag}</span>
              <h2>{r.name}</h2>
              <ul className="showcase__meta">
                {r.meta.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p>{r.text}</p>
              <ul className="check-list">
                {r.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="btns" style={{ marginTop: 24 }}>
                <a href="#" className="btn-white" data-open-modal data-room={r.name}>
                  Book Now
                </a>
                <a href={`tel:${hotel.phoneTel}`} className="btn-outline">
                  Call For Rate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
