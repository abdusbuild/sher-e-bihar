import Link from "next/link";
import { photos } from "../data/site";
import Peek from "./Peek";
import Photo from "./Photo";
import { SecHead } from "./Title";

// A short selection for the home page. The full set is on /gallery.
const picks = ["/images/room-family.jpg", "/images/banquet-stage-heart.jpg", "/images/restaurant-hall.jpg", "/images/banquet-hall-1.jpg", "/images/room-double-2.jpg"];
const slides = picks.map((src) => photos.find((p) => p.src === src));

// Home page "Look Around" carousel.
export default function Gallery() {
  return (
    <section className="section">
      <div className="wrap">
        <SecHead
          action={
            <Link href="/gallery" className="btn-outline">
              View Gallery
            </Link>
          }
        >
          Look Around
        </SecHead>
      </div>
      <Peek label="Hotel photos">
        {slides.map((p) => (
          <figure key={p.src} className="peek__slide">
            <div className="peek__img">
              <Photo src={p.src} alt={p.alt} sizes="(max-width: 600px) 86vw, 1040px" />
            </div>
            <figcaption>{p.alt}</figcaption>
          </figure>
        ))}
      </Peek>
    </section>
  );
}
