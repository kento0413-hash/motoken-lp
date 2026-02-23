"use client";

import RevealUp from "./RevealUp";
import styles from "./Pillars.module.css";

const pillars = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 24C16 19.6 19.6 16 24 16M32 24C32 28.4 28.4 32 24 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    title: "AI",
    subtitle: "12年間のAI事業推進",
    text: "上場企業で10年以上、AI・デジタル領域の新規事業に従事。現場起点で事業化を推進してきた実践者。",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 8L28 18L38 20L30 28L32 38L24 33L16 38L18 28L10 20L20 18L24 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Creation",
    subtitle: "没入映像 / MV制作",
    text: "2025年12月よりAIアーティストとして本格始動。没入映像やMVを手掛け、感情とテクノロジーの境界を描く。",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10"
          y="14"
          width="28"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M10 20H38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 20V34" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Business",
    subtitle: "戦略から実行まで",
    text: "クリエイティブとビジネス成果を両立。戦略設計から制作まで一気通貫で支援するプロフェッショナル。",
  },
];

export default function Pillars() {
  return (
    <section className={styles.pillars} id="about">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>About</RevealUp>
        <RevealUp>
          <h2 className={styles.sectionTitle}>
            3つの領域を、<em>ひとりで。</em>
          </h2>
        </RevealUp>
        <RevealUp delay={0.05}>
          <p className={styles.sectionSubtitle}>
            AI・創作・事業を同時に持つからこそ生まれる、唯一無二の視点。
          </p>
        </RevealUp>
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <RevealUp
              key={pillar.number}
              delay={0.1 + i * 0.1}
              className={styles.pillarCard}
            >
              <div className={styles.pillarNumber}>{pillar.number}</div>
              <div className={styles.pillarIconWrap}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>
              <p className={styles.pillarText}>{pillar.text}</p>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
