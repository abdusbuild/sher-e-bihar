import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import GalleryGrid from "../components/GalleryGrid";
import { hotel } from "../data/site";

export const metadata = pageMeta({
  title: "Photo Gallery",
  description:
    "Photos of Hotel Sher-e-Bihar, Sherghati: the building on GT Road, our rooms, restaurant and decorated banquet hall.",
  path: "/gallery",
  image: "/og/gallery.jpg",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Gallery", "/gallery")} />
      <PageHero title="Our Gallery" sub={`A look inside ${hotel.name}`} image="/images/banquet-hall-1.jpg" />
      <GalleryGrid />
    </>
  );
}
