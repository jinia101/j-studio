import type { SkillCardProps } from "@/types";
import { getSkillIcon } from "@/components/ui/icons";

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-visual-card">
      <div className="skill-icon-wrap">{getSkillIcon(skill.icon, 18)}</div>
      <span className="skill-card-name">{skill.name}</span>
      <span className="skill-card-level">{skill.level}</span>
    </div>
  );
}
