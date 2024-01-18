import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden bg-[#FFFFFF] dark:bg-[#101010]/20 backdrop-blur-[100px]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
