import type { ReactNode } from "react";

interface SpecItemProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  colSpan?: number;
}

export default function SpecItem({ icon, label, value, colSpan }: SpecItemProps) {
  return (
    <div className="spec-item" style={colSpan ? { gridColumn: `span ${colSpan}` } : undefined}>
      <div className="spec-icon">{icon}</div>
      <div className="spec-label">
        <span className="spec-name">{label}</span>
        <span className="spec-value">{value}</span>
      </div>
    </div>
  );
}
