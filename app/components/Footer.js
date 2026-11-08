import Link from "next/link";
import { hotel, navLinks } from "../data/site";
import Icon from "./Icon";
import Logo from "./Logo";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div className="footer__brand">
            <Logo />
            <p>{hotel.tagline} — on the GT Road at Akauna, Sherghati.</p>
            <div className="socials-round">
              <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" />
              </a>
              <a href={hotel.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <Icon name="pin" />
              </a>
            </div>
          </div>

          <FooterSection as="nav" label="Footer" title="Explore">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Reservations">
            <ul>
              <li>
                <a href={`tel:${hotel.phoneTel}`}>
                  <Icon name="phone" />
                  {hotel.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" />
                  WhatsApp the front desk
                </a>
              </li>
              {hotel.email && (
                <li>
                  <a href={`mailto:${hotel.email}`}>
                    <Icon name="mail" />
                    {hotel.email}
                  </a>
                </li>
              )}
              <li>
                <span>
                  <Icon name="clock" />
                  Check-in / out {hotel.checkIn}
                </span>
              </li>
              <li>
                <a href="#" data-open-modal>
                  <Icon name="calendar" />
                  Booking enquiry
                </a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Find Us">
            <p className="footer__addr">{hotel.address}</p>
            <a className="footer__dir" href={hotel.mapLink} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </FooterSection>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {hotel.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
