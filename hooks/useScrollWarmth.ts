"use client";

import { useEffect } from "react";

export function useScrollWarmth() {
  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      document.documentElement.style.setProperty(
        "--scroll-warmth",
        String(progress)
      );
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial value

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
