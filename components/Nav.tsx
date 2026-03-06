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
          <path d="M15.905 4.004c.817-.013 1.64.002 2.462.02a.448.448 0 0 1 .451.45v2.28a.447.447 0 0 1-.452.448c-.842.013-1.684.02-2.526-.007a.928.928 0 0 1-.898-.932c-.016-.72-.008-1.44-.004-2.16a.112.112 0 0 1 .116-.1h.85zm-5.677 7.764c1.793 0 3.248 1.455 3.248 3.248a3.248 3.248 0 1 1-6.496 0 3.248 3.248 0 0 1 3.248-3.248zM22.358 9.14a1.622 1.622 0 0 1 1.622 1.622v11.056A2.182 2.182 0 0 1 21.798 24H2.182A2.182 2.182 0 0 1 0 21.818V10.762A1.622 1.622 0 0 1 1.622 9.14h3.076a1.622 1.622 0 0 0 1.49-.977l.663-1.526A1.622 1.622 0 0 1 8.34 5.66h5.692c.149 0 .266.121.266.27v2.026c0 1.66 1.263 3.072 2.921 3.155a35.1 35.1 0 0 0 2.98-.006c.104-.004.162.053.162.157v.454c0 .149-.121.27-.27.27h-2.826a1.622 1.622 0 0 0-1.622 1.622v.454c0 .149.121.27.27.27h4.063c.149 0 .27-.121.27-.27v-.454a1.622 1.622 0 0 1 1.14-1.548 1.614 1.614 0 0 1 .483-.074h.79zm-12.13 1.336a4.54 4.54 0 1 1 0 9.08 4.54 4.54 0 0 1 0-9.08z" />
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
