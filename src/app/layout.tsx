import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Portfolio | Wemerson",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gray-50 text-gray-900`}
      >
        <Sidebar />
        <main className="pt-14 lg:pt-0 lg:pl-64">{children}</main>
      </body>
    </html>
  );
}
