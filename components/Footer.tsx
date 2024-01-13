import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-16 py-6">
      <div className="flex max-w-[1720px] mx-auto w-full gap-x-6 gap-y-10">
        <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff30] to-transparent p-12 backdrop-blur-lg w-full space-y-3">
          <h1 className="text-3xl">Ready to level-up?</h1>
          <p className="text-lg !font-light">See how easy it can be to write amazing content.</p>
          <div className="!mt-8 ">
            <Link href="/register" className="text-[#FFFFFFDE]">
              <button className="px-12 py-3.5 rounded-lg  font-semibold text-lg bg-[#C9FA49] text-[#101010]"> Get Started</button>
            </Link>
          </div>
        </div>
        <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff30] to-transparent p-12 backdrop-blur-lg w-full space-y-10">
          <div className="flex justify-between">
            <div className="flex gap-x-14">
              <ul className="space-y-4">
                <li>
                  <Link className="text-lg" href="/">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href="/">
                    FAQ
                  </Link>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <Link className="text-lg" href="/policies/terms-of-service">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href="/policies/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href="/policies/refund">
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
            <p className="text-center">© 2024 Company Name.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
