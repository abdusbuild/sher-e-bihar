import Link from "next/link";
import { hotel, photos, rooms } from "../data/site";
import Peek from "./Peek";
import Photo from "./Photo";
import { SecHead } from "./Title";

const altOf = (src) => photos.find((p) => p.src === src)?.alt;

// Every room photo: each room type's shots (captioned with the room name),
// then the room photos that belong to no single type (suite, bathroom, corridor).
const typed = [
  ...rooms.map((r) => ({ src: r.images[0], alt: r.name, room: r })),
  ...rooms.flatMap((r) => r.images.slice(1).map((src) => ({ src, alt: altOf(src) || r.name, room: r }))),
];
const all = [...typed, ...photos.filter((p) => p.cat === "rooms" && !typed.some((s) => s.src === p.src))];
// Slide order chosen by hand; any room photo not listed here follows in the order above.
const order = [
  "/images/room-suite-2.jpg",
  "/images/room-family-1.jpg",
  "/images/room-family-2.jpg",
  "/images/room-standard-1.jpg",
  "/images/room-family-3.jpg",
  "/images/room-deluxe-1.jpg",
  "/images/room-standard-2.jpg",
];
const slides = [
  ...order.map((src) => all.find((s) => s.src === src)).filter(Boolean),
  ...all.filter((s) => !order.includes(s.src)),
];

// Photos that show no bookable room, so their slide gets no booking button.
const notRoom = ["/images/room-corridor.jpg", "/images/room-bathroom.jpg"];

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
      <Peek label="Rooms" className="peek--sm">
        {slides.map(({ src, alt, room: r }) => (
          <figure key={src} className="peek__slide">
            <div className="peek__img">
              <Photo src={src} alt={alt} sizes="(max-width: 600px) 86vw, 760px" />
            </div>
            <figcaption>
              <div>
                <Link href={r ? `/rooms#${r.id}` : "/rooms"} className="arrow-link">
                  {r ? r.name : alt}
                </Link>
                {r && <small>{r.meta.join(" · ")}</small>}
              </div>
              {!notRoom.includes(src) && (
                <a href="#" className="peek__book" data-open-modal data-room={r?.name}>
                  {r ? "Book this room" : "Book a room"}
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </Peek>
    </section>
  );
}
