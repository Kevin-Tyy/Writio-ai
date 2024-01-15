"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Toolbar() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="bg-gradient-to-br from-[#a8a8a8] dark:from-[#7a7a7a] to-[#ffffff00] ring-4 ring-[#a8a8a8] dark:ring-[#6d6d6d] rounded-full p-2 h-[42px] w-[42px] backdrop-blur-xl">
          <Image src="/svgs/sun.svg" alt="" width={32} height={32} />
        </button>
        <button className="bg-gradient-to-br from-[#a8a8a8] dark:from-[#7a7a7a] to-[#ffffff00] ring-4 ring-[#a8a8a8] dark:ring-[#6d6d6d] rounded-full p-2.5 h-[42px] w-[42px] backdrop-blur-xl">
          <Image src="/svgs/globe.svg" alt="" width={28} height={28} />
        </button>
      </div>
    </div>
  );
}
