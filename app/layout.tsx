import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Toolbar from "@/components/Toolbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writio AI",
  description: "Writio AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Toolbar />
          {children}
        </div>
      </body>
    </html>
  );
}
