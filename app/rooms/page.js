import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd, roomsJsonLd, pageMeta } from "../data/seo";
import RoomDetails from "../components/RoomDetails";
import Title from "../components/Title";
import Icon from "../components/Icon";
import { hotel, inEveryRoom, rooms } from "../data/site";

export const metadata = pageMeta({
  title: "AC, Standard & Family Rooms",
  description:
    "Standard, Deluxe AC and Family rooms at Hotel Sher-e-Bihar, Sherghati: attached bathrooms, hot water, room service, free parking and 24-hour front desk.",
  path: "/rooms",
  image: "/images/room-double-1.jpg",
});

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Rooms", "/rooms")} />
      <JsonLd data={roomsJsonLd} />
      <PageHero
        title="Our Rooms"
        sub="Clean, comfortable rooms for every kind of trip"
        image="/images/room-family.jpg"
        stats={[
          { value: String(rooms.length), label: "Room types" },
          { value: hotel.checkIn.replace(":00", ""), label: "Check-in" },
          { value: "24/7", label: "Front desk" },
        ]}
      />
      <RoomDetails />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Title sub="Little comforts that come with every stay.">In Every Room</Title>
          <div className="cards" data-stagger=".08">
            {inEveryRoom.map((a) => (
              <div key={a.title} className="card reveal">
                <Icon name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <span className="tip reveal">
              <b>Tip:</b> Book direct by phone or WhatsApp for the best available rate
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
