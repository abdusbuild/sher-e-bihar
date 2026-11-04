import Link from "next/link";
import Img from "./Img";

// Inner-page banner: dark photo, Aboreto title, amber subtitle, optional breadcrumb and stats.
export default function PageHero({ title, sub, image = "/images/exterior-dusk.jpg", stats, breadcrumb = false }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <Img src={image} alt="" sizes="100vw" priority />
      </div>
      <div className="page-hero__content animate__animated animate__slideInDown">
        {breadcrumb && (
          <nav className="page-hero__crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <span aria-current="page">{title}</span>
          </nav>
        )}
        <h1>{title}</h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
        {stats && (
          <div className="hero__stats hero__stats--inline animate__animated animate__fadeIn" style={{ animationDelay: ".6s" }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-big">
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
