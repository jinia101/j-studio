interface ThemeSwitcherProps {
  isPulling: boolean;
  onClick: () => void;
}

export default function ThemeSwitcher({ isPulling, onClick }: ThemeSwitcherProps) {
  return (
    <div
      className={`pull-chain-container ${isPulling ? "pulling" : ""}`}
      onClick={onClick}
      title="pull cord to toggle theme"
    >
      <div className="pull-chain-cord">
        <div className="pull-chain-handle" />
      </div>
    </div>
  );
}
