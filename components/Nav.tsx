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
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);

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

  const socialLinks = [
    {
      href: "https://x.com/naturemotoken",
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/motoken_japanese_nature/",
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@naturemotoken",
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      href: "https://www.tiktok.com/@naturemotoken",
      label: "TikTok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
        </svg>
      ),
    },
    {
      href: "https://note.com/naturemotoken",
      label: "note",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M22.904 6.748c-.292-1.001-.932-1.823-1.792-2.322C19.932 3.698 17.4 3 12 3S4.068 3.698 2.888 4.426c-.86.5-1.5 1.321-1.792 2.322C.804 7.822.5 9.376.5 12s.304 4.178.596 5.252c.292 1.001.932 1.823 1.792 2.322C4.068 20.302 6.6 21 12 21s7.932-.698 9.112-1.426c.86-.5 1.5-1.321 1.792-2.322.292-1.074.596-2.628.596-5.252s-.304-4.178-.596-5.252zM8.5 15.5v-7l7 3.5-7 3.5z" />
        </svg>
      ),
    },
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
          <div className={styles.navSocial}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navSocialLink}
                aria-label={`${link.label}（新しいタブで開く）`}
              >
                {link.icon}
              </a>
            ))}
          </div>
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
