import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-16 py-6">
      <div className="flex flex-col lg:flex-row  max-w-[1720px] mx-auto w-full gap-x-6 gap-y-10">
        <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff20] to-transparent py-10 px-6 sm:p-12 backdrop-blur-lg w-full space-y-3">
          <h1 className="text-3xl text-center sm:text-left">Ready to level-up?</h1>
          <p className="text-lg !font-light text-center sm:text-left">See how easy it can be to write amazing content.</p>
          <div className="!mt-8 flex justify-center sm:justify-start ">
            <Link href="/register" className="text-[#FFFFFFDE]">
              <button className="px-12 py-3.5 rounded-lg  font-semibold text-lg bg-[#C9FA49] text-[#101010]"> Get Started</button>
            </Link>
          </div>
        </div>
        <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff20] to-transparent py-10 px-6 sm:p-12 backdrop-blur-lg w-full space-y-10">
          <div className="flex flex-col sm:flex-row gap-y-5 justify-between">
            <div className="flex justify-between sm:justify-start gap-x-14">
              <ul className="space-y-4">
                <li>
                  <Link className="text-lg font-syne" href="/">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-syne" href="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-syne" href="/">
                    FAQ
                  </Link>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <Link className="text-lg font-syne" href="/policies/terms-of-service">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-syne" href="/policies/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-syne" href="/policies/refund">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Image src="/logo/aikeedo.png" alt="AiKeedo" width={200} height={40} />
            </div>
          </div>
          <div className="border-t border-[#EDEDED] pt-8">
            <p className="text-center font-syne text-xl font-light">© 2024 Company Name.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
