"use client";

import RevealUp from "./RevealUp";
import styles from "./Works.module.css";

const works = [
  {
    href: "https://www.youtube.com/@naturemotoken",
    tag: "MV",
    title: (
      <>
        FERROFLUID
        <br />
        Industrial Glitch MV
      </>
    ),
    desc: "Runway Gen-4 × PowerDirectorで制作した没入型ミュージックビデオ",
    link: "Watch on YouTube \u2192",
    bgClass: "workCardBg1" as const,
    large: true,
  },
  {
    href: "https://www.tiktok.com/@naturemotoken",
    tag: "Short Film",
    title: (
      <>
        Immersive
        <br />
        AI Videos
      </>
    ),
    desc: "TikTokで15,000+フォロワーを獲得した没入映像シリーズ",
    link: "View on TikTok \u2192",
    bgClass: "workCardBg2" as const,
    large: false,
  },
  {
    href: "https://www.instagram.com/naturemotoken",
    tag: "Visual Art",
    title: (
      <>
        Surreal
        <br />
        AI Portraits
      </>
    ),
    desc: "テレビヘッド・粒子体——AIの感情を視覚化したビジュアルアート",
    link: "View on Instagram \u2192",
    bgClass: "workCardBg3" as const,
    large: false,
  },
];

export default function Works() {
  return (
    <section className={styles.works} id="works" aria-label="作品">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>Works</RevealUp>
        <RevealUp>
          <h2 className={styles.sectionTitle}>
            Selected <em>Works</em>
          </h2>
        </RevealUp>
        <RevealUp delay={0.05}>
          <p className={styles.sectionSubtitle}>
            没入映像・MV・AIビジュアルアート。テクノロジーと感情が交差する作品群。
          </p>
        </RevealUp>
        <div className={styles.worksGrid}>
          {works.map((work, i) => (
            <RevealUp
              key={i}
              delay={0.1 + i * 0.1}
              className={`${styles.workCard} ${
                work.large ? styles.workCardLarge : ""
              }`}
            >
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.workCardLink}
                aria-label={`${work.tag}: ${work.desc}（新しいタブで開く）`}
              >
                <div
                  className={`${styles.workCardBg} ${styles[work.bgClass]}`}
                  aria-hidden="true"
                />
                <div className={styles.workCardContent}>
                  <span className={styles.workCardTag}>{work.tag}</span>
                  <h3 className={styles.workCardTitle}>{work.title}</h3>
                  <p className={styles.workCardDesc}>{work.desc}</p>
                  <span className={styles.workCardLinkText}>{work.link}</span>
                </div>
              </a>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
