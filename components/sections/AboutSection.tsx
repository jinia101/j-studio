import { aboutBullets, personalInfo } from "@/data/personal";
import SpecItem from "@/components/ui/SpecItem";
import {
  ChevronCodeIcon,
  PinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  LinkIcon,
  GenderIcon,
  GraduationIcon,
} from "@/components/ui/icons";

interface AboutSectionProps {
  localTime: string;
}

export default function AboutSection({ localTime }: AboutSectionProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <ul className="friendly-bullet-list">
        {aboutBullets.map((bullet, i) => (
          <li key={i} className="friendly-bullet-item">
            <span className="bullet-icon">
              <ChevronCodeIcon size={16} />
            </span>
            <span dangerouslySetInnerHTML={{ __html: bullet }} />
          </li>
        ))}
      </ul>

      {/* PERSONAL DOSSIER SPECS BLOCK */}
      <div className="spec-grid">
        <SpecItem
          icon={<PinIcon />}
          label="location"
          value={personalInfo.location}
        />
        <SpecItem
          icon={<ClockIcon />}
          label="local time"
          value={localTime || "--:--"}
        />
        <SpecItem
          icon={<PhoneIcon />}
          label="telephone"
          value={
            <a
              href={personalInfo.phoneHref}
              className="spec-value"
              style={{ textDecoration: "underline" }}
            >
              {personalInfo.phone}
            </a>
          }
        />
        <SpecItem
          icon={<MailIcon />}
          label="email direct"
          value={
            <a
              href={`mailto:${personalInfo.email}`}
              className="spec-value"
              style={{ textDecoration: "underline" }}
            >
              {personalInfo.email}
            </a>
          }
        />
        <SpecItem
          icon={<LinkIcon />}
          label="website node"
          value={
            <a
              href={personalInfo.websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="spec-value"
              style={{ textDecoration: "underline" }}
            >
              {personalInfo.website}
            </a>
          }
        />
        <SpecItem
          icon={<GenderIcon />}
          label="pronouns"
          value={personalInfo.pronouns}
        />
        <SpecItem
          icon={<GraduationIcon />}
          label="academic sheet"
          value="B.Tech CSE 2023 - 2027"
          colSpan={2}
        />
      </div>
    </div>
  );
}
