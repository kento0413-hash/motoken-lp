"use client";

import RevealUp from "./RevealUp";
import styles from "./Works.module.css";

const works = [
  {
    href: "https://youtu.be/qmeIvIGVXik",
    tag: "MV \u2014 AI Cyberpunk Anime",
    title: (
      <>
        I Don&apos;t Need a Heart
        <br />
        AI Cyberpunk Anime MV
      </>
    ),
    desc: "AIが人間と同じ\u201C心\u201Dを持った世界を描いた物語であり、同時に、画面越しに生きる私たち自身の姿でもある。",
    link: "Watch on YouTube \u2192",
    bgClass: "workCardBg1" as const,
    large: true,
  },
  {
    href: "https://youtu.be/Crf-Vkduikk",
    tag: "MV \u2014 AI Seasons",
    title: (
      <>
        SHIKI:
        <br />
        Ephemeral Glitch
      </>
    ),
    desc: "A visual exploration of seasons that no longer cycle, but only glitch.",
    link: "Watch on YouTube \u2192",
    bgClass: "workCardBg2" as const,
    large: false,
  },
  {
    href: "https://www.instagram.com/motoken_japanese_nature/",
    tag: "Short Film",
    title: (
      <>
        15秒のShort Filmは
        <br />
        SNSで毎日新作投稿
      </>
    ),
    desc: "15\u79d2\u306eTV Head \u00d7 \u4e16\u754c\u306e\u81ea\u7136 \u00d7 \u591a\u69d8\u306a\u697d\u5668\u6f14\u594f",
    link: "View on Instagram \u2192",
    bgClass: "workCardBg3" as const,
    large: false,
    video: "/work-shortfilm.mp4",
  },
  {
    href: "https://note.com/naturemotoken",
    tag: "Frontline Insights",
    title: (
      <>
        The Edge of
        <br />
        Technology
      </>
    ),
    desc: "最前線で戦う現場のリアルな実践知と、世界中の「最先端論文とベストプラクティス」を掛け合わせる。経験則や単なるトレンド解説では終わらない、確かな科学的裏付けと洞察を盛り込んだ思考録。",
    link: "Read on note.com \u2192",
    bgClass: "workCardBg4" as const,
    large: true,
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
            映像・アート・自律型AI——テクノロジーと感情が交差する作品群。
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
                {"video" in work && work.video ? (
                  <video
                    className={`${styles.workCardBg} ${styles.workCardVideo}`}
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                ) : (
                  <div
                    className={`${styles.workCardBg} ${styles[work.bgClass]}`}
                    aria-hidden="true"
                  />
                )}
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
