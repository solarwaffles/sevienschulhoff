"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3.85", label: "GPA" },
    { value: "#1", label: "Paper of Year\n(Latent Space)" },
    { value: "30+", label: "Co-authors\n(OpenAI, Stanford, UMD)" },
    { value: "2M+", label: "Course users\n(Learn Prompting)" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div className="fade-in">
        <p className="section-label">// about</p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "0 0 1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Building at the frontier of AI
        </h2>
      </div>

      <div
        className="fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "3.5rem",
        }}
      >
        <p
          style={{
            color: "rgba(237,242,244,0.7)",
            lineHeight: 1.8,
            fontSize: "0.95rem",
            margin: 0,
          }}
        >
          I'm a Computer Science student at the University of Maryland (Honors
          Global Challenges & Solutions), focused on Generative AI research and
          full-stack engineering. My work spans from benchmarking state-of-the-art
          prompting techniques to fine-tuning quantized transformer models.
        </p>
        <p
          style={{
            color: "rgba(237,242,244,0.7)",
            lineHeight: 1.8,
            fontSize: "0.95rem",
            margin: 0,
          }}
        >
          I co-authored one of the most comprehensive systematic reviews of Prompt
          Engineering—earning the #1 paper of the year on Latent Space and #1 paper
          of the day on HuggingFace. Outside of AI, I build software, teach, and
          bridge language gaps as a Spanish interpreter.
        </p>
      </div>

      {/* Stats row */}
      <div
        className="fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(6,182,212,0.15)",
          border: "1px solid rgba(6,182,212,0.15)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.value}
            style={{
              background: "var(--navy)",
              padding: "1.5rem 1.2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--cyan)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "rgba(237,242,244,0.4)",
                letterSpacing: "0.05em",
                whiteSpace: "pre-line",
                lineHeight: 1.4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #about > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #about > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
