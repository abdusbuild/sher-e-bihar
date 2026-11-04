"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hotel, menuGroups, menuHighlights, navLinks } from "../data/site";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Navbar() {
  const specialLinks = {
    tel: { href: `tel:${hotel.phoneTel}` },
    whatsapp: { href: `https://wa.me/${hotel.whatsapp}`, external: true },
    map: { href: hotel.mapLink, external: true },
  };
  const pathname = usePathname();
  const current = (href) => (href === pathname ? "page" : undefined);

  return (
    <>
      <nav className="navbar" aria-label="Main">
        <div className="navbar__inner">
          <Logo />
          <div className="nav-pill glass-morphism">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
          <button className="menu-btn glass-morphism" aria-label="Open menu" aria-expanded="false">
            <Icon name="menu" />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__bar">
          <Logo />
          <button className="mobile-menu__close" aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>

        <div className="drawer__grid">
          {menuGroups.map((g) => (
            <div key={g.title} className="drawer__group">
              <Link href={g.href} className="drawer__head" aria-current={current(g.href)}>
                {g.title}
              </Link>
              <ul>
                {g.links.map((l) => {
                  const special = specialLinks[l.href];
                  if (l.action === "modal")
                    return (
                      <li key={l.label}>
                        <a href="#" data-open-modal>
                          {l.label}
                        </a>
                      </li>
                    );
                  if (special)
                    return (
                      <li key={l.label}>
                        <a href={special.href} {...(special.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                          {l.label}
                        </a>
                      </li>
                    );
                  return (
                    <li key={l.label}>
                      <Link href={l.href} aria-current={current(l.href)}>
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <ul className="drawer__highlights">
            {menuHighlights.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer__foot">
          <a href="#" className="btn-gold drawer__book" data-open-modal>
            Book Your Stay
          </a>
          <div className="drawer__social">
            <a href={`https://wa.me/${hotel.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" />
            </a>
            <a href={hotel.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
              <Icon name="pin" />
            </a>
            <a href={`tel:${hotel.phoneTel}`} aria-label={`Call ${hotel.phoneDisplay}`}>
              <Icon name="phone" />
            </a>
          </div>
        </div>

        <svg className="drawer__mark" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="drawerRing" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
          </defs>
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="58" />
          <text>
            <textPath href="#drawerRing">HOTEL SHER-E-BIHAR · SHERGHATI · GAYA · BIHAR ·</textPath>
          </text>
          <text x="100" y="116" textAnchor="middle" className="drawer__mark-sb">
            SB
          </text>
        </svg>
      </div>
    </>
  );
}
