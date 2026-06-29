"use client";
import { useEffect, useState } from "react";

const lines = [
  { prefix: "$ ", text: "whoami" },
  { prefix: "> ", text: "Sevien Schulhoff" },
  { prefix: "$ ", text: "cat interests.txt" },
  { prefix: "> ", text: "LLM Research · Full-Stack Engineering · AI Systems" },
  { prefix: "$ ", text: "echo $STATUS" },
  { prefix: "> ", text: "CS @ UMD | GPA 3.85 | #1 Prompt Engineering Paper (HuggingFace)" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), i * 500 + 400));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        paddingTop: "80px",
      }}
    >
      {/* Name */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            color: "var(--cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.75rem",
          }}
        >
          HELLO, WORLD
        </p>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Sevien{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--blue), var(--cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Schulhoff
          </span>
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(237,242,244,0.55)",
            marginTop: "0.75rem",
            fontWeight: 400,
          }}
        >
          CS Student · LLM Researcher · Full-Stack Engineer
        </p>
      </div>

      {/* Terminal */}
      <div
        style={{
          background: "rgba(17,24,39,0.7)",
          border: "1px solid rgba(6,182,212,0.2)",
          borderRadius: "8px",
          overflow: "hidden",
          maxWidth: "620px",
        }}
      >
        {/* Terminal chrome */}
        <div
          style={{
            background: "rgba(6,182,212,0.06)",
            padding: "10px 14px",
            display: "flex",
            gap: "6px",
            borderBottom: "1px solid rgba(6,182,212,0.1)",
          }}
        >
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <div
              key={c}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: c,
                opacity: 0.7,
              }}
            />
          ))}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "rgba(237,242,244,0.3)",
              marginLeft: "auto",
            }}
          >
            bash — sevien@portfolio
          </span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: "1.2rem 1.4rem", minHeight: "160px" }}>
          {lines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color:
                  line.prefix === "$ "
                    ? "rgba(237,242,244,0.45)"
                    : "var(--off-white)",
              }}
            >
              <span style={{ color: "var(--cyan)" }}>{line.prefix}</span>
              {line.text}
            </div>
          ))}
          {visibleLines < lines.length && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                color: "var(--cyan)",
              }}
              className="blink"
            >
              ▋
            </span>
          )}
        </div>
      </div>

      {/* CTA row */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#research"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "var(--navy)",
            background: "var(--cyan)",
            padding: "10px 22px",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          View Research
        </a>
        <a
          href="https://www.linkedin.com/in/sevienschulhoff/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "var(--off-white)",
            border: "1px solid rgba(237,242,244,0.2)",
            padding: "10px 22px",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.borderColor = "rgba(237,242,244,0.5)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.borderColor = "rgba(237,242,244,0.2)")
          }
        >
          LinkedIn
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "rgba(237,242,244,0.3)",
          fontSize: "0.75rem",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(237,242,244,0.2)",
          }}
        />
      </div>
    </section>
  );
}
