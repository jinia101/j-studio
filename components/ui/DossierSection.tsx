import type { DossierSectionProps } from "@/types";

export default function DossierSection({
  index,
  activeSection,
  title,
  sectionRef,
  children,
}: DossierSectionProps) {
  return (
    <div
      ref={sectionRef}
      data-section-index={index}
      className={`dossier-section ${activeSection === index ? "active" : ""}`}
    >
      <div className="dossier-header-label">
        <span>{title}</span>
        <span className="section-indicator">
          {activeSection === index ? "focused" : "active"}
        </span>
      </div>
      <div className="dossier-content">{children}</div>
    </div>
  );
}
