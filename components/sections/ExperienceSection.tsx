"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import TechBadge from "@/components/ui/TechBadge";
import { ExternalIcon, GithubIcon, CertificateIcon } from "@/components/ui/icons";

export default function ExperienceSection() {
  const [activeJob, setActiveJob] = useState(0);

  const linkIconMap = {
    external: <ExternalIcon />,
    github: <GithubIcon />,
    certificate: <CertificateIcon />,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Role Tab Stack */}
      <div
        style={{
          display: "flex",
          border: "1px solid var(--border-color)",
          borderRadius: "4px",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            onClick={() => setActiveJob(idx)}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "8px",
              fontFamily: "var(--font-display)",
              fontWeight: "500",
              fontSize: "0.8rem",
              textTransform: "lowercase",
              backgroundColor:
                activeJob === idx ? "var(--text-color)" : "var(--bg-card)",
              color:
                activeJob === idx ? "var(--bg-color)" : "var(--text-color)",
              borderRight:
                idx < experiences.length - 1
                  ? "1px solid var(--border-color)"
                  : "none",
              transition: "all 0.2s",
            }}
          >
            {exp.tabLabel}
          </div>
        ))}
      </div>

      {/* Nested Details Drawer */}
      {experiences.map(
        (exp, idx) =>
          activeJob === idx && (
            <div
              key={idx}
              style={{
                animation:
                  "contentFadeIn 0.3s var(--transition-bezier) forwards",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    textTransform: "lowercase",
                  }}
                >
                  {exp.title}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                  textTransform: "lowercase",
                }}
              >
                {exp.company}
              </p>

              <div
                className="tech-grid"
                style={{
                  marginTop: "12px",
                  borderLeftColor: "var(--border-color)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    textTransform: "lowercase",
                  }}
                  className="muted-text"
                >
                  {exp.description}
                </p>
                <ul
                  style={{
                    paddingLeft: "16px",
                    fontSize: "0.85rem",
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    textTransform: "lowercase",
                  }}
                >
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {exp.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "16px",
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "14px",
                  }}
                >
                  {exp.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8rem",
                        textDecoration: "none",
                        textTransform: "lowercase",
                        fontWeight: "500",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "var(--text-color)",
                      }}
                    >
                      {linkIconMap[link.icon]}
                      {link.label} &rarr;
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
