import Link from "next/link";
import { hotel } from "../data/site";

export default function Logo() {
  return (
    <Link href="/" className="logo animate-logo-glow" aria-label={`${hotel.name} home`}>
      <span className="logo-mark">{hotel.logoMark}</span>
      <span className="logo-text">
        <strong>{hotel.logoTitle}</strong>
        <small>{hotel.logoSub}</small>
      </span>
    </Link>
  );
}
