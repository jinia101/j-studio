"use client";

import { useRef, useState, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useClock } from "@/hooks/useClock";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useParallax } from "@/hooks/useParallax";

import BackgroundLayers from "@/components/background/BackgroundLayers";
import DesktopSidebar from "@/components/layout/DesktopSidebar";
import MobileNav from "@/components/layout/MobileNav";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import DossierSection from "@/components/ui/DossierSection";
import AboutSection from "@/components/sections/AboutSection";
import StatusSection from "@/components/sections/StatusSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ConnectSection from "@/components/sections/ConnectSection";

import { personalInfo } from "@/data/personal";

const SECTION_TITLES = [
  "01 // about",
  "02 // status",
  "03 // skills",
  "04 // experience",
  "05 // projects",
  "06 // connect / inquiries",
];

export default function Home() {
  // ─── Refs ───
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // ─── Hooks ───
  const { isPulling, handlePullChainClick } = useTheme();
  const localTime = useClock();
  const activeSection = useScrollSpy(sectionRefs);
  useParallax();

  // ─── Local State ───
  const [copiedEmail, setCopiedEmail] = useState(false);

  // ─── Handlers ───
  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1500);
  }, []);

  const handleNavigate = useCallback(
    (index: number) => {
      sectionRefs[index]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <BackgroundLayers />

      <div className="portfolio-layout-wrapper">
        <DesktopSidebar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <div className="portfolio-container">
          <MobileNav
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          <ThemeSwitcher
            isPulling={isPulling}
            onClick={handlePullChainClick}
          />

          <Header
            localTime={localTime}
            copiedEmail={copiedEmail}
            onCopyEmail={handleCopyEmail}
          />

          {/* ─── Dossier Stack ─── */}
          <main className="dossier-stack">
            <DossierSection
              index={0}
              activeSection={activeSection}
              title={SECTION_TITLES[0]}
              sectionRef={sectionRefs[0]}
            >
              <AboutSection localTime={localTime} />
            </DossierSection>

            <DossierSection
              index={1}
              activeSection={activeSection}
              title={SECTION_TITLES[1]}
              sectionRef={sectionRefs[1]}
            >
              <StatusSection />
            </DossierSection>

            <DossierSection
              index={2}
              activeSection={activeSection}
              title={SECTION_TITLES[2]}
              sectionRef={sectionRefs[2]}
            >
              <SkillsSection />
            </DossierSection>

            <DossierSection
              index={3}
              activeSection={activeSection}
              title={SECTION_TITLES[3]}
              sectionRef={sectionRefs[3]}
            >
              <ExperienceSection />
            </DossierSection>

            <DossierSection
              index={4}
              activeSection={activeSection}
              title={SECTION_TITLES[4]}
              sectionRef={sectionRefs[4]}
            >
              <ProjectsSection />
            </DossierSection>

            <DossierSection
              index={5}
              activeSection={activeSection}
              title={SECTION_TITLES[5]}
              sectionRef={sectionRefs[5]}
            >
              <ConnectSection />
            </DossierSection>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
