import { personalInfo } from "@/data/personal";
import { navItems } from "@/data/navigation";
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
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function Header({
  localTime,
  copiedEmail,
  onCopyEmail,
  activeSection,
  onNavigate,
}: HeaderProps) {
  return (
    <header style={{ paddingBottom: "16px" }}>
      <div className="header-top-row">
        <div>
          <h1 className="header-name">
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
            href="https://github.com/jinia101"
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

      {/* ── MOBILE-ONLY SECTION INDEX ── */}
      <nav className="header-section-index" aria-label="Section index">
        <span className="header-section-index-label">// index</span>
        <ol className="header-section-index-list">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                className={`header-section-index-item ${activeSection === item.index ? "active" : ""}`}
                onClick={() => onNavigate(item.index)}
              >
                <span className="header-section-index-num">
                  {String(item.index + 1).padStart(2, "0")}
                </span>
                <span className="header-section-index-name">
                  {item.label.replace(/^\d+ \/\/ /, "")}
                </span>
                <span className="header-section-index-arrow">→</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
