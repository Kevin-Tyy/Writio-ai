import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-16 py-6">
      <div className="flex flex-col lg:flex-row max-w-[1720px] mx-auto w-full gap-x-6 gap-y-10 text-[#101010] dark:text-white">
        <div className="w-full relative rounded-[40px] border-4 dark:border-none border-[!DADADA] form-border-gradient bg-gradient-to-br from-[#c0c0c015] via-[#c2c2c21c] dark:from-[#ffffff50] dark:via-[#ffffff20] to-transparent px-6 py-10 sm:px-10 lg:px-20 sm:py-16 backdrop-blur-lg  text-[#101010] dark:text-white">
          <h1 className="text-3xl text-center sm:text-left">Ready to level-up?</h1>
          <p className="text-lg !font-light text-center sm:text-left">See how easy it can be to write amazing content.</p>
          <div className="!mt-8 flex justify-center sm:justify-start ">
            <Link href="/register">
              <button className="px-12 py-3.5 rounded-lg  font-semibold text-lg bg-[#C9FA49] text-[#101010]"> Get Started</button>
            </Link>
          </div>
        </div>
        <div className="w-full relative rounded-[40px] border-4 dark:border-none border-[!DADADA] form-border-gradient bg-gradient-to-br from-[#c0c0c015] via-[#c2c2c21c] dark:from-[#ffffff50] dark:via-[#ffffff20] to-transparent px-6 py-10 sm:px-10 lg:px-20 sm:py-16 backdrop-blur-lg  text-[#101010] dark:text-white space-y-10">
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
              <div data-hide-on-theme="dark" className="hidden dark:block">
                <Image src="/logo/aikeedo.png" alt="writio" height={200} width={180} />
              </div>
              <div data-hide-on-theme="light" className="block dark:hidden">
                <Image src="/logo/aikeedo-light.png" alt="writio" height={200} width={180} />
              </div>
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
