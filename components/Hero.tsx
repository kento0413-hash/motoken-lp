"use client";

import { useEffect, useRef, useCallback } from "react";
import RevealUp from "./RevealUp";
import styles from "./Hero.module.css";

export default function Hero() {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const shapes = shapesRef.current?.querySelectorAll(
        `.${styles.heroShape}`
      );
      if (!shapes) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 8;
        (
          shape as HTMLElement
        ).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top =
          targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <section className={styles.hero} id="hero" aria-label="ヒーロー">
      <div className={styles.heroBg} ref={shapesRef}>
        <div className={`${styles.heroShape} ${styles.heroShape1}`}></div>
        <div className={`${styles.heroShape} ${styles.heroShape2}`}></div>
        <div className={`${styles.heroShape} ${styles.heroShape3}`}></div>
      </div>
      <div className={styles.heroContent}>
        <RevealUp>
          <p className={styles.heroTag}>AI Artist / AI Business</p>
        </RevealUp>
        <h1 className={styles.heroTitle}>
          <RevealUp as="span" delay={0.1} className={styles.heroTitleLine}>
            Where AI Meets
          </RevealUp>
          <RevealUp
            as="span"
            delay={0.2}
            className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}
          >
            Human Emotion
          </RevealUp>
        </h1>
        <RevealUp delay={0.35}>
          <p className={styles.heroDescription}>
            冷たい画面の向こう側に、
            <br />
            <strong>熱狂のステージ</strong>を創る。
          </p>
        </RevealUp>
        <RevealUp delay={0.45}>
          <div className={styles.heroActions}>
            <a
              href="#works"
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "#works")}
            >
              View Works
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => handleClick(e, "#contact")}
            >
              Get in Touch
            </a>
          </div>
        </RevealUp>
      </div>
      <RevealUp delay={0.6} className={styles.heroScroll}>
        <span>Scroll</span>
        <div className={styles.heroScrollLine}></div>
      </RevealUp>
    </section>
  );
}
