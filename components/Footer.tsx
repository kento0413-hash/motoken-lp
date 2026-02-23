import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>MOTOKEN</span>
            <span className={styles.footerTagline}>
              冷たい画面の向こうに、熱狂を。
            </span>
          </div>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} MOTOKEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
