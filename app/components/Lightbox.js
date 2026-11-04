import Icon from "./Icon";
import Img from "./Img";

// Full-screen photo viewer, shared by every page (rendered in layout.js).
// Content photos and data-lightbox links open in it; wired up in SiteScripts.
export default function Lightbox() {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <button className="lightbox__btn lightbox__close" aria-label="Close">
        <Icon name="close" />
      </button>
      <div className="lightbox__zoom">
        <button className="lightbox__btn lightbox__zoom-out" aria-label="Zoom out">
          <Icon name="zoomOut" />
        </button>
        <button className="lightbox__btn lightbox__zoom-in" aria-label="Zoom in">
          <Icon name="zoomIn" />
        </button>
      </div>
      <button className="lightbox__btn lightbox__prev" aria-label="Previous photo">
        <Icon name="prev" />
      </button>
      <img alt="" draggable="false" />
      <button className="lightbox__btn lightbox__next" aria-label="Next photo">
        <Icon name="next" />
      </button>
      <p className="lightbox__cap" />
      <span className="lightbox__count" />
    </div>
  );
}

// Grid of photos that open in the Lightbox.
export function PhotoGrid({ items, id }) {
  return (
    <div className="gallery" id={id} data-stagger=".04">
      {items.map((p, i) => (
        <a key={i} href={p.src} className="gallery__item reveal" data-cat={p.cat} data-lightbox data-caption={p.alt}>
          <Img src={p.src} alt={p.alt} sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 400px" />
          <span aria-hidden="true">{p.alt}</span>
        </a>
      ))}
    </div>
  );
}
