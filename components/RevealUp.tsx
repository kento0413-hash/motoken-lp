"use client";

import { useEffect, useRef, createElement } from "react";

interface RevealUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: string;
  "aria-label"?: string;
}

export default function RevealUp({
  children,
  delay = 0,
  className = "",
  as = "div",
  "aria-label": ariaLabel,
}: RevealUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealUpVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `revealUp ${className}`,
      style: { "--delay": `${delay}s` } as React.CSSProperties,
      ...(ariaLabel ? { "aria-label": ariaLabel } : {}),
    },
    children
  );
}
