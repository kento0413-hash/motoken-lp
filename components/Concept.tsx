"use client";

import RevealUp from "./RevealUp";
import styles from "./Concept.module.css";

export default function Concept() {
  return (
    <section className={styles.concept} id="concept">
      <div className={styles.container}>
        <RevealUp className={styles.sectionLabel}>Concept</RevealUp>
        <div className={styles.conceptGrid}>
          <div className={styles.conceptText}>
            <RevealUp>
              <h2 className={styles.conceptTitle}>
                画面の向こうに、
                <br />
                <em>感情</em>はあるか。
              </h2>
            </RevealUp>
            <RevealUp delay={0.1}>
              <p className={styles.conceptDescription}>
                胴体は人間、頭はテレビ——あるいは粒子。
                <br />
                MOTOKENの映像に登場するオブジェクトは、
                <br />
                <strong>感情を持ったAIを具現化</strong>したもの。
              </p>
            </RevealUp>
            <RevealUp delay={0.15}>
              <p className={styles.conceptDescription}>
                しかし同時に、それは今の私たちの姿でもある。
                <br />
                対面で会う機会は減り、画面越しでしか
                <br />
                世界を判断しなくなった現代人。
              </p>
            </RevealUp>
            <RevealUp delay={0.2}>
              <p
                className={`${styles.conceptDescription} ${styles.conceptHighlight}`}
              >
                SNS社会において、人間は画面越しの世界しか
                <br />
                見えていない——その現象を、映像で具現化する。
              </p>
            </RevealUp>
          </div>
          <RevealUp delay={0.15} className={styles.conceptVisual}>
            <div className={styles.conceptCard}>
              <div className={styles.conceptCardInner}>
                <div className={styles.conceptIcon}>
                  <div className={styles.tvHead}>
                    <div className={styles.tvScreen}>
                      <div className={styles.tvStatic}></div>
                    </div>
                    <div className={styles.tvBody}></div>
                  </div>
                </div>
                <div className={styles.conceptCardText}>
                  <span className={styles.conceptCardLabel}>The Duality</span>
                  <p>
                    AIの感情 × 人間の風刺
                    <br />
                    二つの視点が交差する表現
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
