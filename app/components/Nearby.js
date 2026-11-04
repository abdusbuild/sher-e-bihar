import { nearby } from "../data/site";
import Title from "./Title";

export default function Nearby() {
  return (
    <section className="section--tight band-light">
      <Title sub="Approximate road distances from the hotel">Places Near Us</Title>
      <div className="text-marquee">
        <div className="text-marquee__track">
          {[...nearby, ...nearby, ...nearby].map((n, i) => (
            <div key={i} className="text-marquee__item" aria-hidden={i >= nearby.length || undefined}>
              <b>{n.name}</b>
              <span>{n.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
