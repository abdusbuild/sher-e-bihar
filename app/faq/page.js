import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, pageMeta } from "../data/seo";
import Faq from "../components/Faq";
import { faqs } from "../data/site";

export const metadata = pageMeta({
  title: "FAQs: Booking & Check-in",
  description:
    "Answers about booking, check-in times, ID, parking, AC rooms, food, banquet bookings and how to reach Hotel Sher-e-Bihar on GT Road, Sherghati.",
  path: "/faq",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("FAQ", "/faq")} />
      <JsonLd data={faqLd} />
      <PageHero title="FAQ" sub="Answers to the questions guests ask most" />
      <Faq />
    </>
  );
}
