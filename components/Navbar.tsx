"use client";
import React, { useState } from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="w-full px-4 md:px-16 py-6">
      <div className="max-w-[1720px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          {pathname !== "/register" && pathname !== "/login" && (
            <div>
              <div className="w-10 grid place-content-center ml-6 md:hidden">
                <div
                  className="flex flex-col items-end justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer  group"
                  onClick={() => setIsExpanded(true)}>
                  <span
                    className={`w-5 relative h-[2px] bg-neutral-700 dark:bg-white block transition rounded-full duration-[.3s] ${
                      isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                    }`}></span>
                  <span
                    className={`w-4 relative h-[2px] bg-neutral-700 dark:bg-white transition  rounded-full duration-[.1s] opacity-100 ${
                      isExpanded && "opacity-0 hidden"
                    } `}></span>
                  <span
                    className={`w-5 relative h-[2px] bg-neutral-700 dark:bg-white rounded-full transition duration-[.3s] ${
                      isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                    }`}></span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-x-12">
                <div className="">
                  <ul className="text-[#101010] dark:text-white flex gap-x-10">
                    <li>
                      <Link href="#products">Products</Link>
                    </li>
                    <li>
                      <Link href="#featured">Featured</Link>
                    </li>
                    <li>
                      <Link href="#pricing">Pricing</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-x-5">
                  <Link href="/login">
                    <button className="relative px-8 py-3 ring-1 ring-[#101010] dark:ring-[#ffffffcc] ring-inset rounded-lg font-semibold uppercase text-sm hover:bg-white/10 transition duration-100 text-[#101010] dark:text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:h-full before:bg-[#fff]/10 hover:before:w-full before:transition-all before:duration-200 before:rounded-md before:z-[-1]">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="px-8 py-3 rounded-lg font-semibold uppercase text-sm bg-[#C9FA49] text-[#101010]">Sign up</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
}
