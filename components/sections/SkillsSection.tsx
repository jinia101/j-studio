import { skillCards, skillCategories } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";
import TechBadge from "@/components/ui/TechBadge";

export default function SkillsSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Visual Grid Container */}
      <div className="skills-visual-grid">
        {skillCards.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Badges section */}
      <div>
        {skillCategories.map((category, idx) => (
          <div key={category.title}>
            <h4
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                borderBottom: "1px dashed var(--border-color)",
                paddingBottom: "6px",
                marginBottom: "12px",
                color: "var(--text-muted)",
                textTransform: "lowercase",
              }}
            >
              {category.title}
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                marginBottom: idx < skillCategories.length - 1 ? "16px" : "0",
              }}
            >
              {category.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
