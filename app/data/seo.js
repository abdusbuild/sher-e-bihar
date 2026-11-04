// SEO helpers: site URL, per-page metadata and structured data (JSON-LD).
import { banquet, hotel, restaurant, rooms } from "./site";

// Live site address. Set NEXT_PUBLIC_SITE_URL (e.g. https://www.hotelsherebihar.com) once a custom
// domain is connected; on Vercel the production URL is picked up automatically until then.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const abs = (path) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export const ogImage = { url: "/og-image.jpg", width: 1200, height: 630, alt: `${hotel.name} on GT Road, Sherghati` };

export const siteDescription =
  "Family-run hotel on NH-19 (GT Road) at Akauna, Sherghati, Gaya: clean AC rooms, 24-hour front desk, in-house restaurant and banquet hall. Book direct by phone or WhatsApp.";

const ogBase = { siteName: hotel.name, locale: "en_IN", type: "website" };

// Metadata for one page: title, description, canonical URL and social share cards.
export function pageMeta({ title, description, path, image, socialTitle }) {
  const images = image ? [{ url: image, alt: title }] : [ogImage];
  const shareTitle = socialTitle || (title ? `${title} | ${hotel.name}` : undefined);
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: { ...ogBase, ...(shareTitle && { title: shareTitle }), description, url: path, images },
    twitter: { card: "summary_large_image", ...(shareTitle && { title: shareTitle }), description, images: images.map((i) => i.url) },
  };
}

export function breadcrumbLd(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name, item: abs(path) },
    ],
  };
}

const dayMap = { Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday", Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday", Sunday: "Sunday" };
const allDays = Object.keys(dayMap);
const to24 = (t) => {
  const [, h, m, ap] = t.trim().match(/(\d+):(\d+)\s*(AM|PM)/i);
  let hh = Number(h) % 12;
  if (ap.toUpperCase() === "PM") hh += 12;
  return `${String(hh).padStart(2, "0")}:${m}`;
};
// "Monday – Friday" + "9:00 AM – 9:00 PM" -> OpeningHoursSpecification
const openingHours = hotel.restaurantHours.map(({ days, time }) => {
  const [from, to] = days.split(/[–-]/).map((d) => d.trim());
  const dayOfWeek = to ? allDays.slice(allDays.indexOf(from), allDays.indexOf(to) + 1) : [from];
  const [opens, closes] = time.split(/[–-]/).map(to24);
  return { "@type": "OpeningHoursSpecification", dayOfWeek, opens, closes };
});

const address = {
  "@type": "PostalAddress",
  streetAddress: "NH-19 (GT Road), Akauna, Bazidpur",
  addressLocality: "Sherghati",
  addressRegion: "Bihar",
  postalCode: "824211",
  addressCountry: "IN",
};
const geo = { "@type": "GeoCoordinates", latitude: hotel.geo.lat, longitude: hotel.geo.lng };
const amenity = (name) => ({ "@type": "LocationFeatureSpecification", name, value: true });

// Site-wide structured data: the hotel, its restaurant and banquet hall, and the website.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": abs("/#hotel"),
      name: hotel.name,
      alternateName: ["Hotel Shere Bihar", "Sher-E-Bihar Hotel", "Hotel Sher-E-Bihar Sherghati"],
      description: siteDescription,
      slogan: hotel.tagline,
      url: abs("/"),
      telephone: hotel.phoneTel,
      ...(hotel.email && { email: hotel.email }),
      logo: abs("/icon.svg"),
      image: ["/og-image.jpg", "/images/exterior-dusk.jpg", "/images/exterior-day.jpg", "/images/room-double-1.jpg", "/images/banquet-hall-2.jpg", "/images/restaurant-hall.jpg"].map(abs),
      address,
      geo,
      hasMap: hotel.mapLink,
      areaServed: ["Sherghati", "Gaya", "Bodh Gaya", "Aurangabad"],
      checkinTime: "11:00",
      checkoutTime: "11:00",
      currenciesAccepted: "INR",
      amenityFeature: [
        "Free parking",
        "Bus parking",
        "24-hour front desk",
        "Restaurant",
        "Room service",
        "Air conditioning",
        "Banquet hall",
        "Daily housekeeping",
      ].map(amenity),
      containsPlace: [{ "@id": abs("/dining#restaurant") }, { "@id": abs("/banquet#venue") }],
      sameAs: [hotel.instagram, hotel.mapLink],
    },
    {
      "@type": "Restaurant",
      "@id": abs("/dining#restaurant"),
      name: `${hotel.name} Restaurant`,
      description: restaurant.text,
      url: abs("/dining"),
      image: abs(restaurant.image),
      telephone: hotel.phoneTel,
      address,
      geo,
      servesCuisine: ["North Indian", "Bihari", "Indian"],
      acceptsReservations: true,
      openingHoursSpecification: openingHours,
      containedInPlace: { "@id": abs("/#hotel") },
    },
    {
      "@type": "EventVenue",
      "@id": abs("/banquet#venue"),
      name: `${hotel.name} Banquet Hall`,
      description: banquet.text,
      url: abs("/banquet"),
      image: banquet.photos.map((p) => abs(p.src)),
      telephone: hotel.phoneTel,
      address,
      geo,
      containedInPlace: { "@id": abs("/#hotel") },
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: hotel.name,
      inLanguage: "en-IN",
      publisher: { "@id": abs("/#hotel") },
    },
  ],
};

const occupancy = { standard: 2, deluxe: 3, family: 4 };
export const roomsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Rooms at ${hotel.name}`,
  itemListElement: rooms.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "HotelRoom",
      "@id": abs(`/rooms#${r.id}`),
      name: r.name,
      description: r.text,
      url: abs(`/rooms#${r.id}`),
      image: r.images.map(abs),
      ...(occupancy[r.id] && { occupancy: { "@type": "QuantitativeValue", maxValue: occupancy[r.id], unitCode: "C62" } }),
      amenityFeature: r.features.map(amenity),
      containedInPlace: { "@id": abs("/#hotel") },
    },
  })),
};
