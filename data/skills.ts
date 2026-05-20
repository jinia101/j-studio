import type { SkillCard, SkillCategory } from "@/types";

export const skillCards: SkillCard[] = [
  { name: "ts / js", level: "[ language ]", icon: "code" },
  { name: "react / next", level: "[ architect ]", icon: "atom" },
  { name: "python / c++", level: "[ systems ]", icon: "bolt" },
  { name: "node / express", level: "[ runtime ]", icon: "layers" },
  { name: "nestjs / fastapi", level: "[ framework ]", icon: "shield" },
  { name: "postgres / mongo", level: "[ data stores ]", icon: "database" },
  { name: "docker / k8s", level: "[ container ]", icon: "grid" },
  { name: "aws / azure", level: "[ cloud infra ]", icon: "cloud" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "languages",
    items: ["c++", "python", "javascript", "typescript"],
  },
  {
    title: "frameworks & libraries",
    items: [
      "react",
      "node.js",
      "express.js",
      "nestjs",
      "fastapi",
      "django",
      "langchain",
      "streamlit",
      "typeorm",
    ],
  },
  {
    title: "databases & vectors",
    items: ["postgresql", "mongodb", "mysql", "redis", "chromadb"],
  },
  {
    title: "tools & architecture",
    items: [
      "aws",
      "azure",
      "docker",
      "kubernetes",
      "git",
      "github",
      "hugging face",
      "nginx",
    ],
  },
];
