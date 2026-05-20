export default function BackgroundLayers() {
  return (
    <div className="bg-layers-container">
      <div className="grid-bg-layer" />
      <div className="viewport-ruler-right" />
      <div className="viewport-ruler-bottom" />

      {/* Interlocking Fold Sheets */}
      <div className="fold-sheet sheet-1" aria-hidden="true">
        <div className="fold-fill" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="fold-line-svg">
          <line x1="100" y1="0" x2="0" y2="100" className="fold-stroke" />
        </svg>
      </div>

      <div className="fold-sheet sheet-2" aria-hidden="true">
        <div className="fold-fill" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="fold-line-svg">
          <line x1="0" y1="0" x2="100" y2="100" className="fold-stroke" />
        </svg>
      </div>

      <div className="fold-sheet sheet-3" aria-hidden="true">
        <div className="fold-fill" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="fold-line-svg">
          <line x1="100" y1="0" x2="0" y2="100" className="fold-stroke" />
        </svg>
      </div>

      <div className="fold-sheet sheet-4" aria-hidden="true">
        <div className="fold-fill" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="fold-line-svg">
          <line x1="0" y1="0" x2="100" y2="100" className="fold-stroke" />
        </svg>
      </div>

      <div className="fold-sheet-base" aria-hidden="true" />
      <div className="fold-diagonal-intersection" aria-hidden="true" />
    </div>
  );
}
