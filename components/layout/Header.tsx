import { personalInfo } from "@/data/personal";
import {
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  DownloadIcon,
} from "@/components/ui/icons";

interface HeaderProps {
  localTime: string;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export default function Header({
  localTime,
  copiedEmail,
  onCopyEmail,
}: HeaderProps) {
  return (
    <header style={{ paddingBottom: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "16px",
          paddingRight: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: "1.0",
              fontWeight: "300",
              letterSpacing: "-0.03em",
              textTransform: "lowercase",
              margin: "0",
            }}
          >
            {personalInfo.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              marginTop: "8px",
              textTransform: "lowercase",
            }}
            className="muted-text"
          >
            {personalInfo.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "6px",
          }}
        >
          <div className="status-ticker">
            <span className="status-dot"></span>
            <span>ist // {localTime || "--:--:--"}</span>
          </div>
        </div>
      </div>

      {/* UPFRONT ACTIONS & SOCIAL DIRECTORIES */}
      <div className="upfront-bar">
        <div className="upfront-links">
          <a
            href="https://github.com/jini101"
            target="_blank"
            rel="noopener noreferrer"
            className="upfront-link"
          >
            <GithubIcon style={{ marginRight: "2px" }} />
            github &rarr;
          </a>
          <a
            href="https://www.linkedin.com/in/jinia-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="upfront-link"
          >
            <LinkedinIcon style={{ marginRight: "2px" }} />
            linkedin &rarr;
          </a>
          <button onClick={onCopyEmail} className="upfront-link">
            <CopyIcon style={{ marginRight: "2px" }} />
            {copiedEmail ? "copied!" : personalInfo.email}
          </button>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          <DownloadIcon style={{ marginRight: "2px" }} />
          Resume &rarr;
        </a>
      </div>
    </header>
  );
}
