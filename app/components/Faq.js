import { faqGroups, faqs, hotel } from "../data/site";
import Icon from "./Icon";

// FAQ page: grouped questions (pill tabs).
export default function Faq() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="title reveal">
          <h2>Frequently Asked Questions</h2>
          <div className="uline" />
          <p>Quick answers before you plan your stay, meal or celebration.</p>
        </div>
        <div className="pills reveal" data-tabs="#faq-groups" role="tablist">
          {faqGroups.map((g, i) => (
            <button key={g.id} className={`pill ${i === 0 ? "is-active" : ""}`} data-tab={g.id} role="tab" aria-selected={i === 0}>
              {g.label}
            </button>
          ))}
        </div>
        <div className="faq-grid">
          <aside className="faq-aside reveal reveal--left">
            <p className="faq-aside__text">Still have a question?</p>
            <div className="btns">
              <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-gradient">
                <Icon name="whatsapp" /> Ask On WhatsApp
              </a>
            </div>
          </aside>
          <div id="faq-groups">
            {faqGroups.map((g, gi) => (
              <div key={g.id} className={`faq-group ${gi === 0 ? "is-active" : ""}`} data-panel={g.id}>
                {faqs
                  .filter((f) => f.group === g.id)
                  .map((f, i) => (
                    <div key={i} className="acc">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
