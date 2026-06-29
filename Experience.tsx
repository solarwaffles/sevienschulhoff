"use client";
import { useEffect, useRef } from "react";

const jobs = [
  {
    period: "Spring 2025 – Present",
    role: "Full-Stack Engineer",
    org: "InventoryQuant",
    type: "Startup",
    desc: "Full-stack engineer at a startup transforming the insurance industry with AI. Created fine-tuning datasets for OpenAI models including GPT-4o.",
    tags: ["NextJS", "PostgreSQL", "Render", "Python", "GPT-4o"],
  },
  {
    period: "Summer – Fall 2024",
    role: "Research Intern",
    org: "Andreou Lab, Johns Hopkins",
    type: "Internship",
    desc: "Replicated results from 'The case for 4-bit precision: k-bit Inference Scaling Laws'. Fine-tuned quantized and non-quantized transformer models. Evaluated models with EleutherAI's LM Evaluation Harness.",
    tags: ["Python", "Jupyter", "HuggingFace", "Quantization", "LM Eval Harness"],
  },
  {
    period: "Winter 2023 – Spring 2024",
    role: "Contractor",
    org: "Learn Prompting",
    type: "Contract",
    desc: "Refined prompt engineering courses for 2 million users. Managed the Thinkific LMS platform. Collaborated with Microsoft and Vanguard employees on exclusive course access.",
    tags: ["Thinkific API", "HTML", "CSS", "Prompt Engineering"],
  },
  {
    period: "Summer 2022",
    role: "Spanish Teacher",
    org: "Friends School of Baltimore",
    type: "Teaching",
    desc: "Taught a Spanish language course for high school students.",
    tags: ["Spanish", "Teaching"],
  },
];

export default function Experience() {
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
      id="experience"
      ref={ref}
      style={{
        padding: "7rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div className="fade-in">
        <p className="section-label">// experience</p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            margin: "0 0 3rem",
            letterSpacing: "-0.02em",
          }}
        >
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          paddingLeft: "1.5rem",
          borderLeft: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        {jobs.map((job, i) => (
          <div
            key={i}
            className="fade-in"
            style={{
              position: "relative",
              marginBottom: i < jobs.length - 1 ? "3rem" : 0,
              paddingLeft: "1.5rem",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-2.05rem",
                top: "0.3rem",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: i === 0 ? "var(--cyan)" : "var(--navy)",
                border: "2px solid var(--cyan)",
              }}
            />

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--cyan)",
                  opacity: 0.8,
                }}
              >
                {job.period}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "rgba(237,242,244,0.25)",
                  border: "1px solid rgba(237,242,244,0.15)",
                  padding: "1px 6px",
                  borderRadius: "3px",
                }}
              >
                {job.type}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 600,
                margin: "0 0 0.2rem",
              }}
            >
              {job.role}
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(237,242,244,0.4)",
                margin: "0 0 0.75rem",
                fontWeight: 500,
              }}
            >
              {job.org}
            </p>
            <p
              style={{
                color: "rgba(237,242,244,0.65)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                margin: "0 0 0.75rem",
              }}
            >
              {job.desc}
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {job.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
