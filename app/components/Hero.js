import Link from "next/link";
import { hotel, heroImages, heroStats } from "../data/site";
import Icon from "./Icon";
import Img from "./Img";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        {heroImages.map((src, i) => (
          <Img key={src} src={src} alt="" className={i === 0 ? "is-active" : undefined} sizes="100vw" priority={i === 0} />
        ))}
      </div>
      <span className="hero__tag">
        <Icon name="pin" />
        GT Road, Sherghati · Gaya, Bihar
      </span>
      <div className="hero__content">
        <div className="animate__animated animate__slideInDown">
          <span className="hero__eyebrow">Welcome to {hotel.name}</span>
          <h1>
            Comfort On The GT Road
            <br />
            Taste &amp; Celebration Under One Roof
          </h1>
          <p className="hero__sub">
            A family-run hotel, restaurant and banquet on NH-19 at Akauna, Sherghati (Gaya) — clean rooms, fresh food
            and a warm welcome, just a short drive from Bodh Gaya.
          </p>
        </div>
        <div className="hero__actions animate__animated animate__fadeIn" style={{ animationDelay: ".5s" }}>
          <a href="#" className="btn-white" data-open-modal>
            Book Now
          </a>
          <Link href="/rooms" className="btn-outline">
            Explore Rooms
          </Link>
        </div>
      </div>
      <div className="hero__stats animate__animated animate__slideInRight">
        {heroStats.map((s) => (
          <div key={s.label} className="stat-big">
            {s.count ? (
              <b data-count={s.count} data-suffix={s.suffix || ""}>
                {s.count}
                {s.suffix}
              </b>
            ) : (
              <b>{s.text}</b>
            )}
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
