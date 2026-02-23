"use client";

import RevealUp from "./RevealUp";
import styles from "./Profile.module.css";

const skills = [
  "AI Video / Animation",
  "AI Illustration",
  "AI Music",
  "AI Direction",
  "AI Production",
  "Virtual Humans",
  "AI Comics / Manga",
  "Business Strategy",
  "New Business Dev",
];

const tools = [
  "Runway",
  "Midjourney",
  "Sora",
  "CapCut",
  "Suno AI",
  "ChatGPT",
  "Claude",
  "Gemini",
];

const career = [
  { period: "2013 —", desc: "AI・デジタル新規事業（上場企業）" },
  { period: "—", desc: "Walt Disney World 勤務" },
  { period: "2025.12 —", desc: "AIアーティスト「MOTOKEN」始動" },
];

export default function Profile() {
  return (
    <section className={styles.profile} id="profile">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>Profile</RevealUp>
        <RevealUp>
          <h2 className={styles.sectionTitle}>
            About <em>MOTOKEN</em>
          </h2>
        </RevealUp>
        <div className={styles.profileGrid}>
          <RevealUp delay={0.1} className={styles.profileMain}>
            <div className={styles.profileBio}>
              <p>
                10年以上にわたりAI・デジタル領域の新規事業に従事し、現場起点で事業化を推進してきた実践者。
              </p>
              <p>
                2025年12月より「MOTOKEN」として没入映像やMVを手掛けるAIアーティストとして本格始動。
                AI事業を推進しながら、感情を持ったAIと画面越しの現代社会を映像で描き出す。
              </p>
              <p>
                Walt Disney World
                での勤務経験、お笑い芸人としての活動を経て、
                ストーリーテリングとグローバルな感性を武器に、ビジネスとクリエイティブの両面から価値を創出する。
              </p>
            </div>
            <div className={styles.profileSkills}>
              <h3 className={styles.profileSkillsTitle}>Expertise</h3>
              <div className={styles.skillTags}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
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
            <div className={styles.profileInfoCard}>
              <h3 className={styles.profileInfoTitle}>Background</h3>
              <ul className={styles.profileCareer}>
                {career.map((item, i) => (
                  <li key={i}>
                    <span className={styles.careerPeriod}>{item.period}</span>
                    <span className={styles.careerDesc}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
