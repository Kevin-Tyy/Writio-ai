"use client";
import React from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full px-4 md:px-16 py-6">
      <div className="max-w-[1720px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          {pathname !== ("/login" || "/register") && (
            <div className="flex items-center gap-x-12">
              <div className="">
                <ul className="text-white flex gap-x-10">
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/products">Featured</Link>
                  </li>
                  <li>
                    <Link href="/products">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div className="flex gap-x-5">
                <Link href="/login">
                  <button className="px-8 py-3 ring-1 ring-[#ffffffcc] ring-inset rounded-lg font-semibold uppercase text-sm hover:bg-white/10 transition duration-100 text-white ">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-8 py-3 rounded-lg font-semibold uppercase text-sm bg-[#C9FA49] text-[#101010]">Sign up</button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
