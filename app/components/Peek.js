// Swipeable photo row where the next slide peeks in from the edge.
// Each child should be a <figure className="peek__slide">. Touch and trackpad swipe natively (scroll-snap);
// SiteScripts adds click-and-drag for a mouse.
export default function Peek({ label, children, className = "" }) {
  return (
    <div className={`peek reveal ${className}`.trim()} data-peek>
      <div className="peek__track" role="group" aria-label={label} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}
