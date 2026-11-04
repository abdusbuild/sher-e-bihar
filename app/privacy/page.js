import Link from "next/link";
import LegalPage, { LegalContact } from "../components/LegalPage";
import { pageMeta } from "../data/seo";
import { hotel } from "../data/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Hotel Sher-e-Bihar, Sherghati collects, uses and protects the details you share when you call, WhatsApp, send a booking enquiry or stay with us.",
  path: "/privacy",
});

// TODO: owner to confirm before going live:
//  - the name of the person who handles privacy requests ("Your rights & complaints")
//  - whether the hotel uses CCTV; if yes, add it to "Information we collect at the hotel"
//  - how long guest registers and ID copies are kept ("Data retention")
// Update this page if analytics, ads or online payments are ever added to the site.
const sections = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        This website gives information about our rooms, restaurant and banquet hall. You can browse it without telling us
        who you are. We receive your personal information only when you choose to contact us, or when you stay, dine or
        hold an event with us.
      </p>
    ),
  },
  {
    id: "collect",
    title: "Information you share with us",
    body: (
      <ul>
        <li>
          <strong>Enquiry and booking forms:</strong> your name, phone number, email (optional), check-in and check-out
          dates, number of guests, room preference and any message you write.
        </li>
        <li>
          <strong>Calls and WhatsApp:</strong> your phone number and whatever you choose to tell us.
        </li>
        <li>
          <strong>Banquet and event enquiries:</strong> your event date, guest count and requirements.
        </li>
      </ul>
    ),
  },
  {
    id: "stay",
    title: "Information we collect at the hotel",
    body: (
      <>
        <p>
          When you check in, we record guest details in our register and ask every adult guest for a valid government
          photo ID, such as an Aadhaar card, Voter ID, Driving Licence or Passport. Foreign nationals may also need to
          give passport and visa details.
        </p>
        <p>We need these details to meet the legal requirements that apply to hotels in India.</p>
      </>
    ),
  },
  {
    id: "forms",
    title: "How our website forms work",
    body: (
      <p>
        Our forms do not save your details on the website. When you press submit, your message opens in WhatsApp,
        addressed to our number, and it reaches us only when you send it.
      </p>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    body: (
      <>
        <ul>
          <li>To reply to your room, restaurant or banquet enquiry.</li>
          <li>To confirm, change or cancel your booking and prepare for your stay or event.</li>
          <li>To keep the guest records that the law requires.</li>
          <li>To handle a complaint, dispute or safety issue.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When we share information",
    body: (
      <ul>
        <li>With police or government authorities, when the law requires it.</li>
        <li>With people who help deliver your event, such as a decorator, and only the details they need.</li>
        <li>With service providers we rely on to run our website and communicate with you.</li>
      </ul>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & local storage",
    body: (
      <p>
        We do not use advertising or analytics cookies. Your browser temporarily remembers that you have already seen our
        popup, so it does not show again during the same visit.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    body: (
      <ul>
        <li>
          <strong>Hosting:</strong> our hosting provider may process basic data such as your IP address and browser type
          to deliver and secure the website.
        </li>
        <li>
          <strong>Google Maps:</strong> our Contact page includes a Google Maps embed. Google may collect data or set
          cookies when it loads.
        </li>
        <li>
          <strong>WhatsApp, Instagram and Google:</strong> messages and links to these services fall under their own
          privacy policies, which we do not control.
        </li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "Data storage & security",
    body: (
      <p>
        We take reasonable steps to protect your information and limit access to the staff who need it. No system is
        completely secure, so please avoid sending ID copies or payment details through a website form.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: <p>We keep your information only for as long as we need it for the purposes above, or for as long as the law requires.</p>,
  },
  {
    id: "rights",
    title: "Your rights & complaints",
    body: (
      <>
        <p>
          Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, you can ask us to:
        </p>
        <ul>
          <li>tell you what personal information we hold about you;</li>
          <li>correct or update it;</li>
          <li>delete it, unless we must keep it by law; and</li>
          <li>stop using it where we rely on your consent.</li>
        </ul>
        <p>
          You can also nominate someone to exercise these rights for you if you die or become unable to do so. If you are
          under 18, please ask a parent or guardian to contact us on your behalf.
        </p>
        <p>
          To make a request or complaint, contact the hotel management using the details below. If your complaint is not
          resolved, you may be able to approach the Data Protection Board of India.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We may update this policy from time to time. The date at the top of this page shows when it last changed.</p>,
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <LegalContact />
        <p>
          See also our <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="4 November 2026"
      intro={
        <p>
          {hotel.name} (“we”, “us”) respects the privacy of its guests and website visitors. This policy explains what
          information we handle and how we use it.
        </p>
      }
      sections={sections}
    />
  );
}
