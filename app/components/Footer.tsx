"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "rgba(237,242,244,0.25)",
        }}
      >
        © 2025 Sevien Schulhoff
      </span>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "Email", href: "mailto:seschulhoff@gmail.com" },
          { label: "LinkedIn", href: "https://linkedin.com/in/sevien-schulhoff" },
          { label: "GitHub", href: "https://github.com/sevien-schulhoff" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "rgba(237,242,244,0.35)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--cyan)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(237,242,244,0.35)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
