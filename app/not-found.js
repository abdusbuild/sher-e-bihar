import Link from "next/link";
import { hotel, navLinks } from "./data/site";
import Icon from "./components/Icon";

export const metadata = {
  title: "Page not found",
  description: `This page doesn't exist on the ${hotel.name} website.`,
  robots: { index: false, follow: true },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <div className="not-found__code" aria-hidden="true">404</div>
        <h1>Looks like you took a wrong turn</h1>
        <p>This page doesn&apos;t exist — but your room is still waiting on the GT Road.</p>
        <div className="not-found__actions">
          <Link href="/" className="btn-gold">
            Back To Home
          </Link>
          <a href={`tel:${hotel.phoneTel}`} className="btn-outline">
            <Icon name="phone" />
            {hotel.phoneDisplay}
          </a>
        </div>
        <nav className="not-found__links" aria-label="Popular pages">
          {navLinks
            .filter((l) => l.href !== "/")
            .map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
        </nav>
      </div>
    </section>
  );
}
