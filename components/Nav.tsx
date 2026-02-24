"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  // Lock body scroll & focus trap when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap for mobile menu
      const menu = menuRef.current;
      const toggle = toggleRef.current;
      if (!menu || !toggle) return;

      const focusableEls = menu.querySelectorAll<HTMLElement>("a, button");
      const firstFocusable = focusableEls[0];
      const lastFocusable = focusableEls[focusableEls.length - 1];

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable || document.activeElement === toggle) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            toggle.focus();
          }
        }
      };

      firstFocusable?.focus();
      document.addEventListener("keydown", trapFocus);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", trapFocus);
      };
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
            ref={toggleRef}
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
            ref={menuRef}
            id="nav-menu"
            className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
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
