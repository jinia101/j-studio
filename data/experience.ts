import type { ExperienceEntry } from "@/types";

export const experiences: ExperienceEntry[] = [
  {
    tabLabel: "exp // 01 (freelance)",
    title: "full stack engineer (freelance)",
    period: "jul 2025 - jan 2026",
    company: "aaharan edusmart pvt. ltd. // government of tripura",
    description:
      "architected the official district kpi monitoring system for gov of tripura",
    bullets: [
      "engineered a scalable three-tier platform using react, typescript, node.js, and postgresql; integrated in-memory caching to slash server load by 75%.",
      "enforced cert-compliant security via tls 1.3, nginx, redis rate limiting, hmac signing, and secure otp/jwt flows; deployed on government vps with ci/cd delivering sub-100ms latency for 800k+ users.",
    ],
    tags: [
      "react",
      "typescript",
      "node.js",
      "postgresql",
      "nginx",
      "redis",
      "tls 1.3",
    ],
    links: [
      { label: "demo", href: "https://gsp-pro.vercel.app/", icon: "external" },
    ],
  },
  {
    tabLabel: "exp // 02 (intern)",
    title: "backend developer intern",
    period: "may 2025 - jul 2025",
    company: "national informatics centre (nic) // cloud & commerce",
    description:
      "built e-commerce platform for self-help groups with product management and cloud storage",
    bullets: [
      "engineered restful product microservice using nestjs, typescript, typeorm with postgresql, implementing multi-tenant architecture supporting shg/vo/clf hierarchies with price handling and inventory management.",
      "architected s3-compatible object storage with aws sdk v3 and jwt-based authentication guards with rbac for 6 user roles, reducing n+1 queries across distributed entities.",
    ],
    tags: [
      "nestjs",
      "typescript",
      "typeorm",
      "postgresql",
      "aws sdk v3",
      "jwt auth",
    ],
    links: [
      {
        label: "repo",
        href: "https://github.com/jinia101/shg-backend-mono",
        icon: "github",
      },
      {
        label: "cert",
        href: "https://drive.google.com/file/d/1wuMfJxodd_4SMk_Kd-fOXPwFkxJ8kXcf/view?usp=sharing",
        icon: "certificate",
      },
    ],
  },
];
