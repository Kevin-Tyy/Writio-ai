import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute right-0 translate-y-1/2 -translate-x-1/3 bg-[#C9FA49] w-[500px] h-[500px] rounded-full blur-[400px] z-[-1]"></div>
      <main className="w-full h-full min-h-screen absolute inset-0 bg-[#101010]/20 backdrop-blur-[100px] flex flex-col z-[1] ">
        <Navbar />
        <div className="flex flex-1 w-full h-full justify-center items-center max-w-[1520px] mx-auto">
          <div className="w-full">{children}</div>
          <div className="w-full">
            
          </div>
        </div>
      </main>
    </div>
  );
}
