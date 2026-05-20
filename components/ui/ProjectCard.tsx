import type { ProjectCardProps } from "@/types";
import TechBadge from "@/components/ui/TechBadge";
import { GithubIcon, ExternalIcon } from "@/components/ui/icons";

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      style={{
        border: "1px solid var(--border-color)",
        borderRadius: "4px",
        padding: "20px",
        backgroundColor: "var(--bg-card)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <h4
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            textTransform: "lowercase",
            margin: 0,
          }}
        >
          {project.id} // {project.name}
        </h4>
        <span
          style={{
            fontSize: "0.65rem",
            fontFamily: "var(--font-display)",
            color: "var(--text-muted)",
            textTransform: "lowercase",
          }}
        >
          {project.category}
        </span>
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          marginTop: "8px",
          textTransform: "lowercase",
        }}
        className="muted-text"
      >
        {project.description}
      </p>
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {project.tags.map((tag) => (
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
        {project.links.map((link) => (
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
            {link.icon === "github" ? <GithubIcon /> : <ExternalIcon />}
            {link.label} &rarr;
          </a>
        ))}
      </div>
    </div>
  );
}
