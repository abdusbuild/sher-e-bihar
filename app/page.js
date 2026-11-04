import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import Intro from "./components/Intro";
import Rooms from "./components/Rooms";
import BookDirect from "./components/BookDirect";
import Gallery from "./components/Gallery";
import Restaurant from "./components/Restaurant";
import Banquet from "./components/Banquet";
import WhyUs from "./components/WhyUs";
import GettingHere from "./components/GettingHere";
import Nearby from "./components/Nearby";
import Testimonials from "./components/Testimonials";
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
      <Rooms />
      <BookDirect />
      <Gallery />
      <Restaurant teaser />
      <Banquet teaser />
      <WhyUs />
      <GettingHere />
      <Nearby />
      <Testimonials />
      <HomeFaq />
      <ContactCta />
    </div>
  );
}
