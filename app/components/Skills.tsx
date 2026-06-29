"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Frequent Languages",
    skills: ["JavaScript", "TypeScript", "OCaml", "Python", "C#", "Java", "C", "R"],
    color: "var(--cyan)",
  },
  {
    label: "Frequent Tools",
    skills: ["Playwright", "PyTorch", "VS Code", "Jupyter", "GitHub Desktop", "Git", "Vim", "Photoshop", "Unity", "R Studio", "Thinkific", "Eclipse"],
    color: "var(--blue)",
  },
  {
    label: "Infrequent / Learning",
    skills: ["Assembly", "TensorFlow", "Bash", "C++", "Visual Studio"],
    color: "#818CF8",
  },
  {
    label: "Natural Languages",
    skills: ["English (Native)", "Spanish (Fluent)"],
    color: "#34D399",
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div className="fade-in">
        <p className="section-label">// skills</p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "0 0 3rem",
            letterSpacing: "-0.02em",
          }}
        >
          Technical Toolkit
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {skillGroups.map((g, i) => (
          <div key={i} className="fade-in">
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: g.color,
                letterSpacing: "0.12em",
                marginBottom: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              {g.label}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {g.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    padding: "5px 12px",
                    border: `1px solid ${g.color}30`,
                    background: `${g.color}0d`,
                    color: "var(--off-white)",
                    borderRadius: "4px",
                    transition: "border-color 0.2s, background 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = g.color + "80";
                    el.style.background = g.color + "20";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = g.color + "30";
                    el.style.background = g.color + "0d";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
