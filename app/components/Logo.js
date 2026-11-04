import Link from "next/link";
import { hotel } from "../data/site";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-mark" aria-hidden="true">{hotel.logoMark}</span>
      <span className="logo-text">
        <strong>{hotel.logoTitle}</strong>
        <small>{hotel.logoSub}</small>
      </span>
    </Link>
  );
}
