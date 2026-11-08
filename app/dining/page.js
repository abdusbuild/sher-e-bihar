import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import Restaurant from "../components/Restaurant";
import Title from "../components/Title";
import Icon from "../components/Icon";
import { hotel, restaurant } from "../data/site";

export const metadata = pageMeta({
  title: "Restaurant on GT Road",
  description:
    "Home-style Indian restaurant on NH-19 at Sherghati: kadhai chicken, dal tadka, paneer, tandoori roti, pakodas and chai. Open to guests, walk-ins and bus groups.",
  path: "/dining",
  image: "/og/dining.jpg",
});

export default function Dining() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Dining", "/dining")} />
      <PageHero title="Dining" sub="Fresh, home-style food all day" image="/images/restaurant-hall.jpg" />
      <Restaurant />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Title sub="A taste of what's cooking in our kitchen.">Menu Highlights</Title>
          <div className="cards cards--3" data-stagger=".08">
            {restaurant.dishes.map((d) => (
              <div key={d.title} className="card reveal">
                <Icon name="food" />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <div className="dining-info reveal">
            <div className="dining-info__box">
              <h3>
                <Icon name="clock" /> Restaurant Hours
              </h3>
              {hotel.restaurantHours.map((h) => (
                <div key={h.days} className="hours-row">
                  <span>{h.days}</span>
                  <b>{h.time}</b>
                </div>
              ))}
            </div>
            <div className="dining-info__box">
              <h3>
                <Icon name="sparkle" /> We Also Offer
              </h3>
              <ul className="check-list" style={{ gridTemplateColumns: "1fr", marginTop: 8 }}>
                {restaurant.extras.map((e) => (
                  <li key={e}>
                    <Icon name="check" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="center reveal" style={{ marginTop: 34 }}>
            <a href={`tel:${hotel.phoneTel}`} className="btn-gradient">
              <Icon name="phone" /> Call To Order Or Book A Table
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
