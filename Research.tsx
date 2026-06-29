"use client";
import { useEffect, useRef } from "react";

const research = [
  {
    period: "Fall 2023",
    role: "Generative AI (LLM) Researcher",
    org: "University of Maryland",
    highlights: [
      "Assembled a systematic literature review of Prompt Engineering with 30+ authors from OpenAI, UMD, Stanford, and Columbia",
      "Led a 3-person subteam compiling a comprehensive threat landscape overview of Generative AI",
      "Benchmarked state-of-the-art prompting techniques on LLMs including GPT-4",
    ],
    badges: ["#1 Paper of the Year — Latent Space", "#1 Paper of the Day — HuggingFace", "Featured in multiple podcasts"],
    accent: "var(--cyan)",
  },
  {
    period: "Summer 2023",
    role: "CHARMM General Force Field Researcher",
    org: "UMD Baltimore · Mackrell Lab",
    highlights: [
      "Expanded the CHARMM General Force Field to forever chemicals (PFAS)",
      "Optimized Perfluorobutanoic Acid for protein simulation",
    ],
    badges: ["PFAS Research", "Computational Chemistry"],
    accent: "var(--blue)",
  },
  {
    period: "Summer 2022",
    role: "Protein Simulation Intern",
    org: "UMD Baltimore · Shen Lab & Mackrell Lab",
    highlights: [
      "High-throughput performance testing of small molecules through the CHARMM General Force Field using Python, TinyDB, and Plotly",
      "Co-authored 'A Chemical Knowledge Graph of Common Small Molecules and their IUPAC/SMILES/SMARTS'",
    ],
    badges: ["Co-authored paper", "Python", "Plotly"],
    accent: "#818CF8",
  },
];

export default function Research() {
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
      id="research"
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
          <p className="section-label">// research</p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              margin: "0 0 3rem",
              letterSpacing: "-0.02em",
            }}
          >
            Academic Work
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {research.map((r, i) => (
            <div
              key={i}
              className="fade-in"
              style={{
                background: "rgba(10,15,30,0.6)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: `3px solid ${r.accent}`,
                borderRadius: "8px",
                padding: "1.8rem 2rem",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "1.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: r.accent,
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {r.period}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "rgba(237,242,244,0.35)",
                    lineHeight: 1.5,
                  }}
                >
                  {r.org}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    margin: "0 0 1rem",
                    color: "var(--off-white)",
                  }}
                >
                  {r.role}
                </h3>
                <ul style={{ margin: "0 0 1rem", padding: "0 0 0 1.1rem" }}>
                  {r.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        color: "rgba(237,242,244,0.65)",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {r.badges.map((b) => (
                    <span key={b} className="tag">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #research .fade-in > div { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}
