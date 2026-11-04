import Link from "next/link";
import { restaurant } from "../data/site";
import Icon from "./Icon";
import Photo from "./Photo";

// Restaurant split section. On the home page it links to /dining.
export default function Restaurant({ teaser = false }) {
  return (
    <section className="section">
      <div className="wrap media-split media-split--rev">
        <div className="media-split__img reveal">
          <Photo src={restaurant.image} alt="Restaurant at Hotel Sher-e-Bihar" />
        </div>
        <div className="reveal" style={{ "--d": ".15s" }}>
          <span className="kicker">In-house Restaurant</span>
          <h2 className="rotator-title">
            Fresh, <span className="text-amber">Home-Style</span> Food All Day
          </h2>
          <p>{restaurant.text}</p>
          <ul className="showcase__meta">
            {restaurant.dishes.map((d) => (
              <li key={d.title}>{d.title}</li>
            ))}
          </ul>
          {teaser && (
            <Link href="/dining" className="btn-gradient">
              Explore Dining
              <span className="arrow">
                <Icon name="arrow" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
