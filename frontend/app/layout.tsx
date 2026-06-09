import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "ThreatLens AI",
  description: "AI Powered Security Operations Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <div className="flex">

          <Sidebar />

          <main className="flex-1 p-8 bg-slate-950 min-h-screen">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}