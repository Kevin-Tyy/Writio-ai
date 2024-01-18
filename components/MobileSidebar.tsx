"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import Logo from "./shared/Logo";
interface Props {
  isDark?: boolean;
  onClose: () => void;
  isOpen?: boolean;
}
export default function MobileSidebar({ isDark, onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navLinks = [
    {
      href: "/",
      label: "Product",
    },
    {
      href: "/",
      label: "Featured",
    },
    {
      href: "/",
      label: "Pricing",
    },
  ];

  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden bg-white dark:bg-[#101010] fixed right-0 top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-300`}>
      <div className="pl-8 flex flex-col justify-between pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <div className="w-10 grid place-content-center ml-6 md:hidden">
            <div
              className="flex flex-col items-end justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer  group"
              onClick={onClose}>
              <span
                className={`w-5 relative h-[2px] bg-neutral-700 dark:bg-white block transition rounded-full duration-[.3s] ${
                  isOpen && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-neutral-700 dark:bg-white transition  rounded-full duration-[.4s] opacity-100 ${
                  isOpen && "!opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-neutral-700 dark:bg-white rounded-full transition duration-[.3s] ${
                  isOpen && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div className="flex gap-[10px] items-center cursor-pointer">
                <h1 className="text-[#101010] dark:text-white whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-x-4">
          <Link href="/login">
            <button className="px-8 py-3 ring-1 ring-[#101010] dark:ring-[#ffffffcc] ring-inset rounded-lg font-semibold uppercase text-sm hover:bg-white/10 transition duration-100 text-[#101010] dark:text-white relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:h-full before:bg-[#fff]/10 hover:before:w-full before:transition-all before:duration-200 before:rounded-md before:z-[-1]">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-8 py-3 rounded-lg font-semibold uppercase text-sm bg-[#C9FA49] text-[#101010] whitespace-nowrap">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
