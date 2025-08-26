import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var d = document.documentElement;
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var saved = localStorage.getItem('theme');
                d.classList.toggle('dark', isDark);
                var isDark = saved ? saved === 'dark' : prefersDark;
              })();
            } 
              catch (e) {}
            `.trim(),
          }}
        />
      </head>

      <body className="font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Sidebar />
        <main className="pt-14 lg:pt-0 lg:pl-64">{children}</main>
      </body>
    </html>
  );
}
