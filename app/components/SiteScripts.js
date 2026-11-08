"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { hotel } from "../data/site";

// Site-wide interactions and motion (navbar, reveal, carousels, marquees,
// rotator, tabs/filters, slider, accordion, lightbox, enquire panel, popup,
// WhatsApp enquiry forms). Re-runs on every page change.
export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const body = document.body;
    const cleanups = [];
    const on = (el, ev, fn, opts) => {
      if (!el) return;
      el.addEventListener(ev, fn, opts);
      cleanups.push(() => el.removeEventListener(ev, fn, opts));
    };
    const later = (fn, ms) => {
      const t = setTimeout(fn, ms);
      cleanups.push(() => clearTimeout(t));
    };
    const every = (fn, ms) => {
      const t = setInterval(fn, ms);
      cleanups.push(() => clearInterval(t));
    };

    /* Navbar: adds a shadow once the page has scrolled. The Enquire button waits until the booking bar has passed. */
    const nav = $(".navbar");
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 30);
      body.classList.toggle("is-past-fold", window.scrollY > 360);
    };
    onScroll();
    on(window, "scroll", onScroll, { passive: true });

    /* Mobile menu */
    const menuBtn = $(".menu-btn");
    const openMenu = (open) => {
      body.classList.toggle("menu-open", open);
      menuBtn?.setAttribute("aria-expanded", open);
    };
    openMenu(false);
    on(menuBtn, "click", () => openMenu(true));
    on($(".mobile-menu__close"), "click", () => openMenu(false));
    $$(".mobile-menu a").forEach((a) => on(a, "click", () => openMenu(false)));

    /* Scroll reveal */
    $$("[data-stagger]").forEach((g) => {
      const step = parseFloat(g.getAttribute("data-stagger")) || 0.1;
      // Delays repeat every 6 items so long grids don't leave later items waiting.
      $$(".reveal", g).forEach((el, i) => el.style.setProperty("--d", `${((i % 6) * step).toFixed(2)}s`));
    });
    const revealEls = $$(".reveal:not(.is-in)");
    if (!reduceMotion) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -12% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add("is-in"));
    }

    /* Peek carousels: arrows and "1 / 3" counter. Swiping is native scroll-snap. */
    $$("[data-peek]").forEach((root) => {
      const track = $(".peek__track", root);
      const slides = $$(".peek__slide", root);
      const count = $("[data-peek-count]", root);
      const padLeft = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
      let idx = 0;
      let raf = 0;
      let moving = false;
      const paint = () => {
        if (moving) return; // the counter already shows where the row is heading
        const x = track.scrollLeft + padLeft();
        // The last slide can't reach the snap line (nothing follows it), so the end of the row counts as last
        const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
        idx = atEnd
          ? slides.length - 1
          : slides.reduce((best, s, i) => (Math.abs(s.offsetLeft - x) < Math.abs(slides[best].offsetLeft - x) ? i : best), 0);
        if (count) count.textContent = `${idx + 1} / ${slides.length}`;
      };
      const settle = () => {
        cancelAnimationFrame(raf);
        moving = false;
        track.style.scrollSnapType = "";
      };
      // Arrows glide over 1.2s with an ease-in-out curve. Snap is off during the glide or it would fight the movement.
      const go = (n) => {
        idx = (n + slides.length) % slides.length;
        const to = Math.min(slides[idx].offsetLeft - padLeft(), track.scrollWidth - track.clientWidth);
        if (reduceMotion) {
          track.scrollLeft = to;
          return;
        }
        settle();
        moving = true;
        track.style.scrollSnapType = "none";
        if (count) count.textContent = `${idx + 1} / ${slides.length}`;
        const from = track.scrollLeft;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / 1200);
          const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          track.scrollLeft = from + (to - from) * eased;
          if (p < 1) raf = requestAnimationFrame(step);
          else {
            settle();
            paint();
          }
        };
        raf = requestAnimationFrame(step);
      };
      cleanups.push(settle);
      // A finger on the row takes over from the glide
      on(track, "pointerdown", () => {
        if (!moving) return;
        settle();
        paint();
      });
      on(track, "scroll", paint, { passive: true });
      on(window, "resize", paint);
      on($("[data-peek-prev]", root), "click", () => go(idx - 1));
      on($("[data-peek-next]", root), "click", () => go(idx + 1));
      paint();
    });

    /* Hero background crossfade */
    const heroImgs = $$(".hero__bg img");
    if (heroImgs.length > 1) {
      let hi = 0;
      every(() => {
        heroImgs[hi].classList.remove("is-active");
        hi = (hi + 1) % heroImgs.length;
        heroImgs[hi].classList.add("is-active");
      }, 6000);
    }

    /* Rotating word */
    $$(".rotator").forEach((r) => {
      const words = $$("span", r);
      if (words.length < 2) return;
      let i = 0;
      every(() => {
        const cur = words[i];
        cur.classList.remove("is-active");
        cur.classList.add("is-leaving");
        later(() => cur.classList.remove("is-leaving"), 500);
        i = (i + 1) % words.length;
        words[i].classList.add("is-active");
      }, 2500);
    });

    /* Pill tabs (room showcase, FAQ groups) and filters (gallery) */
    $$("[data-tabs]").forEach((group) => {
      const pills = $$(".pill", group);
      const target = $(group.getAttribute("data-tabs"));
      pills.forEach((p) =>
        on(p, "click", () => {
          pills.forEach((x) => {
            x.classList.toggle("is-active", x === p);
            x.setAttribute("aria-selected", x === p);
          });
          const key = p.getAttribute("data-tab");
          if (group.hasAttribute("data-filter")) {
            $$("[data-cat]", target).forEach((it) => it.classList.toggle("is-hidden", key !== "all" && it.getAttribute("data-cat") !== key));
          } else {
            $$("[data-panel]", target).forEach((pn) => pn.classList.toggle("is-active", pn.getAttribute("data-panel") === key));
          }
        })
      );
    });

    /* Testimonials slider */
    const testi = $(".testi");
    if (testi) {
      const track = $(".testi__track", testi);
      const cards = $$(".testi-card", testi);
      let idx = 0;
      let timer;
      // Must match the .testi-card flex-basis breakpoints in globals.css
      const perView = () => (window.innerWidth <= 600 ? 1 : window.innerWidth <= 1100 ? 2 : 4);
      const setOpen = (card, open) => {
        card.classList.toggle("is-open", open);
        const btn = $(".testi-more", card);
        btn.setAttribute("aria-expanded", open);
        btn.textContent = open ? "Show less" : "Read more";
      };
      // Show "Read more" only on cards whose text is actually cut off by the 4-line clamp
      const checkMore = () =>
        cards.forEach((c) => {
          if (c.classList.contains("is-open")) return;
          const p = $("p", c);
          c.classList.toggle("has-more", p.scrollHeight > p.clientHeight + 2);
        });
      // dragPx: how far a finger is currently pulling the track
      const place = (dragPx = 0) => {
        track.style.transform = `translateX(calc(${-idx * (100 / perView())}% + ${dragPx}px))`;
      };
      const go = (n) => {
        cards.forEach((c) => c.classList.contains("is-open") && setOpen(c, false));
        const max = Math.max(0, cards.length - perView());
        idx = n > max ? 0 : n < 0 ? max : n;
        place();
        clearTimeout(timer);
        timer = setTimeout(() => go(idx + 1), 5000);
      };
      /* Swipe by hand on touch screens. touch-action: pan-y in globals.css leaves vertical scrolling to the browser. */
      const viewport = $(".testi__viewport", testi);
      let startX = null;
      let dragX = 0;
      on(viewport, "pointerdown", (e) => {
        if (e.pointerType === "mouse" || !e.isPrimary) return;
        startX = e.clientX;
        dragX = 0;
        clearTimeout(timer);
        track.style.transition = "none";
      });
      on(viewport, "pointermove", (e) => {
        if (startX === null || !e.isPrimary) return;
        dragX = e.clientX - startX;
        place(dragX);
      });
      const endSwipe = () => {
        if (startX === null) return;
        startX = null;
        track.style.transition = "";
        if (Math.abs(dragX) >= 50) {
          go(idx + (dragX < 0 ? 1 : -1));
          return;
        }
        // Too short to count as a swipe (or a tap on "Read more"): snap back and keep any open card open
        place();
        if (!cards.some((c) => c.classList.contains("is-open"))) timer = setTimeout(() => go(idx + 1), 5000);
      };
      on(viewport, "pointerup", endSwipe);
      on(viewport, "pointercancel", endSwipe);
      cards.forEach((c) =>
        on($(".testi-more", c), "click", () => {
          const open = !c.classList.contains("is-open");
          setOpen(c, open);
          clearTimeout(timer); // don't slide away while someone is reading
          if (!open) timer = setTimeout(() => go(idx + 1), 5000);
        })
      );
      on($(".testi__prev", testi), "click", () => go(idx - 1));
      on($(".testi__next", testi), "click", () => go(idx + 1));
      on(window, "resize", () => {
        go(idx);
        checkMore();
      });
      go(0);
      checkMore();
      document.fonts?.ready.then(checkMore);
      cleanups.push(() => clearTimeout(timer));
    }

    /* Legal pages: highlight the section in view in the "On this page" list */
    const legalLinks = $$(".legal-toc a");
    if (legalLinks.length) {
      const legalSections = legalLinks.map((a) => $(a.getAttribute("href")));
      const spy = () => {
        let current = 0;
        legalSections.forEach((s, i) => {
          if (s.getBoundingClientRect().top <= 140) current = i;
        });
        legalLinks.forEach((a, i) => a.classList.toggle("is-active", i === current));
      };
      spy();
      on(window, "scroll", spy, { passive: true });
    }

    /* Accordion */
    $$(".acc__q").forEach((q) =>
      on(q, "click", () => {
        const open = q.parentElement.classList.toggle("is-open");
        q.setAttribute("aria-expanded", open);
      })
    );

    /* Lightbox: every content photo opens full screen; arrows, keys and swipe to browse */
    const lb = $(".lightbox");
    if (lb) {
      const lbImg = $("img", lb);
      const lbCap = $(".lightbox__cap", lb);
      const lbCount = $(".lightbox__count", lb);
      const zoomable = "[data-lightbox], .img-marquee img, .media-split__img img, .showcase__img img, .room-detail__tile img, .peek__img img, .dine__img img, .arch img";
      const srcOf = (el) => el.getAttribute("href") || el.dataset.full || el.currentSrc || el.getAttribute("src");
      const capOf = (el) => el.getAttribute("data-caption") || el.getAttribute("alt") || "";
      // Gallery links count once (not the <img> inside them); filtered-out gallery items are skipped.
      const triggers = $$(zoomable).filter((el) => !(el.tagName === "IMG" && el.closest("[data-lightbox]")));
      // Visible photos on the page, one entry per image (marquee rows repeat their photos).
      const collect = () => {
        const seen = new Set();
        return triggers
          .filter((el) => !el.closest(".is-hidden"))
          .map((el) => ({ src: srcOf(el), cap: capOf(el) }))
          .filter((it) => it.src && !seen.has(it.src) && seen.add(it.src));
      };
      let list = [];
      let li = 0;

      /* Zoom: buttons, wheel, double-click / double-tap, pinch; drag to pan when zoomed */
      const zoomInBtn = $(".lightbox__zoom-in", lb);
      const zoomOutBtn = $(".lightbox__zoom-out", lb);
      const MAX = 4;
      let zs = 1;
      let tx = 0;
      let ty = 0;
      const render = () => {
        // Keep the photo covering the screen: no panning past its edges.
        const mx = Math.max(0, (lbImg.offsetWidth * zs - lb.clientWidth) / 2);
        const my = Math.max(0, (lbImg.offsetHeight * zs - lb.clientHeight) / 2);
        tx = Math.min(mx, Math.max(-mx, tx));
        ty = Math.min(my, Math.max(-my, ty));
        lbImg.style.transform = zs === 1 ? "" : `translate(${tx}px, ${ty}px) scale(${zs})`;
        lb.classList.toggle("is-zoomed", zs > 1);
        if (zoomOutBtn) zoomOutBtn.disabled = zs <= 1;
        if (zoomInBtn) zoomInBtn.disabled = zs >= MAX;
      };
      // Zoom to scale s, keeping the screen point (px, py) fixed (defaults to the centre).
      const zoomTo = (s, px, py) => {
        s = Math.min(MAX, Math.max(1, s));
        const cx = lbImg.offsetLeft + lbImg.offsetWidth / 2;
        const cy = lbImg.offsetTop + lbImg.offsetHeight / 2;
        const dx = (px ?? cx) - cx;
        const dy = (py ?? cy) - cy;
        tx = dx - ((dx - tx) * s) / zs;
        ty = dy - ((dy - ty) * s) / zs;
        zs = s;
        if (zs === 1) tx = ty = 0;
        render();
      };
      const resetZoom = () => {
        zs = 1;
        tx = ty = 0;
        render();
      };
      on(zoomInBtn, "click", () => zoomTo(zs * 1.5));
      on(zoomOutBtn, "click", () => zoomTo(zs / 1.5));
      on(lb, "wheel", (e) => {
        if (!lb.classList.contains("is-open")) return;
        e.preventDefault();
        zoomTo(zs * Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
      }, { passive: false });
      on(lbImg, "dblclick", (e) => (zs > 1 ? resetZoom() : zoomTo(2.5, e.clientX, e.clientY)));

      const show = (n) => {
        resetZoom();
        li = (n + list.length) % list.length;
        // Local photos open as an optimised full-size copy (AVIF/WebP, high quality) instead of the large master JPEG
        const full = list[li].src;
        lbImg.src = full.startsWith("/images/") ? `/_next/image?url=${encodeURIComponent(full)}&w=1920&q=90` : full;
        lbImg.alt = lbCap.textContent = list[li].cap;
        if (lbCount) lbCount.textContent = `${li + 1} / ${list.length}`;
        lb.classList.add("is-open");
        body.style.overflow = "hidden";
      };
      const close = () => {
        resetZoom();
        lb.classList.remove("is-open");
        body.style.overflow = "";
      };
      triggers.forEach((el) =>
        on(el, "click", (e) => {
          e.preventDefault();
          list = collect();
          const i = list.findIndex((it) => it.src === srcOf(el));
          if (i >= 0) show(i);
        })
      );
      on($(".lightbox__close", lb), "click", close);
      on($(".lightbox__prev", lb), "click", () => show(li - 1));
      on($(".lightbox__next", lb), "click", () => show(li + 1));
      let dragged = false; // a drag that ends on the backdrop must not close the viewer
      on(lb, "click", (e) => {
        if (e.target === lb && !dragged) close();
        dragged = false;
      });
      on(document, "keydown", (e) => {
        if (!lb.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(li - 1);
        if (e.key === "ArrowRight") show(li + 1);
        if (e.key === "+" || e.key === "=") zoomTo(zs * 1.5);
        if (e.key === "-") zoomTo(zs / 1.5);
        if (e.key === "0") resetZoom();
      });

      /* Pointer gestures: pinch to zoom, drag to pan when zoomed, swipe to browse / close when not */
      const pts = new Map();
      let start = null; // gesture start: { x, y, tx, ty, zs, dist, swipe }
      let lastTap = 0;
      const dist = () => {
        const [a, b] = [...pts.values()];
        return Math.hypot(a.x - b.x, a.y - b.y);
      };
      const mid = () => {
        const [a, b] = [...pts.values()];
        return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      };
      on(lb, "pointerdown", (e) => {
        if (e.target.closest(".lightbox__btn") || (e.pointerType === "mouse" && e.button !== 0)) return;
        pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const p = pts.size === 2 ? mid() : { x: e.clientX, y: e.clientY };
        start = { x: p.x, y: p.y, tx, ty, zs, dist: pts.size === 2 ? dist() : 0, swipe: zs === 1 && e.pointerType !== "mouse" };
        if (pts.size === 2) start.swipe = false;
        if (zs > 1 || pts.size === 2) lb.classList.add("is-dragging");
        dragged = false;
      });
      on(lb, "pointermove", (e) => {
        if (!pts.has(e.pointerId) || !start) return;
        pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pts.size === 2) {
          // Pinch: scale around the fingers' midpoint and follow it as it moves.
          const m = mid();
          zs = start.zs;
          tx = start.tx + (m.x - start.x);
          ty = start.ty + (m.y - start.y);
          zoomTo((start.zs * dist()) / start.dist, m.x, m.y);
          dragged = true;
          return;
        }
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (Math.abs(dx) + Math.abs(dy) > 6) dragged = true;
        if (zs > 1) {
          tx = start.tx + dx;
          ty = start.ty + dy;
          render();
        } else if (start.swipe && Math.abs(dx) > Math.abs(dy)) {
          lbImg.style.transform = `translateX(${dx}px)`;
        }
      });
      const end = (e) => {
        if (!pts.has(e.pointerId)) return;
        pts.delete(e.pointerId);
        if (pts.size === 1) {
          // One finger lifted after a pinch: keep panning from the remaining finger.
          const p = [...pts.values()][0];
          start = { x: p.x, y: p.y, tx, ty, zs, dist: 0, swipe: false };
          return;
        }
        if (pts.size) return;
        lb.classList.remove("is-dragging");
        const s = start;
        start = null;
        if (!s) return;
        const dx = e.clientX - s.x;
        const dy = e.clientY - s.y;
        if (s.swipe && zs === 1) {
          lbImg.style.transform = "";
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) return show(dx < 0 ? li + 1 : li - 1);
          if (dy > 90 && Math.abs(dy) > Math.abs(dx)) return close();
        }
        // Double-tap on phones toggles zoom.
        if (e.pointerType !== "mouse" && !dragged && e.target === lbImg) {
          const now = Date.now();
          if (now - lastTap < 300) {
            if (zs > 1) resetZoom();
            else zoomTo(2.5, e.clientX, e.clientY);
            lastTap = 0;
          } else lastTap = now;
        }
      };
      on(lb, "pointerup", end);
      on(lb, "pointercancel", end);
      cleanups.push(close);
    }

    /* Enquire button + options panel */
    const fab = $(".enquire-fab");
    const panel = $("#enquirePanel");
    const setPanel = (open) => {
      panel.hidden = !open;
      fab.setAttribute("aria-expanded", open);
    };
    setPanel(false);
    on(fab, "click", (e) => {
      e.stopPropagation();
      setPanel(panel.hidden);
    });
    on($(".enquire-panel__close", panel), "click", () => setPanel(false));
    $$(".enquire-opt", panel).forEach((a) => on(a, "click", () => setPanel(false)));
    on(document, "click", (e) => {
      if (!panel.hidden && !panel.contains(e.target)) setPanel(false);
    });

    /* Get-in-touch popup */
    const modal = $(".modal");
    const modalRoom = $("#m-room");
    const openModal = (room) => {
      if (modalRoom && room) modalRoom.value = room;
      modal.classList.add("is-open");
    };
    const closeModal = () => modal.classList.remove("is-open");
    on($(".modal__close", modal), "click", closeModal);
    on(modal, "click", (e) => e.target === modal && closeModal());
    on(document, "keydown", (e) => {
      if (e.key !== "Escape") return;
      closeModal();
      setPanel(false);
      openMenu(false);
    });
    $$("[data-open-modal]").forEach((b) =>
      on(b, "click", (e) => {
        e.preventDefault();
        openMenu(false);
        openModal(b.getAttribute("data-room"));
      })
    );

    /* Home booking bar → copies dates / guests / room into the enquiry popup */
    const booking = $("form[data-booking]");
    if (booking) {
      const bIn = $('[name="checkin"]', booking);
      const bOut = $('[name="checkout"]', booking);
      const todayISO = new Date().toISOString().split("T")[0];
      bIn.min = todayISO;
      bOut.min = todayISO;
      on(bIn, "change", () => {
        bOut.min = bIn.value || todayISO;
        if (bOut.value && bOut.value <= bIn.value) bOut.value = "";
      });
      on(booking, "submit", (e) => {
        e.preventDefault();
        if (!booking.checkValidity()) {
          booking.reportValidity();
          return;
        }
        const mIn = $("#m-in");
        const mOut = $("#m-out");
        if (mIn) mIn.value = bIn.value;
        if (mOut) {
          mOut.min = bIn.value;
          mOut.value = bOut.value;
        }
        const mGuests = $("#m-guests");
        if (mGuests) mGuests.value = $('[name="guests"]', booking).value;
        if (modalRoom) modalRoom.value = $('[name="room"]', booking).value;
        openModal();
        later(() => $("#m-name")?.focus(), 350);
      });
    }

    /* Enquiry forms → pre-filled WhatsApp message */
    const labels = { name: "Name", phone: "Phone", email: "Email", room: "Room / Purpose", checkin: "Check-in", checkout: "Check-out", guests: "Guests", message: "Message" };
    const today = new Date().toISOString().split("T")[0];
    $$("form[data-enquiry]").forEach((form) => {
      $$('input[type="date"]', form).forEach((d) => (d.min = today));
      /* Live-filter typed/pasted characters: name → letters only, phone → digits only */
      const sanitize = (input, badChars, msg, maxLen) => {
        if (!input) return;
        on(input, "input", () => {
          const v = input.value;
          let clean = v.replace(badChars, "");
          if (maxLen) clean = clean.slice(0, maxLen(clean));
          if (clean !== v) {
            const pos = Math.max(0, (input.selectionStart ?? clean.length) - (v.length - clean.length));
            input.value = clean;
            try {
              input.setSelectionRange(pos, pos);
            } catch {}
          }
          input.setCustomValidity("");
        });
        on(input, "invalid", () => input.setCustomValidity(input.validity.valueMissing ? "" : msg));
      };
      const nameEl = $('[name="name"]', form);
      const phoneEl = $('[name="phone"]', form);
      if (nameEl) {
        nameEl.pattern = "\\p{L}[\\p{L}\\p{M} .'\\-]*[\\p{L}\\p{M}.]";
        nameEl.minLength = 2;
        nameEl.maxLength = 60;
      }
      if (phoneEl) {
        phoneEl.inputMode = "numeric";
        /* 10 digits, or 91 + 10 digits (12), or +91 + 10 digits (13 chars) */
        phoneEl.pattern = "(\\+91|91)?[0-9]{10}";
        phoneEl.maxLength = 13;
      }
      const phoneMax = (v) => (v.startsWith("+") ? 13 : v.startsWith("91") ? 12 : 10);
      sanitize(nameEl, /[^\p{L}\p{M}\s.'-]/gu, "Please enter a valid name (letters only).");
      on(nameEl, "blur", () => (nameEl.value = nameEl.value.trim().replace(/\s+/g, " ")));
      sanitize(phoneEl, /[^0-9+]|(?!^)\+/g, "Please enter a valid 10-digit phone number (optionally with 91 / +91).", phoneMax);

      const ci = $('[name="checkin"]', form);
      const co = $('[name="checkout"]', form);
      on(ci, "change", () => {
        co.min = ci.value;
        if (co.value && co.value <= ci.value) co.value = "";
      });
      on(form, "submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const lines = [`Hello ${hotel.name}, I'd like to enquire:`];
        new FormData(form).forEach((v, k) => v && labels[k] && lines.push(`${labels[k]}: ${v}`));
        const st = $(".form-status", form);
        if (st) st.textContent = "Opening WhatsApp with your enquiry…";
        window.open(`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
