import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wemerson | Portfolio",
  description: "Web developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
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

        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
