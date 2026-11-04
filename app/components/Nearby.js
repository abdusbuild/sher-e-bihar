import { nearby } from "../data/site";

// Title on the left over a large arch shape, list of places with distances on the right.
export default function Nearby() {
  return (
    <section className="section places-band">
      <span className="places__deco" aria-hidden="true" />
      <div className="wrap places">
        <div className="reveal">
          <h2>Places Near Us</h2>
          <p>Approximate road distances from the hotel</p>
        </div>
        <ul className="places__list reveal" style={{ "--d": ".1s" }}>
          {nearby.map((n) => (
            <li key={n.name}>
              <b>{n.name}</b>
              <span>{n.distance}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
