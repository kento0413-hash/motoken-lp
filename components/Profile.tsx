"use client";

import Image from "next/image";
import RevealUp from "./RevealUp";
import styles from "./Profile.module.css";

const tools = [
  "Runway",
  "Midjourney",
  "Sora",
  "PowerDirector",
  "Suno AI",
  "ChatGPT",
  "Claude",
  "Gemini",
  "KlingAI",
  "Obsidian",
];

export default function Profile() {
  return (
    <section className={styles.profile} id="profile" aria-label="プロフィール">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>Profile</RevealUp>
        <RevealUp>
          <h2 className={styles.sectionTitle}>
            About <em>MOTOKEN</em>
          </h2>
        </RevealUp>
        <div className={styles.profileGrid}>
          <RevealUp delay={0.1} className={styles.profileMain}>
            <div className={styles.profileAvatar}>
              <Image
                src="/profile-avatar.png"
                alt="MOTOKEN — TV Head キャラクター"
                width={800}
                height={800}
                className={styles.avatarImage}
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
            <div className={styles.profileBio}>
              <p>
                10年以上にわたりAI・デジタル領域の新規事業に従事し、現場起点で事業化を推進してきた実践者。
              </p>
              <p>
                2025年12月より「MOTOKEN」として本格始動。没入映像やMV制作といったAIアーティスト活動に加え、自身の経験値と世界中の論文やベストプラクティスを組み合わせたブログの執筆活動をnoteとXで開始。
              </p>
              <p>
                最近はマルチエージェントによるAIシステム開発に熱中。
              </p>
              <p>
                Walt Disney World での勤務経験、お笑い芸人としての活動——回り道に見えたすべてが、今の武器になっている。
                ストーリーテリングとグローバルな感性で、ビジネスとクリエイティブの両面から価値を創出する。
              </p>
            </div>
          </RevealUp>
          <RevealUp delay={0.2} className={styles.profileSide}>
            <div className={styles.profileInfoCard}>
              <h3 className={styles.profileInfoTitle}>Tools</h3>
              <ul className={styles.profileTools}>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
