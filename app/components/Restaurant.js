import Link from "next/link";
import { restaurant } from "../data/site";
import Photo from "./Photo";
import { SecHead } from "./Title";

// Dishes guests mention most in reviews: the home teaser shows them as three equal photo tiles,
// with the restaurant hall as a short, wide photo under them.
const FEATURED = ["Kadhai Chicken", "Dal Tadka", "Pyaj Pakoda & Chai"];

// Restaurant band: text on the left, large photo on the right. On the home page it links to /dining.
export default function Restaurant({ teaser = false }) {
  const featured = teaser ? FEATURED.map((t) => restaurant.dishes.find((d) => d.title === t)).filter(Boolean) : [];
  // The /dining page already says "Dining" in its hero, so only the home teaser gets the section heading.
  // Without it, the subhead becomes the page's h2 so the heading order stays h1 → h2.
  const Subhead = teaser ? "h3" : "h2";
  return (
    <section className="section">
      <div className="wrap">
        {teaser && <SecHead>Dining</SecHead>}
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
            {teaser && (
              <div className="btns" style={{ marginTop: 24 }}>
                <Link href="/dining" className="btn-outline">
                  Explore Dining
                </Link>
              </div>
            )}
          </div>
          {teaser ? (
            <div className="dine__media reveal" style={{ "--d": ".15s" }}>
              <div className="dine__dishes">
                {featured.map((d) => (
                  <figure key={d.title} className="dine__dish">
                    <Photo src={d.image} alt={d.title} sizes="(max-width: 860px) 33vw, 280px" />
                    <figcaption>
                      <strong>{d.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <figure className="dine__hall">
                <div className="dine__img">
                  <Photo src={restaurant.image} alt="Restaurant at Hotel Sher-e-Bihar" sizes="(max-width: 860px) 100vw, 800px" />
                </div>
                <figcaption>Our ground-floor restaurant</figcaption>
              </figure>
              {featured.some((d) => d.credit) && (
                <p className="photo-credits">
                  Some dish photos are for illustration. <Link href="/credits">Photo credits</Link>
                </p>
              )}
            </div>
          ) : (
            <div className="dine__img reveal" style={{ "--d": ".15s" }}>
              <Photo src={restaurant.image} alt="Restaurant at Hotel Sher-e-Bihar" sizes="(max-width: 860px) 100vw, 800px" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
