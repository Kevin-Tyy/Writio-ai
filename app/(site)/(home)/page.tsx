import React from "react";

export default function page() {
  return (
    <div className="relative">
      <div className="absolute right-0 translate-y-1/2 -translate-x-1/3 bg-[#C9FA49] w-[500px] h-[500px] rounded-full blur-[400px]"></div>
      <main className="w-full h-full min-h-screen absolute bg-[#101010]/10 backdrop-blur-[100px]">page</main>
    </div>
  );
}
