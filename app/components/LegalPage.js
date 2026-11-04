import PageHero from "./PageHero";
import JsonLd from "./JsonLd";
import { breadcrumbLd } from "../data/seo";
import { hotel } from "../data/site";

// Shared layout for the Privacy Policy and Terms pages: sticky "On this page" list beside numbered sections.
// SiteScripts highlights the section currently in view.
export default function LegalPage({ title, path, updated, intro, sections }) {
  return (
    <>
      <JsonLd data={breadcrumbLd(title, path)} />
      <PageHero title={title} sub={`Last updated ${updated}`} breadcrumb />
      <section className="section">
        <div className="wrap legal">
          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-body">
            <div className="legal-intro">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <h2>
                  {i + 1}. {s.title}
                </h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// The hotel's contact details, read from site.js so they stay in one place.
export function LegalContact() {
  return (
    <ul>
      <li>
        Phone / WhatsApp: <a href={`tel:${hotel.phoneTel}`}>{hotel.phoneDisplay}</a>
      </li>
      {hotel.email && (
        <li>
          Email: <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
        </li>
      )}
      <li>
        Address: {hotel.name}, {hotel.address}
      </li>
    </ul>
  );
}
