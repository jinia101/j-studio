# Paper.design Design System for J-STUDIO Portfolio

This document outlines the exact design system, visual tokens, layouts, textures, grids, and geometric splits extracted from **https://paper.design/**. It serves as the single source of truth for the portfolio redesign, followed religiously to ensure pixel-perfect parity with the site's aesthetics.

---

## 1. Color Palette (OKLCH & Perceptually Uniform Warm-Tone Gamut)

The design system utilizes organic, physical-world values to mimic natural cream paper and deep charcoal ink.

| Element | Light Mode Value | Dark Mode Value | Notes |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#edebe1` (Warm organic cream) | `#080808` (Off-black canvas) | Pure body background |
| **Primary Text** | `#222222` (Soft charcoal-black) | `#efefe4` (Warm cream-white) | High readability, low glare |
| **Secondary/Muted Text** | `#707068` (Warm grey) | `#8a8a80` (Muted grey) | Lowercase metadata/subtitles |
| **Accent Tone** | `#81acec` (Tactile sky-blue) | `#5378c8` (Slightly darker blue) | The signature solid-color block logo accent |
| **Borders** | `rgba(34, 34, 34, 0.08)` (Light grey-black) | `rgba(239, 239, 228, 0.08)` (Light white-cream) | Hairline 1px dividers |
| **Borders (Active)** | `rgba(34, 34, 34, 0.16)` | `rgba(239, 239, 228, 0.16)` | Selected panel/button borders |

---

## 2. Textures & Tactility

### 2.1 The Paper Grain Noise
A high-frequency physical noise overlay spans the entire viewport. It uses `mix-blend-multiply` in light mode to tint the warm background dynamically, and an screen/multiply blend in dark mode to simulate ink press.
*   **CSS SVG Dynamic Turbulence Filter**:
    ```css
    .noise-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0.06;
      z-index: 9999;
      pointer-events: none;
      mix-blend-mode: multiply;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    ```

### 2.2 The 120px Structural Grid
A background grid of repeating small dots spaced exactly **120px apart**. It serves as a visual framework.
*   **Grid CSS implementation**:
    ```css
    .dot-grid-bg {
      position: fixed;
      inset: 0;
      z-index: -1;
      background-image: radial-gradient(var(--dot-color) 1.5px, transparent 1.5px);
      background-size: 120px 120px;
      background-position: calc(50% + 60px) 0px;
      opacity: 0.35;
    }
    ```

---

## 3. Geometric Elements & Rulers

### 3.1 Border Ticks (Ruler Grids)
The border margins contain architectural ticks simulating a blueprint ruler or technical paper alignment.
*   **Horizontal ticks (`ruler-y`)** along the left and right margins.
*   **Vertical ticks (`ruler-x`)** along the top and bottom margins.
*   **CSS Data URI Vector implementation**:
    ```css
    .ruler-x-ticks {
      background-image: url("data:image/svg+xml,%3Csvg width='120' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='10' stroke='rgba(34,34,34,0.15)' stroke-width='1'/%3E%3Cline x1='30' y1='0' x2='30' y2='6' stroke='rgba(34,34,34,0.08)' stroke-width='1'/%3E%3Cline x1='60' y1='0' x2='60' y2='6' stroke='rgba(34,34,34,0.08)' stroke-width='1'/%3E%3Cline x1='90' y1='0' x2='90' y2='6' stroke='rgba(34,34,34,0.08)' stroke-width='1'/%3E%3C/svg%3E");
      background-repeat: repeat-x;
    }
    ```

### 3.2 Diagonal Background splits
Large aesthetic splits slice across the background layout, dividing the warm cream paper texture into geometric folded triangles.
*   **Deco Layout splits** are styled using 1px stroke vector lines and `clip-path` masks:
    ```css
    .diagonal-deco-split {
      position: absolute;
      left: 0;
      width: calc(50vw + 960px);
      height: calc(50vw + 960px);
      clip-path: polygon(0 0, 100% 0, 0 100%);
      background-color: var(--bg-paper-deco);
      border-right: 1px solid var(--border-color);
    }
    ```

---

## 4. Typographic Scale & Hierarchy

The signature paper.design typography is built on a rigid hierarchy:
1.  **Strict Lowercase Display**:
    *   Headings (`h1`, `h2`, `h3`, `h4`) are written in complete lowercase (e.g. `design incredible // about`).
    *   Letter spacing is tight, and line height is extremely condensed (`leading-[100%]`).
2.  **Matter Sans Geometric Body**:
    *   A gorgeous modern sans font (Inter or Outfit) configured with strict optical alignments.
    *   No uppercase decoration for body or links.
3.  **Right Arrow Indicators**:
    *   Actionable items and transitions conclude with the right-facing glyph arrow (`→` / `&rarr;`).

| Element | Tag/Class | Font Size | Line Height | Tracking | Styling |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Big Display** | `.display-heading` | `56px` (desktop) | `100%` (`1.0`) | `-0.03em` | Lowercase, light/regular weight |
| **Section Header**| `.section-title` | `24px` | `100%` | `-0.015em`| Lowercase, semibold |
| **Body text** | `body`, `p` | `15px` | `165%` (`1.65`) | `-0.01em` | Normal sentence casing |
| **Action / Nav Links**| `.nav-link` | `14px` | `100%` | `0` | Lowercase, medium |

---

## 5. Layout Alignment & Focus Snapping

*   **Centered Canvas Space**: A single focused column (`max-width: 680px`), wrapped by visual grids and rulers.
*   **Infinite Scroll Spotlighting**:
    *   Section modules maintain an opacity of `0.3` when out of focus.
    *   When scrolled into the center of the viewport, the element snaps to `1.0` opacity, drawing high focus.
*   **Beveled Corners**: Cards use clean `border-radius: 4px` for structural shapes rather than deep circular pill borders.
