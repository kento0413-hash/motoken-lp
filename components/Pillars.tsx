"use client";

import RevealUp from "./RevealUp";
import styles from "./Pillars.module.css";

const pillars = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 6L26 18L24 14L22 18L24 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 14V38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 22L24 14L30 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 30L24 18L34 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 38L24 24L38 38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "The Execution",
    subtitle: "300+のAI案件を推進した実行力",
    colorClass: "pillarAccent",
    bullets: [
      "10年以上にわたるAI特化の新規事業立ち上げ",
      "「まずつくる」── Small Win × Quick Win",
      "1人の100歩より、100人の1歩を動かす",
    ],
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M24 18V42"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 42L24 28L36 42"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24L24 18L32 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "The Expression",
    subtitle: "観る人の心を掴む映像体験",
    colorClass: "pillarAmber",
    bullets: [
      "最先端AI技術を、誰もが夢を見られるステージへ変換",
      "クリエイティブとビジネス成果を両立する表現設計",
      "AI Art開始2ヶ月で15,000+フォロワーの没入映像",
    ],
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 28C8 28 14 18 24 18C34 18 40 28 40 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 24C12 24 16 16 24 16C32 16 36 24 36 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 32L24 28L28 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 28V40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "The Evangelist",
    subtitle: "好奇心と共創で、ビジョンを広める",
    colorClass: "pillarSage",
    bullets: [
      "元お笑い芸人 → 人を惹きつけるストーリーテリング",
      "元Walt Disney Worldキャスト → グローバルで多様な視座",
      "あなたのエバンジェリストとして、ビジョンを世界に届ける",
    ],
  },
];

export default function Pillars() {
  return (
    <section className={styles.pillars} id="about" aria-label="MOTOKENについて">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>About</RevealUp>
        <RevealUp>
          <h2 className={styles.sectionTitle}>
            3つの火で、<em>舞台を灯す。</em>
          </h2>
        </RevealUp>
        <RevealUp delay={0.05}>
          <p className={styles.sectionSubtitle}>
            実行力・表現力・伝播力——この3つが交差するとき、プロジェクトに火が灯る。
          </p>
        </RevealUp>
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <RevealUp
              key={pillar.number}
              delay={0.1 + i * 0.1}
              className={`${styles.pillarCard} ${styles[pillar.colorClass]}`}
            >
              <div className={styles.pillarNumber}>{pillar.number}</div>
              <div className={styles.pillarIconWrap} aria-hidden="true">{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>
              <ul className={styles.pillarBullets}>
                {pillar.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}
