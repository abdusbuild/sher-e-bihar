import { hotel, highlights, perfectFor } from "../data/site";
import Icon from "./Icon";
import Img from "./Img";

const defaultText =
  "Comfortable rooms, a restaurant that cooks fresh, a banquet hall for your functions and easy highway parking — all under one roof on the Grand Trunk Road. Whatever brings you to Sherghati, we make the stop easy.";

export default function PerfectFor({ title = "We Are Perfect For", text = defaultText, image = "/images/exterior-day.jpg", style, className = "" }) {
  return (
    <section className={`section ${className}`} style={style}>
      <div className="wrap media-split">
        <div className="media-split__img reveal">
          <Img src={image} alt={`${hotel.name} building on GT Road`} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="reveal" style={{ "--d": ".15s" }}>
          <h2 className="rotator-title">
            {title}
            <span className="rotator" aria-live="off">
              {perfectFor.map((w, i) => (
                <span key={w} className={i === 0 ? "is-active" : undefined}>
                  {w}
                </span>
              ))}
            </span>
          </h2>
          <p>{text}</p>
          <ul className="check-list">
            {highlights.map((h) => (
              <li key={h}>
                <Icon name="check" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
