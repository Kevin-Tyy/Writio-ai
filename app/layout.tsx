import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Toolbar from "@/components/Toolbar";
import { ThemeProviders } from "@/context/providers/Themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writio AI",
  description: "Writio AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative">
          <ThemeProviders>
            <Toolbar />
          </ThemeProviders>
          {children}
        </div>
      </body>
    </html>
  );
}
