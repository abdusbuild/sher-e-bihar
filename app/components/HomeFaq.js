import Link from "next/link";
import { faqs, hotel } from "../data/site";
import Icon from "./Icon";
import Title from "./Title";

// Homepage FAQ teaser: the `featured` questions, linking to the full FAQ page.
export default function HomeFaq() {
  const featured = faqs.filter((f) => f.featured);
  return (
    <section className="section home-faq" id="faq">
      <div className="wrap">
        <Title sub="Quick answers before you plan your stay, meal or celebration.">Frequently Asked Questions</Title>
        <div className="faq-grid">
          <aside className="faq-aside reveal reveal--left">
            <p className="faq-aside__text">Have more questions?</p>
            <div className="btns">
              <Link href="/faq" className="btn-gradient">
                View All FAQs
              </Link>
              <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-amber">
                <Icon name="whatsapp" /> Ask On WhatsApp
              </a>
            </div>
          </aside>
          <div className="reveal" style={{ "--d": ".1s" }}>
            {featured.map((f, i) => (
              <div key={f.q} className="acc">
                <button className="acc__q" aria-expanded="false">
                  <span className="acc__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc__text">{f.q}</span>
                  <span className="acc__icon">
                    <Icon name="chevron" />
                  </span>
                </button>
                <div className="acc__a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/faq" className="home-faq__more">
              See all {faqs.length} questions on booking, your stay, dining and location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
