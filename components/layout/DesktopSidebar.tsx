import { navItems } from "@/data/navigation";

interface DesktopSidebarProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function DesktopSidebar({ activeSection, onNavigate }: DesktopSidebarProps) {
  return (
    <nav className="desktop-sidebar-nav">
      {navItems.map((item) => (
        <button
          key={item.index}
          className={`sidebar-nav-item ${activeSection === item.index ? "active" : ""}`}
          onClick={() => onNavigate(item.index)}
        >
          <span className="sidebar-nav-indicator" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
