import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import Banquet, { BanquetWhy } from "../components/Banquet";
import Contact from "../components/Contact";
import { PhotoGrid } from "../components/Lightbox";
import Title from "../components/Title";
import { banquet } from "../data/site";

export const metadata = pageMeta({
  title: "Wedding & Banquet Hall",
  description:
    "Book our banquet hall in Sherghati for weddings, receptions, tilak, birthdays and corporate events, with in-house catering, décor help and rooms for guests.",
  path: "/banquet",
  image: "/og/banquet-v2.jpg",
});

export default function BanquetPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Banquet Hall", "/banquet")} />
      <PageHero title="Banquet Hall" sub="Weddings, parties & family functions" image="/images/banquet-hall-2.jpg" />
      <Banquet />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Title sub="Stage and hall décor from functions we've hosted. Tap a photo to view it full screen.">Our Hall, Decorated For You</Title>
          <PhotoGrid items={banquet.photos} />
        </div>
      </section>
      <BanquetWhy />
      <Contact />
    </>
  );
}
