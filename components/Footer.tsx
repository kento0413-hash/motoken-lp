import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>MOTOKEN</span>
            <span className={styles.footerTagline}>
              AI Artist / AI Business
            </span>
          </div>
          <p className={styles.footerCopy}>
            &copy; 2025 MOTOKEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
