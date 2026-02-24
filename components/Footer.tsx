import styles from "./Footer.module.css";

const footerLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>MOTOKEN</span>
              <span className={styles.footerTagline}>
                冷たい画面の向こうに、熱狂を。
              </span>
            </div>
            <nav className={styles.footerNav} aria-label="フッターナビゲーション">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} MOTOKEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
