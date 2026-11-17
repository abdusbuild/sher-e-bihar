import Link from "next/link";
import Image from "next/image";
import { hotel } from "../data/site";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-mark logo-mark--crest" aria-hidden="true">
        <Image src="/brand/crest.png" alt="" width={632} height={560} sizes="72px" priority />
      </span>
      <span className="logo-text">
        <strong>{hotel.logoTitle}</strong>
        <small>{hotel.logoSub}</small>
      </span>
    </Link>
  );
}
