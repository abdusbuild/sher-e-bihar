import Link from "next/link";
import { hotel, rooms } from "../data/site";
import Icon from "./Icon";
import Peek from "./Peek";
import Photo from "./Photo";
import { SecHead } from "./Title";

// Home page room carousel.
export default function Rooms() {
  return (
    <section className="section">
      <div className="wrap">
        <SecHead
          sub={`Clean, comfortable rooms with attached bathrooms and room service. Check-in ${hotel.checkIn} · Check-out ${hotel.checkOut}.`}
          action={
            <Link href="/rooms" className="btn-outline">
              All Rooms
            </Link>
          }
        >
          Rooms
        </SecHead>
      </div>
      <Peek label="Rooms">
        {rooms.map((r) => (
          <figure key={r.id} className="peek__slide">
            <div className="peek__img">
              <Photo src={r.images[0]} alt={r.name} sizes="(max-width: 600px) 86vw, 1040px" />
            </div>
            <figcaption>
              <div>
                <Link href={`/rooms#${r.id}`} className="arrow-link">
                  {r.name} <Icon name="arrow" />
                </Link>
                <small>{r.meta.join(" · ")}</small>
              </div>
              <a href="#" className="peek__book" data-open-modal data-room={r.name}>
                Book this room
              </a>
            </figcaption>
          </figure>
        ))}
      </Peek>
    </section>
  );
}
