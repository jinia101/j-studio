"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/navigation";

interface MobileNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on scroll (UX: user is browsing)
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleSelect = (index: number) => {
    setIsOpen(false);
    onNavigate(index);
  };

  const activeLabel = navItems[activeSection]?.label ?? "navigate";

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── Slide-up Drawer ── */}
      <nav
        className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}
        aria-label="Section navigation"
      >
        <div className="mobile-nav-drawer-header">
          <span className="mobile-nav-drawer-label">jump to</span>
          <button
            className="mobile-nav-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-nav-drawer-list">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                className={`mobile-nav-drawer-item ${activeSection === item.index ? "active" : ""}`}
                onClick={() => handleSelect(item.index)}
              >
                <span className="mobile-nav-drawer-item-label">{item.label}</span>
                <span className="mobile-nav-drawer-item-arrow">→</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── FAB Trigger ── */}
      <button
        className="mobile-nav-fab"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open section navigation"
        aria-expanded={isOpen}
      >
        <span className="mobile-nav-fab-index">
          {String(activeSection + 1).padStart(2, "0")}
        </span>
        <span className="mobile-nav-fab-label">{activeLabel.replace(/^\d+ \/\/ /, "")}</span>
        <span className="mobile-nav-fab-icon">{isOpen ? "✕" : "≡"}</span>
      </button>
    </>
  );
}
