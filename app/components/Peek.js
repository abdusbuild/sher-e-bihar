import { Children } from "react";
import Icon from "./Icon";

// Swipeable photo row where the next slide peeks in from the edge, with arrows and a "1 / 3" counter.
// Each child should be a <figure className="peek__slide">. SiteScripts wires up the arrows and counter.
export default function Peek({ label, children }) {
  return (
    <div className="peek reveal" data-peek>
      <div className="peek__track" role="group" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="peek__nav">
        <button type="button" className="peek__btn" data-peek-prev aria-label={`Previous: ${label}`}>
          <Icon name="arrow" className="ico--flip" />
        </button>
        <span data-peek-count>1 / {Children.count(children)}</span>
        <button type="button" className="peek__btn" data-peek-next aria-label={`Next: ${label}`}>
          <Icon name="arrow" />
        </button>
      </div>
    </div>
  );
}
