"use client";

import RevealUp from "./RevealUp";
import styles from "./Concept.module.css";

export default function Concept() {
  return (
    <section className={styles.concept} id="concept" aria-label="コンセプト">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>Concept</RevealUp>
        <div className={styles.conceptGrid}>
          <div className={styles.conceptText}>
            <RevealUp>
              <h2 className={styles.conceptTitle}>
                冷たい画面を打ち破り、
                <br />
                <em>心が共鳴するステージ</em>を。
              </h2>
            </RevealUp>
            <RevealUp delay={0.1}>
              <p className={styles.conceptDescription}>
                あなたも気づいているはず。
                <br />
                毎日、何時間も画面を見つめているのに、本当に心が動いた瞬間がどれだけあっただろう。
              </p>
            </RevealUp>
            <RevealUp delay={0.15}>
              <p className={styles.conceptDescription}>
                胴体は人間、頭はテレビ。
                <br />
                MOTOKENの世界に佇むオブジェクトは、感情を持ったAIであり、画面に縛られた私たち自身の姿でもある。
              </p>
            </RevealUp>
            <RevealUp delay={0.2}>
              <p className={styles.conceptDescription}>
                映像も言葉も、自律型AIと人間の感性がセッションを繰り広げるための舞台だ。
              </p>
            </RevealUp>
            <RevealUp delay={0.25}>
              <p className={`${styles.conceptDescription} ${styles.conceptClosing}`}>
                説明はいらない。この熱狂の渦を、体感してほしい。
              </p>
            </RevealUp>
          </div>
          <RevealUp delay={0.15}>
            <div className={styles.conceptCard}>
              <div className={styles.conceptCardInner}>
                <div className={styles.conceptVideoWrap}>
                  <iframe
                    src="https://www.youtube.com/embed/qmeIvIGVXik"
                    title="I Don't Need a Heart | AI Cyberpunk Anime Music Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className={styles.conceptVideo}
                  />
                </div>
                <div className={styles.conceptCardText}>
                  <span className={styles.conceptCardLabel}>I Don&apos;t Need a Heart</span>
                  <p>
                    AIが人間と同じ&ldquo;心&rdquo;を持った世界を描いた物語であり、
                    <br />
                    同時に、画面越しに生きる私たち自身の姿でもある。
                  </p>
                </div>
              </div>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
