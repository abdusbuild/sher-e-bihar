// All editable hotel content lives here. Update this file to change the website.
// Items marked "TODO" need confirmation from the hotel owner.

export const hotel = {
  name: "Hotel Sher-e-Bihar",
  logoMark: "SB",
  logoTitle: "SHER-E-BIHAR",
  logoSub: "Hotel · Sherghati",
  tagline: "Comfort, Taste & Celebration Under One Roof",
  phoneDisplay: "+91 62905 00076",
  phoneTel: "+916290500076",
  whatsapp: "916290500076", // TODO: confirm WhatsApp is active on this number
  email: "", // TODO: add hotel email
  instagram: "https://www.instagram.com/hotel_sherebihar/",
  address: "NH-19 (GT Road / Old NH-2), Akauna, Bazidpur, Sherghati, Gaya, Bihar - 824211",
  shortAddress: "NH-19, Akauna, Sherghati",
  geo: { lat: 24.5745394, lng: 84.7776647 },
  mapLink: "https://www.google.com/maps/?cid=13487354508396733666",
  mapEmbed: "https://maps.google.com/maps?q=24.5745394,84.7776647&z=15&output=embed",
  // From the Google Maps listing ("Hotel Sher-E-Bihar"), checked Oct 2026
  rating: { value: 3.7, count: 437, source: "Google" },
  // Print brochure (A4 landscape PDF) in public/brochure/
  brochure: { href: "/brochure/Hotel-Sher-e-Bihar-Brochure.pdf", size: "8 MB" },
  checkIn: "11:00 AM",
  checkOut: "11:00 AM",
  frontDesk: "Front desk open 24 hours", // TODO: confirm
  restaurantHours: [
    { days: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
    { days: "Saturday – Sunday", time: "10:00 AM – 8:00 PM" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/rooms", label: "Rooms" },
  { href: "/dining", label: "Dining" },
  { href: "/banquet", label: "Banquet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

// Mobile drawer (Amity-style): grouped links in two columns, plus standalone highlighted links.
// "action: modal" opens the booking popup instead of navigating.
export const menuGroups = [
  {
    title: "Stay",
    href: "/rooms",
    links: [
      { href: "/rooms#family", label: "Family Room" },
      { href: "/rooms#deluxe", label: "Deluxe AC Room" },
      { href: "/rooms#standard", label: "Standard Room" },
      { href: "#", label: "Booking Enquiry", action: "modal" },
    ],
  },
  {
    title: "Dine & Celebrate",
    href: "/dining",
    links: [
      { href: "/dining", label: "Restaurant" },
      { href: "/banquet", label: "Banquet Hall" },
      { href: "/gallery", label: "Photo Gallery" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/#reviews", label: "Guest Reviews" },
      { href: "/faq", label: "FAQs" },
    ],
  },
  {
    title: "Plan Your Visit",
    href: "/contact",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "tel", label: "Call the Front Desk" },
      { href: "whatsapp", label: "WhatsApp Us" },
      { href: "map", label: "Get Directions" },
    ],
  },
];

export const menuHighlights = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Rates" },
  { href: "/banquet", label: "Weddings & Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

// Hero background slideshow (crossfades every 6s)
export const heroImages = ["/images/exterior-front.jpg", "/images/room-deluxe-1.jpg", "/images/banquet-stage-2.jpg", "/images/restaurant-hall-3.jpg"];

export const heroStats = [
  { text: "437", label: "Google reviews" },
  { text: "24/7", label: "Open all day" },
  { text: "NH-19", label: "On GT Road" },
];

// Gallery photos. `cat` is used by the gallery page filter tabs.
// Add real photos to /public/images and list them here. Entries with src: null show a "photo coming soon" tile.
export const galleryCats = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "banquet", label: "Banquet" },
];

// Photos of the hotel taken on site in November 2026.
export const photos = [
  { src: "/images/room-suite-2.jpg", alt: "Large room with sofa and AC", cat: "rooms" },
  { src: "/images/exterior-front.jpg", alt: "Hotel Sher-e-Bihar from the GT Road", cat: "exterior" },
  { src: "/images/room-deluxe-1.jpg", alt: "Double room with AC", cat: "rooms" },
  { src: "/images/restaurant-hall-1.jpg", alt: "Restaurant dining hall", cat: "dining" },
  { src: "/images/room-family-1.jpg", alt: "Family room with two double beds", cat: "rooms" },
  { src: "/images/exterior-entrance.jpg", alt: "Hotel entrance and forecourt", cat: "exterior" },
  { src: "/images/room-suite-1.jpg", alt: "Large room with sofa", cat: "rooms" },
  { src: "/images/room-standard-1.jpg", alt: "Double room", cat: "rooms" },
  { src: "/images/exterior-garden.jpg", alt: "Hotel building from the garden side", cat: "exterior" },
  { src: "/images/room-twin.jpg", alt: "Twin room", cat: "rooms" },
  { src: "/images/banquet-stage-2.jpg", alt: "Stage drapes and chandeliers", cat: "banquet" },
  { src: "/images/room-family-2.jpg", alt: "Family room", cat: "rooms" },
  { src: "/images/restaurant-hall-3.jpg", alt: "Restaurant with lounge seating", cat: "dining" },
  { src: "/images/garden-walkway.jpg", alt: "Garden walkway beside the hotel", cat: "exterior" },
  { src: "/images/room-deluxe-2.jpg", alt: "Double room with wardrobe", cat: "rooms" },
  { src: "/images/banquet-hall-3.jpg", alt: "Banquet hall floor and stage", cat: "banquet" },
  { src: "/images/exterior-forecourt.jpg", alt: "Hotel building on GT Road", cat: "exterior" },
  { src: "/images/room-family-3.jpg", alt: "Family room with sofa", cat: "rooms" },
  { src: "/images/banquet-lounge.jpg", alt: "Lounge seating beside the hall", cat: "banquet" },
  { src: "/images/room-deluxe-tv.jpg", alt: "LED TV and AC in a double room", cat: "rooms" },
  { src: "/images/room-standard-2.jpg", alt: "Double room with a window view", cat: "rooms" },
  { src: "/images/room-family-6.jpg", alt: "Family room with two beds and AC", cat: "rooms" },
  { src: "/images/room-double-window.jpg", alt: "Double bed by the window", cat: "rooms" },
  { src: "/images/room-family-7.jpg", alt: "Family room with ceiling lights", cat: "rooms" },
  { src: "/images/room-bathroom.jpg", alt: "Attached bathroom", cat: "rooms" },
  { src: "/images/room-corridor.jpg", alt: "Room corridor", cat: "rooms" },
];

// Short walkthrough clips in public/videos (upright H.264 MP4, no sound) with a poster frame of the same name.
// Camera originals are kept in originals/videos (not published). `room: true` clips also show on the Rooms page.
export const videos = [
  { src: "/videos/exterior.mp4", poster: "/videos/exterior.jpg", title: "The hotel from GT Road" },
  { src: "/videos/family-room.mp4", poster: "/videos/family-room.jpg", title: "Family room", room: true },
  { src: "/videos/double-room.mp4", poster: "/videos/double-room.jpg", title: "Double room and bathroom", room: true },
  { src: "/videos/room-with-sofa.mp4", poster: "/videos/room-with-sofa.jpg", title: "Double room with sofa", room: true },
  { src: "/videos/suite-room.mp4", poster: "/videos/suite-room.jpg", title: "Large room with sofa", room: true },
  { src: "/videos/corridor.mp4", poster: "/videos/corridor.jpg", title: "Room corridor and stairs" },
  { src: "/videos/banquet-hall.mp4", poster: "/videos/banquet-hall.jpg", title: "Banquet hall" },
  { src: "/videos/restaurant.mp4", poster: "/videos/restaurant.jpg", title: "Restaurant" },
  { src: "/videos/hotel-view.mp4", poster: "/videos/hotel-view.jpg", title: "View from the hotel" },
];

export const perfectFor = ["Family Stays", "Weddings & Events", "Pilgrim Journeys", "Highway Breaks", "Business Trips"];

export const highlights = ["Clean, comfortable rooms", "In-house restaurant", "Banquet hall", "Parking on the highway"];

// TODO: confirm room types, beds, occupancy and descriptions with the owner.
export const rooms = [
  {
    id: "family",
    name: "Family Room",
    tag: "Most spacious",
    images: ["/images/room-family-1.jpg", "/images/room-family-2.jpg", "/images/room-family-3.jpg"],
    meta: ["Double + single bed", "Up to 4 guests", "Extra bed on request"],
    text: "Room for the whole family or a small group of pilgrims — extra beds, plenty of space and the restaurant just downstairs.",
    features: ["Double + single bed", "Extra bed on request", "Air conditioning", "LED TV", "Attached bathroom", "Room service"],
  },
  {
    id: "deluxe",
    name: "Deluxe AC Room",
    tag: "Most booked",
    images: ["/images/room-deluxe-1.jpg", "/images/room-deluxe-2.jpg", "/images/room-deluxe-tv.jpg"],
    meta: ["1 Double bed", "2 adults + 1 child", "Air conditioned"],
    text: "Our most popular room — air-conditioned, with a comfortable double bed, LED TV and attached bathroom. Ideal for a restful night's break on the GT Road.",
    features: ["Air conditioning", "LED TV", "Attached bathroom", "Hot & cold water", "Room service", "Daily housekeeping"],
  },
  {
    id: "standard",
    name: "Standard Room",
    tag: "Best value",
    // TODO: confirm with the owner which photos show which room type
    images: ["/images/room-standard-1.jpg", "/images/room-standard-2.jpg", "/images/room-twin.jpg"],
    meta: ["1 Double bed", "Up to 2 adults", "Attached bathroom"],
    text: "A clean, comfortable room for solo travellers and couples on the move — fresh linen, an attached bathroom with hot water and room service from our kitchen.",
    features: ["Double bed with fresh linen", "Attached bathroom", "Hot & cold water", "Room service", "Daily housekeeping", "Free parking"],
  },
];

export const inEveryRoom = [
  { icon: "sparkle", title: "Fresh Linen", text: "Clean sheets and towels with daily housekeeping." },
  { icon: "food", title: "Room Service", text: "Hot meals and chai from our kitchen to your room." },
  { icon: "car", title: "Free Parking", text: "Park your car or bus right at the hotel." },
  { icon: "clock", title: "24-Hour Desk", text: "Late arrival? We're always awake to check you in." },
];

export const restaurant = {
  text: "Our ground-floor restaurant serves fresh, home-style food all day — hot breakfasts, North Indian thalis, Bihari favourites and quick meals for travellers in a hurry. Open to hotel guests and walk-in diners alike.",
  // Dishes without a `credit` are real photos from our kitchen, taken from the hotel's Google Maps "Food & drink" photos
  // (originals in originals/food-review, git-ignored). TODO: owner to confirm the dish names and add the full menu.
  // Dishes with a `credit` use stock photos from Wikimedia Commons: their licences require the credit, which /credits
  // lists and /dining links to. TODO: replace those with photos of our own food and drop their credits.
  dishes: [
    {
      title: "Kadhai Chicken",
      text: "A guest favourite — rich, spicy and best with hot tandoori roti.",
      image: "/images/food-kadhai-chicken.jpg",
      credit: { by: "AugustineKajur", page: "https://commons.wikimedia.org/wiki/File:Kadai_Chicken-NCR.jpg", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
    },
    {
      title: "Dal Tadka",
      text: "Yellow dal finished with a smoky tadka of ghee, garlic and jeera.",
      image: "/images/food-dal-tadka.jpg",
      credit: { by: "AugustineKajur", page: "https://commons.wikimedia.org/wiki/File:Dal_Tadka-Delhi.jpg", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
    },
    {
      title: "Kadhai Paneer & Veg Jalfrezi",
      text: "Paneer and fresh vegetables tossed with peppers and masala.",
      image: "/images/food-kadhai-paneer.jpg",
      credit: { by: "Yummy O Yummy", page: "https://commons.wikimedia.org/wiki/File:Kadai_Paneer_(15913018051).jpg", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0" },
    },
    {
      title: "Tandoori Roti",
      text: "Fresh off the tandoor — 'amongst the best I've had', says one guest.",
      image: "/images/food-tandoori-roti.jpg",
      credit: { by: "Ravi Dwivedi", page: "https://commons.wikimedia.org/wiki/File:Tandoori-rotis.jpg", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
    },
    {
      title: "Pyaj Pakoda & Chai",
      text: "Crispy onion pakodas with hot tea — the perfect highway stop.",
      image: "/images/food-pyaj-pakoda.jpg",
      credit: { by: "Babu iyer", page: "https://commons.wikimedia.org/wiki/File:Onion_pakora_-_a.jpg", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0" },
    },
    {
      title: "Tandoori Chicken",
      text: "A whole chicken roasted in the tandoor, served with mint chutney and a fresh garnish.",
      image: "/images/food-tandoori-chicken.jpg",
    },
    {
      title: "Paneer Tikka",
      text: "Paneer, capsicum, onion and tomato, charred in the tandoor and served with green chutney.",
      image: "/images/food-paneer-tikka.jpg",
    },
    {
      title: "Nargisi Kofta",
      text: "Boiled eggs wrapped in spiced keema and fried crisp, served with mint chutney.",
      image: "/images/food-nargisi-kofta.jpg",
    },
    {
      title: "Chilli Chicken",
      text: "Crispy chicken tossed in a hot, glossy Indo-Chinese chilli sauce.",
      image: "/images/food-chilli-chicken.jpg",
    },
    {
      title: "Keema Masala",
      text: "Slow-cooked minced meat in a rich masala, finished with cream.",
      image: "/images/food-keema-masala.jpg",
    },
    {
      title: "Garden Fresh Salad",
      text: "Cucumber, tomato, onion and green chilli, plated fresh to go with every meal.",
      image: "/images/food-garden-salad.jpg",
    },
  ],
  extras: ["Group meals for buses & travellers", "Room service for hotel guests", "Catering for banquet events"],
  image: "/images/restaurant-hall-3.jpg",
};

export const banquet = {
  text: "Celebrate weddings, receptions, birthdays, tilak, mundan and corporate get-togethers in our banquet hall. We take care of seating, décor coordination and catering from our own kitchen, so you can focus on your guests.",
  capacity: null, // TODO: e.g. "Up to 200 guests"
  photos: [
    { src: "/images/banquet-stage-2.jpg", alt: "Stage drapes and chandeliers" },
    { src: "/images/banquet-hall-3.jpg", alt: "Banquet hall floor and stage" },
    { src: "/images/banquet-lounge.jpg", alt: "Lounge seating beside the hall" },
  ],
  events: [
    { icon: "ring", title: "Weddings & Receptions", text: "Shaadi, reception and baraat stays with rooms for your guests." },
    { icon: "cake", title: "Birthdays & Parties", text: "Birthdays, anniversaries and get-togethers with food from our kitchen." },
    { icon: "family", title: "Family Functions", text: "Tilak, sagai, mundan and other family occasions." },
    { icon: "briefcase", title: "Corporate Meetings", text: "Team meetings and business gatherings on the highway." },
  ],
  why: [
    { icon: "food", title: "Our Own Kitchen", text: "Catering by our restaurant team — veg and non-veg menus to suit your function." },
    { icon: "bed", title: "Rooms For Guests", text: "Out-of-town relatives and the baraat can stay right upstairs." },
    { icon: "car", title: "Easy Parking", text: "Space for cars and buses, right on the GT Road." },
    { icon: "heart", title: "Personal Care", text: "A family-run team that treats your celebration like our own." },
  ],
};

export const whyUs = [
  { icon: "sparkle", title: "Clean Rooms", text: "Fresh linen, clean bathrooms and daily housekeeping for a restful stay." },
  { icon: "food", title: "In-house Restaurant", text: "Fresh, home-style Indian food served hot, all day." },
  { icon: "party", title: "Banquet Hall", text: "Weddings, birthdays and family functions with catering included." },
  { icon: "car", title: "Easy Parking", text: "Space for cars, buses and family vehicles right at the hotel." },
  { icon: "clock", title: "24-Hour Front Desk", text: "Late arrival on the highway? Someone is always there to welcome you." },
  { icon: "road", title: "Right On GT Road", text: "Direct NH-19 access — no detours, no narrow lanes." },
  { icon: "heart", title: "Warm Hospitality", text: "Family-run, with the personal care of Bihar's hospitality." },
  { icon: "tag", title: "Fair Prices", text: "Book direct by phone or WhatsApp for the best available rate." },
];

export const promises = [
  { icon: "sparkle", title: "Clean Rooms", text: "Fresh linen, clean bathrooms and housekeeping every day — the first thing our guests notice." },
  { icon: "food", title: "Honest Food", text: "Home-style Indian cooking with fresh ingredients, served hot at fair prices." },
  { icon: "heart", title: "Warm Service", text: "A family-run team that greets every guest — trucker, pilgrim or wedding party — the same way." },
];

export const scores = [{ value: "437", label: "guest reviews on Google" }];

// Real 5-star guest reviews from the hotel's Google Maps listing (some shortened with "…").
// The slider appears once there are 3+.
export const reviews = [
  {
    name: "Parul J.",
    source: "Google review",
    text: "Amazing restaurant and stop when you're traveling through Sherghati on NH19! The food is really good and the portions are generous as well. We had kadhai chicken, yellow dal tadka and tandoori rotis and all were very good. The tandoori rotis were amongst the best I've had. The serving staff was also really sweet. Highly recommended.",
  },
  {
    name: "Mahtab A.",
    source: "Google review",
    text: "The hospitality provided by the staff was exceptional, making me feel right at home. The rooms were clean, spacious, and well-maintained… One of the highlights of my stay was the delicious food served at the hotel's restaurant. I would highly recommend this hotel to anyone visiting the area.",
  },
  {
    name: "Saumya J.",
    source: "Google review",
    text: "Stopped by here randomly to have lunch on our way to Banaras. Surprisingly the food was too good. We had vegetable jalfrezi, paneer kadhaai, dal tadka, tandoori roti, lassi and chaach. Everything was really good and you can stop by here for good food.",
  },
  {
    name: "Vicky K.",
    source: "Google review",
    text: "This place is located on grand trunk road. Seating arrangement is nice. Food is good. Rooms for accommodation are quite hygienic. Service is fast. Stay open 24*7… Behaviour of staff is nice and friendly.",
  },
  {
    name: "Zishan A.",
    source: "Google review",
    text: "Very good, spacious, I visited there as a barati. Best thing in it is, it's on road — good space for parking & other home function.",
  },
  {
    name: "Mayank N.",
    source: "Google review",
    text: "It has become second instinct to savour pyaj pakodas n tea here. Have had several meals — food is fine but pakodas r great.",
  },
  {
    name: "Raja K.",
    source: "Google review",
    text: "Bhot achaa khana h or staff bht aachy hai or 24*7 open h.. food quality good.",
  },
];

// Approximate road distances — TODO: verify on Google Maps.
export const nearby = [
  { name: "Sherghati Town", distance: "~4 km" },
  { name: "Dobhi Junction", distance: "~15 km" },
  { name: "Gaya Airport", distance: "~30 km" },
  { name: "Mahabodhi Temple, Bodh Gaya", distance: "~35 km" },
  { name: "Vishnupad Temple, Gaya", distance: "~38 km" },
  { name: "Gaya Junction", distance: "~38 km" },
];

export const reach = [
  { icon: "road", title: "By Road", text: "We are right on NH-19 (GT Road) at Akauna, Sherghati — the main Kolkata–Delhi highway. Look for the HOTEL SHER-E-BIHAR sign on the building." },
  { icon: "briefcase", title: "By Rail", text: "Gaya Junction is the nearest major railway station, roughly 38 km away. Taxis and autos are available from the station." },
  { icon: "pin", title: "By Air", text: "Gaya International Airport is roughly 30 km away. Call us and we'll help you plan your ride to the hotel." },
];

export const faqGroups = [
  { id: "booking", label: "Booking" },
  { id: "stay", label: "Your Stay" },
  { id: "dining", label: "Dining & Events" },
  { id: "location", label: "Location" },
];

// `featured: true` questions also appear in the homepage FAQ section.
export const faqs = [
  { group: "booking", featured: true, q: "How do I book a room?", a: `Call us on ${hotel.phoneDisplay} or send your dates on WhatsApp using the Book Now button. Booking direct gets you the best available rate.` },
  { group: "booking", q: "Do I get a better price booking directly?", a: "Yes. Booking by phone or WhatsApp means no booking-site commission, so we can offer you the best available rate." },
  { group: "booking", q: "Can I book for a large group or a wedding party?", a: "Yes — tell us how many rooms and dates you need and we'll hold rooms together for your group." },
  { group: "booking", q: "What types of rooms do you have?", a: "We have Standard Rooms for one or two guests, air-conditioned Deluxe Rooms, and Family Rooms for up to four guests with an extra bed on request. See the Rooms page for photos and details." },
  { group: "booking", featured: true, q: "How much does a room cost?", a: "Rates depend on the room type and your dates. Call or WhatsApp us with your dates and number of guests and we'll tell you the best available rate straight away." },
  { group: "booking", q: "Can I arrive without a booking?", a: "Yes, walk-in guests are welcome at any hour, subject to availability. During the wedding season and pilgrim rush it's best to call ahead so we can keep a room for you." },
  { group: "booking", q: "Can I change or cancel my booking?", a: `Yes — just call or WhatsApp us on ${hotel.phoneDisplay} as early as you can and we'll update or cancel your booking.` }, // TODO: confirm cancellation / advance-payment policy with the owner
  { group: "stay", featured: true, q: "What are the check-in and check-out times?", a: `Check-in is from ${hotel.checkIn} and check-out is by ${hotel.checkOut}. Early check-in or late check-out can be requested at the front desk, subject to availability.` },
  { group: "stay", q: "What ID do I need at check-in?", a: "All adult guests need a valid government photo ID such as Aadhaar, Voter ID, Driving Licence or Passport." },
  { group: "stay", featured: true, q: "Is parking available?", a: "Yes, there is parking at the hotel for cars and buses." },
  { group: "stay", q: "I'm arriving late at night. Can I still check in?", a: "Yes. Our front desk is open 24 hours, so you can check in whenever you reach — just let us know your expected arrival time." },
  { group: "stay", q: "Are the rooms air-conditioned?", a: "Our Deluxe and Family Rooms are air-conditioned. Every room has an attached bathroom with hot and cold water." },
  { group: "stay", q: "Can I get an extra bed for my family?", a: "Yes, an extra bed can be added in the Family Room on request. Tell us when you book so we can have it ready." },
  { group: "stay", q: "Do you have room service?", a: "Yes, hot meals and chai from our kitchen can be served in your room." },
  { group: "stay", q: "Are couples and families welcome?", a: "Yes. We welcome families, couples, pilgrims, business travellers and groups. All adult guests need a valid government photo ID at check-in." }, // TODO: confirm couple-friendly policy with the owner
  { group: "dining", q: "Is there a restaurant at the hotel?", a: "Yes — our in-house restaurant on the ground floor serves fresh Indian food for hotel guests and walk-in diners." },
  { group: "dining", featured: true, q: "Can I book the banquet hall for a wedding or function?", a: "Yes. Send us your event date, guest count and requirements using the enquiry form or WhatsApp and our team will share packages." },
  { group: "dining", q: "Do you cater banquet events?", a: "Yes, catering for events in our banquet hall is done by our own restaurant kitchen." },
  { group: "dining", featured: true, q: "Can I eat at the restaurant without staying at the hotel?", a: "Of course. Travellers on the GT Road often stop by for a meal — the restaurant is open to walk-in diners as well as hotel guests." },
  { group: "dining", q: "What kind of food do you serve?", a: "Fresh, home-style Indian food — North Indian thalis, Bihari favourites, kadhai chicken, dal tadka, paneer dishes, tandoori roti, pakodas, chai, lassi and chaach." },
  { group: "dining", q: "Do you serve both veg and non-veg?", a: "Yes, we serve both vegetarian and non-vegetarian dishes, and banquet menus can be fully veg or mixed to suit your function." },
  { group: "dining", q: "Can you arrange meals for a bus or large travelling group?", a: "Yes. Call us before you arrive with your group size and time, and we'll have the food ready so you can eat and get back on the road quickly." },
  { group: "dining", q: "Can our wedding guests stay at the hotel too?", a: "Yes — out-of-town relatives and the baraat can stay in our rooms right upstairs from the banquet hall. Book rooms along with the hall so we can keep them together." },
  { group: "dining", q: "Do you help with stage and hall decoration?", a: "Yes, we coordinate stage and hall décor for your function. Share your theme and budget and we'll suggest options — see the Banquet page for photos of past setups." },
  { group: "location", q: "Where exactly is the hotel?", a: `${hotel.address}. Open the map on our Contact page for directions.` },
  { group: "location", q: "How far is the hotel from Bodh Gaya and Gaya?", a: "We are on the GT Road at Akauna, Sherghati — roughly 35 km from Bodh Gaya and Gaya town by road, making us a convenient base for pilgrims." },
  { group: "location", q: "How do I find the hotel on the highway?", a: "We are right on NH-19 (GT Road) at Akauna, near Sherghati. Look for the large HOTEL SHER-E-BIHAR sign on the building — it's lit up at night." },
  { group: "location", q: "What is the nearest railway station and airport?", a: "Gaya Junction is the nearest major railway station (about 38 km) and Gaya International Airport is about 30 km away. Taxis and autos are available from both." },
  { group: "location", q: "Is the hotel a good stop on a long road trip?", a: "Yes. We're on the main Kolkata–Delhi highway with easy parking, a 24-hour front desk and a restaurant downstairs — ideal for a meal break or a night's rest on the way to Varanasi, Gaya or Kolkata." },
  { group: "location", q: "Can you help arrange a taxi?", a: "Call us before you travel and we'll help you plan your ride to or from the hotel." },
];
