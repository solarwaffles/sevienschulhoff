"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Research", "Experience", "Projects", "Skills"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(6,182,212,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.85rem",
          color: "var(--cyan)",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        sevien.dev
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
        className="desktop-nav"
      >
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "rgba(237,242,244,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--off-white)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                "rgba(237,242,244,0.6)")
            }
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:seschulhoff@gmail.com"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--cyan)",
            textDecoration: "none",
            border: "1px solid var(--cyan)",
            padding: "4px 14px",
            borderRadius: "4px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "var(--cyan-dim)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "transparent")
          }
        >
          Contact
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--off-white)",
          cursor: "pointer",
          fontSize: "1.4rem",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(10,15,30,0.97)",
            borderBottom: "1px solid rgba(6,182,212,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {[...links, "Contact"].map((l) => (
            <a
              key={l}
              href={l === "Contact" ? "mailto:seschulhoff@gmail.com" : `#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "1rem 2rem",
                color: "var(--off-white)",
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
