import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J-STUDIO",
  description:
    "Monochrome & minimalist technical dossier web developer portfolio.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-SSR-Flash Script for theme resolution */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var theme = 'dark'; // default to dark
                  if (storedTheme) {
                    theme = storedTheme;
                  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    theme = 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="noise-overlay" />
        <div className="dot-grid-bg" />
        {children}
      </body>
    </html>
  );
}
