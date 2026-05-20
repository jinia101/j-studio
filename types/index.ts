import type { ReactNode } from "react";

// ─── Icon Names ───
export type IconName =
  | "code"
  | "atom"
  | "bolt"
  | "layers"
  | "shield"
  | "database"
  | "grid"
  | "cloud"
  | "github"
  | "linkedin"
  | "copy"
  | "download"
  | "pin"
  | "clock"
  | "phone"
  | "mail"
  | "link"
  | "gender"
  | "graduation"
  | "external";

// ─── Navigation ───
export interface NavItem {
  label: string;
  index: number;
}

// ─── Personal Info ───
export interface PersonalInfo {
  name: string;
  subtitle: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  websiteHref: string;
  pronouns: string;
  education: string;
}

// ─── Skills ───
export interface SkillCard {
  name: string;
  level: string;
  icon: IconName;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

// ─── Experience ───
export interface ExperienceLink {
  label: string;
  href: string;
  icon: "external" | "github" | "certificate";
}

export interface ExperienceEntry {
  tabLabel: string;
  title: string;
  period: string;
  company: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: ExperienceLink[];
}

// ─── Projects ───
export interface ProjectLink {
  label: string;
  href: string;
  icon: "github" | "external";
}

export interface ProjectEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

// ─── Component Props ───
export interface DossierSectionProps {
  index: number;
  activeSection: number;
  title: string;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
}

export interface SpecItemProps {
  icon: IconName;
  label: string;
  value: string | ReactNode;
  colSpan?: number;
}

export interface TechBadgeProps {
  label: string;
}

export interface SkillCardProps {
  skill: SkillCard;
}

export interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
}
