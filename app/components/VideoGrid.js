import Peek from "./Peek";

// Short upright video clips. Nothing loads up front; SiteScripts plays a clip (muted) once it is on screen,
// one at a time, and pauses it when it scrolls away.
function Clip({ v }) {
  return <video src={v.src} poster={v.poster} controls muted playsInline preload="none" aria-label={v.title} />;
}

// Grid of clips, four to a row.
export default function VideoGrid({ items }) {
  return (
    <div className="videos" data-stagger=".04">
      {items.map((v) => (
        <figure key={v.src} className="videos__item reveal">
          <Clip v={v} />
          <figcaption>{v.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// All the clips in one swipeable row with arrows. Place it outside .wrap: it runs the full page width.
export function VideoRow({ items, label = "Videos" }) {
  return (
    <Peek label={label} className="peek--clips">
      {items.map((v) => (
        <figure key={v.src} className="peek__slide">
          <Clip v={v} />
          <figcaption>{v.title}</figcaption>
        </figure>
      ))}
    </Peek>
  );
}
