import Link from "next/link";
import { photos } from "../data/site";
import Peek from "./Peek";
import Photo from "./Photo";
import { SecHead } from "./Title";

// A short selection for the home page. The full set is on /gallery.
const picks = ["/images/room-family-1.jpg", "/images/banquet-stage-2.jpg", "/images/restaurant-hall-3.jpg", "/images/banquet-hall-3.jpg", "/images/room-suite-1.jpg"];
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
              <Photo src={p.src} alt={p.alt} sizes="(max-width: 600px) 86vw, 760px" />
            </div>
            <figcaption>{p.alt}</figcaption>
          </figure>
        ))}
      </Peek>
    </section>
  );
}
