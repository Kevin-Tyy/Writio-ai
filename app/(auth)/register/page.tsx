"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="relative rounded-[40px] border-4 dark:border-0 border-[!DADADA] form-border-gradient bg-gradient-to-br from-[#c0c0c015] via-[#c2c2c21c] dark:from-[#ffffff50] dark:via-[#ffffff20] to-transparent px-6 py-10 min-[480px]:p-20 backdrop-blur-lg max-w-[620px]">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-hanken">Sign Up</h1>
          <p className="leading-relaxed text-lg">
            Today is a new day. It's your day. You shape it.
            <br className="hidden sm:block" /> Sign in to start managing your projects.
          </p>
        </div>
        <form className="space-y-7 mt-12">
          <div className="flex gap-x-4">
            <input
              className="bg-[#E8E8E8] dark:bg-[#616161] rounded-lg w-full ring-1 ring-[#FFFFFF40] px-3 py-4 outline-none focus:ring-2 focus:ring-[#ffffff54] transition duration-100 placeholder:-[#E8E8E8] dark:placeholder:text-[#FFFFFF99]"
              type="text"
              id="firstname"
              placeholder="First Name"
            />
            <input
              className="bg-[#E8E8E8] dark:bg-[#616161] rounded-lg w-full ring-1 ring-[#FFFFFF40] px-3 py-4 outline-none focus:ring-2 focus:ring-[#ffffff54] transition duration-100 placeholder:-[#E8E8E8] dark:placeholder:text-[#FFFFFF99]"
              type="text"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
          <input
            className="bg-[#E8E8E8] dark:bg-[#616161] rounded-lg w-full ring-1 ring-[#FFFFFF40] px-3 py-4 outline-none focus:ring-2 focus:ring-[#ffffff54] transition duration-100 placeholder:-[#E8E8E8] dark:placeholder:text-[#FFFFFF99]"
            type="text"
            id="email"
            placeholder="Email Address *"
          />
          <input
            className="bg-[#E8E8E8] dark:bg-[#616161] rounded-lg w-full ring-1 ring-[#FFFFFF40] px-3 py-4 outline-none focus:ring-2 focus:ring-[#ffffff54] transition duration-100 placeholder:-[#E8E8E8] dark:placeholder:text-[#FFFFFF99]"
            type="password"
            id="password"
            placeholder="Password *"
          />
          <div className="flex items-center justify-between flex-wrap gap-y-2">
            <button className="px-8 py-3.5 rounded-lg font-bold bg-[#C9FA49] text-[#101010]"> Sign Up</button>
            <Link href="/forgot-password" className="text-[#101010] dark:text-[#FFFFFFDE]">
              Forgot your password?
            </Link>
          </div>
        </form>
        <div className="mt-10">
          <Link href="/login">
            <button className="text-white w-full bg-[#181913] py-4 px-4 uppercase text-sm rounded-lg">Already Have an account? Login</button>
          </Link>
        </div>
        <div className="mt-10 space-y-10">
          <div className="flex items-center gap-x-4">
            <span className="w-full bg-[#cfdfe2d3] h-[2px]" />
            <span>Or</span>
            <span className="w-full bg-[#cfdfe2d3] h-[2px]" />
          </div>
          <div className="space-y-4">
            <button className="w-full flex gap-x-4 justify-center items-center bg-[#E8E8E8] dark:bg-[#F3F9FA] py-3.5 rounded-lg">
              <Image src="/svgs/Google.svg" alt="Google" width={30} height={30} className="select-none" draggable={false} />
              <span className="text-[#313957] font-[600]">Sign in with Google</span>
            </button>
            <button className="w-full flex gap-x-4 justify-center items-center bg-[#E8E8E8] dark:bg-[#F3F9FA] py-3.5 rounded-lg">
              <Image src="/svgs/Facebook.svg" alt="Facebook" width={30} height={30} className="select-none" draggable={false} />
              <span className="text-[#313957] font-[600]">Sign in with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
