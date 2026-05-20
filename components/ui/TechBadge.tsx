import type { TechBadgeProps } from "@/types";

export default function TechBadge({ label }: TechBadgeProps) {
  return <span className="tech-badge">{label}</span>;
}
