import Link from "next/link";
import { restaurant } from "../data/site";
import Photo from "./Photo";
import { SecHead } from "./Title";

// Restaurant band: text on the left, large photo on the right. On the home page it links to /dining.
export default function Restaurant({ teaser = false }) {
  // The /dining page already says "Dining" in its hero, so only the home teaser gets the section heading.
  // Without it, the subhead becomes the page's h2 so the heading order stays h1 → h2.
  const Subhead = teaser ? "h3" : "h2";
  return (
    <section className="section band--sand">
      <div className="wrap">
        {teaser && (
          <SecHead
            action={
              <Link href="/dining" className="btn-outline">
                Explore Dining
              </Link>
            }
          >
            Dining
          </SecHead>
        )}
        <div className="dine">
          <div className="reveal">
            <Subhead className="subhead">Fresh, Home-Style Food All Day</Subhead>
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
