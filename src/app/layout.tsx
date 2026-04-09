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
  metadataBase: new URL("https://portfolio-wmsalves.vercel.app"),
  title: "Wemerson | Portfolio",
  description: "Turning ideas into responsive and dynamic web apps",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/favicons/LogoLight.svg",
  },
  openGraph: {
    title: "Wemerson | Portfolio",
    description: "Turning ideas into responsive and dynamic web apps",
    url: "https://portfolio-wmsalves.vercel.app",
    siteName: "Wemerson Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wemerson Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wemerson | Portfolio",
    description: "Turning ideas into responsive and dynamic web apps",
    images: ["/twitter-image"],
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
