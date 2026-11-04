const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  close: "M6 6l12 12M18 6 6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  prev: "M15 6l-6 6 6 6",
  next: "M9 6l6 6-6 6",
  zoomIn: "M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14z M20 20l-4-4 M8 11h6 M11 8v6",
  zoomOut: "M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14z M20 20l-4-4 M8 11h6",
  chevron: "M6 9l6 6 6-6",
  check: "M5 12l5 5 9-10",
  sparkle: "M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9z M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
  food: "M5 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3 M7 3v18 M17 21V3c-2.2 0-4 2.2-4 6v4h4",
  party: "M4 20l5-14 9 9-14 5z M14 4l1-2 M19 9l2-1 M17 6l2-2",
  car: "M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5h-2.5 M3 13v5h2.5 M3 13h18 M5.5 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0 M15 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0 M9 18h6",
  clock: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7v5l3 2",
  road: "M8 3 4 21 M16 3l4 18 M12 4v3 M12 10.5v3 M12 17v3",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
  tag: "M3 12V4h8l10 10-8 8z M7.5 7.5h.01",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z M12 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z",
  calendar: "M4 5h16v16H4z M4 10h16 M8 3v4 M16 3v4",
  user: "M12 12a4 4 0 1 0 0-8a4 4 0 1 0 0 8z M4 21a8 8 0 0 1 16 0",
  bed: "M3 18V7 M3 14h18v4 M21 14v-2a3 3 0 0 0-3-3h-7v5 M7 9.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5z",
  ring: "M12 9a6 6 0 1 0 0 12a6 6 0 1 0 0-12z M9 3h6l-3 6z",
  cake: "M4 21h16v-8H4z M4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 3 1 4 .5 M12 13V9 M12 6.5a1 1 0 0 1 0-2c.8.7 1 1.5 0 2z",
  briefcase: "M3 8h18v12H3z M9 8V5h6v3 M3 13h18",
  family: "M8 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 1 0 0 5z M16 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 1 0 0 5z M3 21v-6a5 5 0 0 1 10 0v6 M13 15a3 3 0 0 1 8 0v6",
  camera: "M4 8h3l2-3h6l2 3h3v11H4z M12 10.5a3 3 0 1 0 0 6a3 3 0 1 0 0-6z",
  chat: "M4 5h16v11H9l-5 4z M8 10h8 M8 13h5",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z M17.5 6.5h.01",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z",
};

const whatsapp =
  "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z";

export default function Icon({ name, className = "" }) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={`ico ico--fill ${className}`} aria-hidden="true">
        <path d={whatsapp} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={`ico ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
