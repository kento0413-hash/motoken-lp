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
    subtitle: "300+のAI案件を動かした、泥臭い推進力",
    colorClass: "pillarAccent",
    bullets: [
      "裏方に回り、あなたを勝たせる——上場企業での10年で培った圧倒的な事業推進力を、あなたのプロジェクトに",
      "難解なテクノロジーを「熱狂のストーリー」へ翻訳する——あなたのビジョンを最前線で代弁し、ステークホルダーを巻き込むエバンジェリスト代行",
      "最速で生み出す、最初の\u201C熱量\u201D——立ち止まらないSmall Win × Quick Winで、プロジェクトに熱狂の火を点け続ける",
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
    subtitle: "テクノロジーを、誰もが夢を見るステージへ",
    colorClass: "pillarAmber",
    bullets: [
      "AI × 感性の共鳴——最先端技術を無機質なまま終わらせず、心を掴む体験へと変換",
      "映像・記事・音楽の越境——ひとつのビジョンを、最も突き刺さる形であらゆる場所へ届ける",
      "止まらない没入体験——一度触れたら抜け出せない。無機質なAIに命を吹き込み、予定調和を壊す圧倒的な表現力",
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
    subtitle: "周囲を巻き込み、ビジョンを拡張する",
    colorClass: "pillarSage",
    bullets: [
      "元お笑い芸人 × AI事業責任者——舞台で鍛え上げた、人を惹きつけるストーリーテリングとプレゼンテーション",
      "元Disney Worldキャスト——世界中の多様な視座を掛け合わせ、グローバルな共感を生み出すコミュニケーション",
      "現場の実践知 × 科学的アプローチ——泥臭い経験値に、世界中の研究論文やベストプラクティスを掛け合わせる。経験則だけで終わらせない、確固たる「再現性」を持った発信",
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
            あなたを主役にする、<em>3つの炎。</em>
          </h2>
        </RevealUp>
        <RevealUp delay={0.05}>
          <p className={styles.sectionSubtitle}>
            泥臭い実行力、心を震わせる表現力、周囲を巻き込む伝播力。
            <br />
            この3つが交差する時、あなたのプロジェクトは「最高のショー」として幕を開ける。
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
