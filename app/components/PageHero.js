import Link from "next/link";
import { getImageProps } from "next/image";
import Img from "./Img";
import { imageMeta } from "../data/images";

// Landscape screens get `desktop` (e.g. a wide collage), portrait screens (phones, upright tablets)
// get `mobile`. A <picture> means each device downloads only its own image.
function ArtDirected({ desktop, mobile }) {
  const d = imageMeta[desktop];
  const m = imageMeta[mobile];
  if (!d || !m) return <Img src={mobile} alt="" sizes="100vw" priority />;
  const common = { alt: "", sizes: "100vw", quality: 85 };
  const { props: { srcSet: desktopSet } } = getImageProps({ ...common, src: desktop, width: d.width, height: d.height });
  const { props: { srcSet: mobileSet, ...rest } } = getImageProps({ ...common, src: mobile, width: m.width, height: m.height });
  return (
    <picture>
      <source media="(min-aspect-ratio: 1/1)" srcSet={desktopSet} sizes="100vw" />
      <img {...rest} srcSet={mobileSet} loading="eager" fetchPriority="high" data-full={mobile} />
    </picture>
  );
}

// Inner-page banner: dark photo, Aboreto title, amber subtitle, optional breadcrumb and stats.
// `desktopImage`: optional wide image for landscape screens; `image` is then used on portrait screens.
// Both are shown edge to edge (cover), so design each one for its shape.
export default function PageHero({ title, sub, image = "/images/exterior-front.jpg", desktopImage, stats, breadcrumb = false, full = false }) {
  const cls = ["page-hero", full && "page-hero--full", desktopImage && "page-hero--collage"].filter(Boolean).join(" ");
  return (
    <section className={cls}>
      <div className="page-hero__bg">
        {/* `full`: whole photo stays in view, a blurred copy fills the sides */}
        {full && !desktopImage && <Img src={image} alt="" sizes="40vw" className="page-hero__fill" aria-hidden="true" />}
        {desktopImage ? <ArtDirected desktop={desktopImage} mobile={image} /> : <Img src={image} alt="" sizes="100vw" priority />}
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
