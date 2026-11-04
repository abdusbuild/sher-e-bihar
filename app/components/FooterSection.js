"use client";

import { useId, useState } from "react";

export default function FooterSection({ title, as: Tag = "div", label, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <Tag className={`footer__acc${open ? " is-open" : ""}`} aria-label={label}>
      <h2 className="footer__h">
        <button
          type="button"
          className="footer__acc-btn"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          {title}
          <span className="footer__acc-ico" aria-hidden="true" />
        </button>
      </h2>
      <div id={id} className="footer__acc-panel">
        <div className="footer__acc-inner">{children}</div>
      </div>
    </Tag>
  );
}
