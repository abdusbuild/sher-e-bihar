import { whyUs } from "../data/site";
import Icon from "./Icon";
import Title from "./Title";

// Amenities-style grid of line icons.
export default function WhyUs() {
  return (
    <section className="section">
      <div className="wrap">
        <Title sub="Discover what makes us the right stop for your journey through Sherghati">Why Stay With Us</Title>
        <div className="amen" data-stagger="0.06">
          {whyUs.map((w) => (
            <div key={w.title} className="amen__item reveal">
              <Icon name={w.icon} />
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
