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
                冷たい画面の向こう側に、
                <br />
                <em>熱狂のステージ</em>を。
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
                冷たい画面の向こう側に、熱狂のステージを創る——それがMOTOKENの使命。
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
                      <div className={styles.tvScanline}></div>
                      <div className={styles.tvGlowDot}></div>
                    </div>
                    <div className={styles.tvAntenna} aria-hidden="true"></div>
                    <div className={styles.tvBody}></div>
                  </div>
                  <span className={styles.particle} aria-hidden="true"></span>
                  <span className={styles.particle} aria-hidden="true"></span>
                  <span className={styles.particle} aria-hidden="true"></span>
                  <span className={styles.particle} aria-hidden="true"></span>
                  <span className={styles.particle} aria-hidden="true"></span>
                </div>
                <div className={styles.conceptCardText}>
                  <span className={styles.conceptCardLabel}>The Mission</span>
                  <p>
                    AIの冷たさと人間の熱狂が
                    <br />
                    交差する表現
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
