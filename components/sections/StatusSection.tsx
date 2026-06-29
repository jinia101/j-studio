import { StatusBoltIcon } from "@/components/ui/icons";

export default function StatusSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h3
        style={{
          fontSize: "0.95rem",
          fontFamily: "var(--font-display)",
          fontWeight: "600",
          borderBottom: "1px solid var(--border-color)",
          paddingBottom: "6px",
          textTransform: "lowercase",
        }}
      >
        current focus
      </h3>

      <div
        style={{
          display: "flex",
          gap: "16px",
          border: "1px solid var(--border-color)",
          borderRadius: "4px",
          padding: "16px",
          backgroundColor: "var(--highlight-bg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "var(--text-color)",
          }}
        >
          <StatusBoltIcon />
        </div>
        <div>
          <h4
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              margin: "0 0 4px 0",
              textTransform: "lowercase",
            }}
          >
            Building 7obits
          </h4>
          <p
            className="muted-text"
            style={{
              fontSize: "0.85rem",
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            currently architecting multi-tenant SaaS platform with integrated
            CRM, project management, and automated invoicing.
          </p>
        </div>
      </div>

      <div className="tech-grid" style={{ marginTop: "8px" }}>
        <div
          className="status-label-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr",
            gap: "8px",
            fontSize: "0.85rem",
          }}
        >
          <span className="muted-text" style={{ textTransform: "lowercase" }}>
            reading:
          </span>
          <span style={{ textTransform: "lowercase" }}>
            &quot;designing data-intensive applications&quot; (martin kleppmann)
          </span>
        </div>
        <div
          className="status-label-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr",
            gap: "8px",
            fontSize: "0.85rem",
            borderTop: "1px dashed var(--border-color)",
            paddingTop: "8px",
          }}
        >
          <span className="muted-text" style={{ textTransform: "lowercase" }}>
            listening:
          </span>
          <span
            style={{
              textTransform: "lowercase",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 0",
            }}
          >
            <a
              href="https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                color: "var(--text-color)",
                transition: "opacity 0.2s",
              }}
            >
              viva la vida
            </a>
            <span style={{ margin: "0 6px", opacity: 0.4 }}>/</span>
            <a
              href="https://open.spotify.com/track/3GZD6HmiNUhxXYf8Gch723"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                color: "var(--text-color)",
                transition: "opacity 0.2s",
              }}
            >
              lost
            </a>
          </span>
        </div>
        <div
          className="status-label-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr",
            gap: "8px",
            fontSize: "0.85rem",
            borderTop: "1px dashed var(--border-color)",
            paddingTop: "8px",
          }}
        >
          <span className="muted-text" style={{ textTransform: "lowercase" }}>
            exploring:
          </span>
          <span style={{ textTransform: "lowercase" }}>
            Message Queueing techniques &amp; system designs
          </span>
        </div>
      </div>
    </div>
  );
}
