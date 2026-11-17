"use client";
import { useRef, useState } from "react";

// The hero film plus a small pause/play button. Muted autoplay loop; the button lets visitors stop it
// (accessibility: moving content that lasts more than 5 seconds needs a pause control).
export default function HeroVideo() {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <>
      <video
        ref={ref}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        <source src="/videos/hero-desktop.webm" type="video/webm" media="(min-aspect-ratio: 1/1)" />
        <source src="/videos/hero-desktop.mp4" type="video/mp4" media="(min-aspect-ratio: 1/1)" />
        <source src="/videos/hero-mobile.webm" type="video/webm" />
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="hero__toggle"
        onClick={toggle}
        aria-label={paused ? "Play background video" : "Pause background video"}
      >
        {paused ? (
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z" /></svg>
        ) : (
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 2h3v12h-3zM9.5 2h3v12h-3z" /></svg>
        )}
      </button>
    </>
  );
}
