"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import RevealUp from "./RevealUp";
import styles from "./Hero.module.css";

export default function Hero() {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let rafId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const shapes = shapesRef.current?.querySelectorAll(
          `.${styles.heroShape}`
        );
        if (!shapes) { rafId = 0; return; }

        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        shapes.forEach((shape, i) => {
          const speed = (i + 1) * 8;
          (
            shape as HTMLElement
          ).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top =
          targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <section className={styles.hero} id="hero" aria-label="ヒーロー">
      <div className={styles.heroBgImage} aria-hidden="true">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImg}
        />
        <div className={styles.heroBgOverlay} />
      </div>
      <div className={styles.heroBg} ref={shapesRef} aria-hidden="true">
        <div className={`${styles.heroShape} ${styles.heroShape1}`}></div>
        <div className={`${styles.heroShape} ${styles.heroShape2}`}></div>
        <div className={`${styles.heroShape} ${styles.heroShape3}`}></div>
      </div>
      <div className={styles.heroContent}>
        <RevealUp>
          <p className={styles.heroTag}>AI Artist / Agentic AI / AI Business</p>
        </RevealUp>
        <h1 className={styles.heroTitle}>
          <RevealUp as="span" delay={0.1} className={styles.heroTitleLine}>
            AI × 感性の共鳴——
          </RevealUp>
          <RevealUp
            as="span"
            delay={0.2}
            className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`}
          >
            テクノロジーに体温を宿し、
            <br />
            誰もが主役になる<em>&ldquo;最高のショー&rdquo;</em>を。
          </RevealUp>
        </h1>
        <RevealUp delay={0.3}>
          <p className={styles.heroSublead}>
            元お笑い芸人。Disney Worldのキャスト。上場企業でAI事業12年。
            <br />
            ——この男が今、AIで&ldquo;熱狂&rdquo;を創る理由。
          </p>
        </RevealUp>
        <RevealUp delay={0.45}>
          <div className={styles.heroActions}>
            <a
              href="#works"
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "#works")}
            >
              作品を体験する
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                <path d="M10 4v12M4 10l6 6 6-6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => handleClick(e, "#contact")}
            >
              一緒につくる
            </a>
          </div>
        </RevealUp>
      </div>
      <RevealUp delay={0.6} as="div" className={styles.heroScroll}>
        <a
          href="#concept"
          onClick={(e) => handleClick(e, "#concept")}
          className={styles.heroScrollLink}
          aria-label="コンセプトセクションへスクロール"
        >
          <span>Scroll</span>
          <div className={styles.heroScrollLine}></div>
        </a>
      </RevealUp>
    </section>
  );
}
