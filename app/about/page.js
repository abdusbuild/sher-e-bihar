import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import PerfectFor from "../components/PerfectFor";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Nearby from "../components/Nearby";
import Contact from "../components/Contact";
import Icon from "../components/Icon";
import { hotel, promises } from "../data/site";

export const metadata = pageMeta({
  title: "About Our Family-Run Hotel",
  description:
    "The story of Hotel Sher-e-Bihar, a family-run hotel, restaurant and banquet hall on GT Road in Sherghati: clean rooms, honest food and warm Bihari hospitality.",
  path: "/about",
  image: "/images/exterior-day.jpg",
});

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd("About Us", "/about")} />
      <PageHero
        title="About Us"
        sub="Hospitality on the Grand Trunk Road"
        image="/images/exterior-dusk.jpg"
        stats={[
          { value: "437", label: "Google reviews" },
          { value: "24/7", label: "Open all day" },
          { value: "NH-19", label: "On GT Road" },
        ]}
      />
      <PerfectFor
        title="We Are The Perfect Stop For"
        text={`${hotel.name} is a family-run hotel, restaurant and banquet hall on NH-19 at Akauna, Sherghati. Whether you're a pilgrim on the way to Bodh Gaya, a family on a long drive, a wedding party or a trucker needing a clean bed and a hot meal, our doors on the GT Road are open for you.`}
        image="/images/exterior-night.jpg"
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap promise">
          <div className="reveal">
            <h2 className="rotator-title">
              What We <span className="text-amber">Promise</span>
            </h2>
            <p>
              We keep things simple: a clean room, honest home-style food and people who care. It&apos;s why so many
              guests stop with us again on their next trip down the highway.
            </p>
          </div>
          <div className="cards cards--3 cards--stack" style={{ gridTemplateColumns: "1fr" }} data-stagger=".12">
            {promises.map((p) => (
              <div key={p.title} className="card card--row reveal">
                <Icon name={p.icon} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <Testimonials />
      <Nearby />
      <Contact />
    </>
  );
}
