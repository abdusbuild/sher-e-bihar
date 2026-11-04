import Link from "next/link";
import { restaurant } from "../data/site";
import Photo from "./Photo";
import { SecHead } from "./Title";

// Restaurant band: text on the left, large photo on the right. On the home page it links to /dining.
export default function Restaurant({ teaser = false }) {
  return (
    <section className="section band--sand">
      <div className="wrap">
        <SecHead
          action={
            teaser && (
              <Link href="/dining" className="btn-outline">
                Explore Dining
              </Link>
            )
          }
        >
          Dining
        </SecHead>
        <div className="dine">
          <div className="reveal">
            <h3 className="subhead">Fresh, Home-Style Food All Day</h3>
            <span className="kicker">In-house Restaurant</span>
            <p>{restaurant.text}</p>
            <ul className="showcase__meta">
              {restaurant.dishes.map((d) => (
                <li key={d.title}>{d.title}</li>
              ))}
            </ul>
          </div>
          <div className="dine__img reveal" style={{ "--d": ".15s" }}>
            <Photo src={restaurant.image} alt="Restaurant at Hotel Sher-e-Bihar" sizes="(max-width: 860px) 100vw, 800px" />
          </div>
        </div>
      </div>
    </section>
  );
}
