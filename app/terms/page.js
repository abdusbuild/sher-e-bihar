import Link from "next/link";
import LegalPage, { LegalContact } from "../components/LegalPage";
import { pageMeta } from "../data/seo";
import { hotel } from "../data/site";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Booking, check-in, ID, cancellation, banquet and stay terms for guests of Hotel Sher-e-Bihar, Sherghati, Gaya.",
  path: "/terms",
});

// TODO: owner to confirm before going live, then add the exact rules here:
//  - cancellation, refund and advance-payment rules (rooms and banquet)
//  - payment methods accepted, and how GST is shown
//  - rules on smoking, pets, room visitors, unaccompanied minors and unmarried couples
//  - that courts at Gaya are the right jurisdiction ("Governing law")
const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <p>
        These terms apply when you use this website or book a room, dine, or hold an event at {hotel.name}. By doing so,
        you agree to them.
      </p>
    ),
  },
  {
    id: "website",
    title: "Use of this website",
    body: (
      <p>
        You may use this website to learn about the hotel and contact us. Please do not misuse it, disrupt it, or use it
        for anything unlawful.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy of information",
    body: (
      <p>
        We try to keep this website accurate, but services, timings and facilities can change, and individual rooms and
        furnishings may differ from the photos. Please confirm anything important with us before you travel.
      </p>
    ),
  },
  {
    id: "bookings",
    title: "Bookings and rates",
    body: (
      <ul>
        <li>An enquiry through this website or WhatsApp is a request. Your room is booked only once we confirm it.</li>
        <li>Rates depend on the room type and your dates. The rate that applies is the one we confirm at booking.</li>
        <li>Walk-in guests are welcome, subject to availability.</li>
        <li>Extra beds are available in Family Rooms on request.</li>
      </ul>
    ),
  },
  {
    id: "checkin",
    title: "Check-in and check-out",
    body: (
      <ul>
        <li>
          Check-in is from {hotel.checkIn} and check-out is by {hotel.checkOut}.
        </li>
        <li>Early check-in or late check-out can be requested at the front desk, subject to availability.</li>
        <li>If you expect to arrive late at night, please tell us your arrival time in advance.</li>
      </ul>
    ),
  },
  {
    id: "id",
    title: "Guest ID",
    body: (
      <ul>
        <li>
          Every adult guest must show a valid government photo ID at check-in, such as an Aadhaar card, Voter ID, Driving
          Licence or Passport.
        </li>
        <li>Foreign nationals must show a valid passport and visa.</li>
        <li>We may refuse check-in if valid ID is not provided.</li>
      </ul>
    ),
  },
  {
    id: "cancellation",
    title: "Changes and cancellations",
    body: (
      <ul>
        <li>
          To change or cancel a booking, call or WhatsApp us on{" "}
          <a href={`tel:${hotel.phoneTel}`}>{hotel.phoneDisplay}</a> as early as you can.
        </li>
        <li>If you have paid an advance, we will tell you the cancellation and refund terms when you book.</li>
      </ul>
    ),
  },
  {
    id: "conduct",
    title: "During your stay",
    body: (
      <ul>
        <li>
          Please respect other guests and staff, and follow hotel rules and the law. We may ask anyone causing a
          disturbance or safety risk to leave.
        </li>
        <li>
          Alcohol is prohibited under Bihar law. It may not be brought in or consumed anywhere on the premises, including
          rooms and the banquet hall.
        </li>
        <li>Illegal activities and illegal substances are not allowed on the premises.</li>
      </ul>
    ),
  },
  {
    id: "banquet",
    title: "Banquet and events",
    body: (
      <ul>
        <li>A banquet booking is confirmed only after you pay the advance agreed with the hotel.</li>
        <li>Your package, menu, guest count, decoration and total price are as agreed with the hotel for your event.</li>
        <li>Please tell us about changes to your date or guest count as early as possible, as they may affect the price.</li>
        <li>
          The host is responsible for the conduct of their guests and for any permissions their event legally needs.
        </li>
      </ul>
    ),
  },
  {
    id: "damage",
    title: "Damage and belongings",
    body: (
      <ul>
        <li>Guests and event hosts are responsible for any damage to hotel property caused by them or their guests.</li>
        <li>
          Please look after your valuables. To the extent the law allows, we are not responsible for loss of or damage to
          guests’ belongings, or for vehicles and their contents in the parking area.
        </li>
      </ul>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: <p>The hotel’s name, logo, photos and text on this website may not be copied for commercial use without our written permission.</p>,
  },
  {
    id: "submissions",
    title: "Information you send us",
    body: (
      <p>
        Please make sure the details you send us are correct, and that you have permission to share anyone else’s details.
        Do not send ID copies or payment details through a website form.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links and reviews",
    body: (
      <p>
        Links to services such as Google, WhatsApp and Instagram are for convenience, and we are not responsible for their
        content or services. Guest reviews quoted on this website are the opinions of their authors.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent the law allows, we are not liable for indirect losses, or for delays or failures caused by events
        outside our reasonable control, such as power failures, severe weather, road closures or government orders.
        Nothing in these terms removes any right you have under Indian consumer law.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. We hope to resolve any concern directly with you first. Otherwise,
        and subject to your rights under consumer law, disputes are subject to the jurisdiction of the courts at Gaya,
        Bihar.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The date at the top of this page shows when they last changed. The
        terms confirmed when you booked continue to apply to that booking.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <LegalContact />
        <p>
          See also our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      updated="4 November 2026"
      intro={<p>Please read these terms before you book or stay with us. They set out what you can expect from us and what we ask of you.</p>}
      sections={sections}
    />
  );
}
