import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="pt-14 lg:pt-0 lg:pl-64">{children}</main>
      </body>
    </html>
  );
}
