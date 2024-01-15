"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  const { theme , setTheme } = useTheme();
  
  return (
    <div>
      <Link href="/">
        <Image src={theme === "dark" ? "/logo/writio.svg" : "/logo/writio-light.svg"} alt="writio" height={40} width={100} />
      </Link>
    </div>
  );
}
