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
        current pipeline focus
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
            high-performance canvas rendering
          </h4>
          <p
            className="muted-text"
            style={{
              fontSize: "0.85rem",
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            currently building a custom monochrome vector design system on
            canvas, optimized for real-time visualization of structural data with
            low memory usage.
          </p>
        </div>
      </div>

      <div className="tech-grid" style={{ marginTop: "8px" }}>
        <div
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
          <span style={{ textTransform: "lowercase" }}>
            technical synth / monolithic ambient drone
          </span>
        </div>
        <div
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
            webassembly (wasm) &amp; rust graphics pipelines
          </span>
        </div>
      </div>
    </div>
  );
}
