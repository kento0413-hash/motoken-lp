"use client";

import { useEffect, useRef } from "react";
import RevealUp from "./RevealUp";
import styles from "./Stats.module.css";

interface StatItem {
  target: number;
  unit: string;
  label: string;
  sublabel?: string;
}

const stats: StatItem[] = [
  { target: 12, unit: "+ Years", label: "AI事業推進" },
  {
    target: 15000,
    unit: "+",
    label: "Followers SNS",
    sublabel: "（AI Art開始2ヶ月）",
  },
  { target: 20, unit: " /年", label: "登壇（年平均）" },
  { target: 100, unit: "+", label: "AI Video Art" },
];

function animateCounter(el: HTMLElement, target: number) {
  const duration = 1800;
  const start = performance.now();

  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(new Set<number>());

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberEls = el.querySelectorAll("[data-target]");
            numberEls.forEach((numEl, idx) => {
              if (!animatedRef.current.has(idx)) {
                animatedRef.current.add(idx);
                const target = parseInt(
                  numEl.getAttribute("data-target") || "0",
                  10
                );
                animateCounter(numEl as HTMLElement, target);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} aria-label="実績">
      <div className={styles.container} ref={statsRef}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <RevealUp key={i} delay={i * 0.1} className={styles.statItem}>
              <span
                className={styles.statNumber}
                data-target={stat.target}
              >
                0
              </span>
              <span className={styles.statUnit}>{stat.unit}</span>
              <span className={styles.statLabel}>
                {stat.label}
                {stat.sublabel && <small>{stat.sublabel}</small>}
              </span>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
