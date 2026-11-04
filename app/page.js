import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import Intro from "./components/Intro";
import PerfectFor from "./components/PerfectFor";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import Banquet from "./components/Banquet";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Nearby from "./components/Nearby";
import { ContactCta } from "./components/Contact";
import HomeFaq from "./components/HomeFaq";
import { hotel } from "./data/site";
import { pageMeta, siteDescription } from "./data/seo";

export const metadata = pageMeta({
  description: siteDescription,
  path: "/",
  socialTitle: `${hotel.name} | Hotel, Restaurant & Banquet in Sherghati, Gaya`,
});

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <BookingBar />
      <Intro />
      <PerfectFor style={{ paddingTop: 0 }} className="hide-phone" />
      <Rooms />
      <Restaurant teaser />
      <Banquet teaser />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Nearby />
      <HomeFaq />
      <ContactCta />
    </div>
  );
}
