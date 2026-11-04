import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import Contact, { Reach } from "../components/Contact";
import Nearby from "../components/Nearby";

export const metadata = pageMeta({
  title: "Contact & Directions",
  description:
    "Call or WhatsApp +91 62905 00076. Find Hotel Sher-e-Bihar on NH-19 (GT Road) at Akauna, Sherghati, Gaya, Bihar 824211, about 35 km from Bodh Gaya.",
  path: "/contact",
  image: "/images/exterior-dusk.jpg",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Contact Us", "/contact")} />
      <PageHero title="Contact Us" sub="We're here for you 24 hours a day" image="/images/exterior-day.jpg" />
      <Contact map />
      <Reach />
      <Nearby />
    </>
  );
}
