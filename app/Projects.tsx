"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    name: "Metroidvania Video Game",
    period: "Fall 2023",
    desc: "Led development of a side-scroller 2D platformer implemented in Unity. Designed game mechanics, levels, and character interactions in a collaborative team environment.",
    tags: ["C#", "Unity", "Game Design"],
    icon: "🎮",
  },
  {
    name: "Math Tutoring Program",
    period: "Fall 2021 – Summer 2023",
    desc: "Founded and led a math tutoring program for underserved students in partnership with the Baltimore Montessori Public Charter School, providing academic support over two years.",
    tags: ["Education", "Community", "Leadership"],
    icon: "📐",
  },
  {
    name: "Chemical Knowledge Graph",
    period: "Summer 2022",
    desc: "Co-authored a knowledge graph of common small molecules with their IUPAC/SMILES/SMARTS representations, supporting diverse chemical communities and research.",
    tags: ["Python", "TinyDB", "Plotly", "Chemistry"],
    icon: "⚗️",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        background: "rgba(17,24,39,0.4)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="fade-in">
          <p className="section-label">// projects</p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              margin: "0 0 3rem",
              letterSpacing: "-0.02em",
            }}
          >
            Selected Projects
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="fade-in"
              style={{
                background: "rgba(10,15,30,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(6,182,212,0.3)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{p.icon}</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "rgba(237,242,244,0.35)",
                  marginBottom: "0.4rem",
                }}
              >
                {p.period}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  color: "rgba(237,242,244,0.55)",
                  fontSize: "0.825rem",
                  lineHeight: 1.65,
                  margin: "0 0 1.25rem",
                  flex: 1,
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: "0.65rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 900px) {
          #projects > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
