import "./globals.css";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Wemerson | Portfolio",
  description: "Web developer portfolio built with Next.js",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/favicons/LogoLight.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-bg text-foreground antialiased">
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var d = document.documentElement;
                var saved = localStorage.getItem('theme');
                var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefers)) {
                  d.classList.add('dark');
                } else {
                  d.classList.remove('dark');
                }
              } catch (e) {}
            })();
            `.trim(),
          }}
        />

        <LanguageProvider>
          <Header />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
