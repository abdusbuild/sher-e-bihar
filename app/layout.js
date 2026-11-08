import { Aboreto, Questrial } from "next/font/google";
import "./globals.css";
import { hotel } from "./data/site";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Overlays from "./components/Overlays";
import Lightbox from "./components/Lightbox";
import SiteScripts from "./components/SiteScripts";
import JsonLd from "./components/JsonLd";
import { ogImage, siteDescription, siteJsonLd, siteUrl } from "./data/seo";

const questrial = Questrial({ subsets: ["latin"], weight: "400", variable: "--font-questrial" });
const aboreto = Aboreto({ subsets: ["latin"], weight: "400", variable: "--font-aboreto" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hotel.name}, Sherghati | Hotel, Restaurant & Banquet`,
    template: `%s | ${hotel.name} Sherghati`,
  },
  description: siteDescription,
  applicationName: hotel.name,
  appleWebApp: { title: "Sher-e-Bihar" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Hotel Sher-e-Bihar",
    "Hotel Shere Bihar",
    "Hotel in Sherghati",
    "Sherghati hotel",
    "Hotel on GT Road Gaya",
    "Hotel near Bodh Gaya",
    "Banquet hall Sherghati",
    "Marriage hall Sherghati",
    "Restaurant on NH-19",
    "Hotel in Gaya Bihar",
  ],
  category: "travel",
  openGraph: {
    siteName: hotel.name,
    title: `${hotel.name} | Hotel, Restaurant & Banquet in Sherghati, Gaya`,
    description: siteDescription,
    url: "/",
    locale: "en_IN",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotel.name} | Sherghati, Gaya`,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Sherghati, Gaya",
    "geo.position": `${hotel.geo.lat};${hotel.geo.lng}`,
    ICBM: `${hotel.geo.lat}, ${hotel.geo.lng}`,
  },
};

export const viewport = { themeColor: "#211551" };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${questrial.variable} ${aboreto.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={siteJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Overlays />
        <Lightbox />
        <SiteScripts />
      </body>
    </html>
  );
}
