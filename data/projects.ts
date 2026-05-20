import type { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    id: "proj_01",
    name: "environmental impact ai agent",
    category: "[ sustainability analytics platform ]",
    description:
      "developed full-stack streamlit application with rag architecture using langchain, chromadb, and groq llm, helping users reduce environmental footprint across co2, water, and waste metrics by up to 40%. implemented natural language query processing, csv/excel analysis, interactive dashboards with real-time visualizations, and an a+ to f environmental scoring system.",
    tags: ["streamlit", "langchain", "chromadb", "groq llm", "python"],
    links: [
      {
        label: "repo",
        href: "https://github.com/jinia101/March-7",
        icon: "github",
      },
      { label: "demo", href: "https://demo.com", icon: "external" },
    ],
  },
  {
    id: "proj_02",
    name: "7obits ",
    category: "[ freelancer & agency operations ]",
    description:
      "architecting a multi-tenant saas platform with integrated crm, project management, and automated invoicing. engineered postgresql rls policies and redis/bullmq worker infrastructure for async billing workflows. implementing automated billing cycles (milestone, retainer, hourly), payment reconciliation, and real-time analytics dashboards for revenue and pipeline tracking.",
    tags: [
      "next.js 14",
      "typescript",
      "supabase",
      "redis",
      "bullmq",
      "stripe",
      "resend",
      "vercel",
      "pwa",
    ],
    links: [
      {
        label: "repo",
        href: "https://github.com/jinia101/7obits",
        icon: "github",
      },
    ],
  },
  {
    id: "proj_03",
    name: "oatly resume builder",
    category: "[ contributor ]",
    description:
      "migrated ai usage limits from client-side local storage to secure server-side credit system using mongodb, implementing dedicated balance and deduction apis to ensure feature access integrity. refactored resume rendering and pdf export flows with optimistic ui updates; optimized ai auto-tailor ux by implementing tone selection and guided writing prompts.",
    tags: [
      "next.js",
      "react",
      "typescript",
      "mongodb",
      "tailwind css",
      "rest apis",
    ],
    links: [
      {
        label: "repo",
        href: "https://github.com/jinia101/OatMeal2/tree/main",
        icon: "github",
      },
    ],
  },
];
