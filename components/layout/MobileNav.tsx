import { navItems } from "@/data/navigation";

interface MobileNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <nav className="mobile-sticky-nav">
      {navItems.map((item) => (
        <button
          key={item.index}
          className={`mobile-nav-btn ${activeSection === item.index ? "active" : ""}`}
          onClick={() => onNavigate(item.index)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
