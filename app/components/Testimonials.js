import { hotel, reviews, scores } from "../data/site";
import Icon from "./Icon";
import Title from "./Title";

function Stars({ value = 5, small = false }) {
  // Amber overlay clipped to the rating (5 → 100%).
  return (
    <div className={`stars ${small ? "stars--sm" : ""}`} aria-label={`${value} out of 5 stars`}>
      <div className="stars__row">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" />
        ))}
      </div>
      <div className="stars__row stars__row--on" style={{ width: `${(value / 5) * 100}%` }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" />
        ))}
      </div>
    </div>
  );
}

// Guest testimonials slider (reference design). Reviews are real Google reviews from site.js.
export default function Testimonials() {
  return (
    <section className="section band--sand" id="reviews">
      <div className="wrap">
        <Title sub="Hear what our guests say about staying and dining with us.">Guest Testimonials</Title>

        {reviews.length >= 3 && (
          <div className="testi reveal">
            <div className="testi__viewport">
              <div className="testi__track">
                {reviews.map((r, i) => (
                  <div key={i} className="testi-card">
                    <div className="testi-card__inner">
                      <div className="testi-card__top">
                        <span className="q" aria-hidden="true">&ldquo;</span>
                        <Stars small />
                      </div>
                      <p id={`review-${i}`} className={r.text.length < 140 ? "is-short" : undefined}>
                        {r.text}
                      </p>
                      <button type="button" className="testi-more" aria-expanded="false" aria-controls={`review-${i}`}>
                        Read more
                      </button>
                      <footer>
                        <span className="testi-card__avatar" aria-hidden="true">
                          {r.name.charAt(0)}
                        </span>
                        <span className="testi-card__who">
                          <h4>{r.name}</h4>
                          <span className="loc">
                            <Icon name="star" />
                            {r.source}
                          </span>
                        </span>
                      </footer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="testi__btn testi__prev" aria-label="Previous">
              <Icon name="prev" />
            </button>
            <button className="testi__btn testi__next" aria-label="Next">
              <Icon name="next" />
            </button>
          </div>
        )}

        <div className="scores reveal">
          {scores.map((s) => (
            <span key={s.label}>
              <b>{s.value}</b>
              {s.label}
            </span>
          ))}
        </div>
        <div className="center reveal" style={{ marginTop: 22 }}>
          <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline-amber" style={{ width: "auto" }}>
            Read All Reviews On Google
          </a>
        </div>
      </div>
    </section>
  );
}
