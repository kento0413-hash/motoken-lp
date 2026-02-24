"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);

        const sections = document.querySelectorAll("section[id]");
        let current = "";
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id") || "";
          }
        });
        setActiveSection(current);
        ticking = false;
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "#") return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top =
          targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    []
  );

  const links = [
    { href: "#concept", label: "Concept" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#profile", label: "Profile" },
    { href: "#contact", label: "Contact", isCta: true },
  ];

  return (
    <>
      <div
        className={`${styles.navOverlay} ${menuOpen ? styles.visible : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <a
            href="#"
            className={styles.navLogo}
            onClick={(e) => handleNavClick(e, "#")}
          >
            MOTOKEN
          </a>
          <button
            className={`${styles.navToggle} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
          </button>
          <ul
            id="nav-menu"
            role="menubar"
            className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          >
            {links.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className={`${link.isCta ? styles.navCta : ""} ${
                    activeSection === link.href.slice(1) ? styles.activeLink : ""
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
