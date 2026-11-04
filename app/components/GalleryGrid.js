import { galleryCats, hotel, photos } from "../data/site";
import Icon from "./Icon";
import { PhotoGrid } from "./Lightbox";
import Title from "./Title";

// Gallery page: filter pills + photo grid + lightbox.
export default function GalleryGrid() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Title sub="Tap a photo to view it full screen.">Photo Gallery</Title>
          <div className="pills reveal" data-tabs="#gallery" data-filter role="tablist">
            {galleryCats.map((c, i) => (
              <button key={c.id} className={`pill ${i === 0 ? "is-active" : ""}`} data-tab={c.id} role="tab" aria-selected={i === 0}>
                {c.label}
              </button>
            ))}
          </div>
          <PhotoGrid items={photos} id="gallery" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap center reveal">
          <p>Follow {hotel.name} on Instagram for the latest photos.</p>
          <a href={hotel.instagram} target="_blank" rel="noopener noreferrer" className="btn-gradient">
            <Icon name="instagram" /> Follow On Instagram
            <span className="arrow">
              <Icon name="arrow" />
            </span>
          </a>
        </div>
      </section>

    </>
  );
}
