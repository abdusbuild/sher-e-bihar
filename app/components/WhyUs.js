import { whyUs } from "../data/site";
import Icon from "./Icon";
import Img from "./Img";

// Photo band with a dark overlay and circled icons (inspired by Hyatt's member-benefits band).
export default function WhyUs() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="perks reveal">
          <div className="perks__bg" aria-hidden="true">
            <Img src="/images/exterior-night.jpg" alt="" sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
          <div className="perks__head">
            <span className="perks__kicker">Stay with us</span>
            <h2>Why Choose Us?</h2>
            <p>Discover what makes us the right stop for your journey through Sherghati</p>
          </div>
          <div className="perks__grid">
            {whyUs.map((w) => (
              <div key={w.title} className="perk">
                <span className="perk__icon">
                  <Icon name={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <a href="#" className="btn-gold" data-open-modal>
            Book Direct
          </a>
        </div>
      </div>
    </section>
  );
}
