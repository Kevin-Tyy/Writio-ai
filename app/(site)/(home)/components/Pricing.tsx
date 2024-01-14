"use client";
import React, { useState } from "react";
import { packageData } from "./constants/data";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const [selectedPricing, setSelectedPricing] = useState<String | null>("Monthly");
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute bg-[#C9FA49]/80 w-full sm:w-[560px] h-[560px] rounded-full blur-[300px]" />
      <section>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-5xl !leading-[1.3] max-w-2xl text-center font-syne font-bold">Our Pricing Plan</h1>
          <p className="max-w-xl text-center text-lg text-white/70">Rewards and benefits without the downsides of a credit card.</p>
          <div className="w-full sm:w-auto flex bg-gradient-to-r from-[#ffffff56] to-[#FFFFFF10] rounded-xl border border-white/10 mt-6">
            <div
              onClick={() => setSelectedPricing("Monthly")}
              className={`${
                selectedPricing === "Monthly" && "bg-[#C9FA49] text-[#101010]"
              } cursor-pointer w-full  sm:w-[125px] h-[56px] text-xl font-semibold grid place-content-center transition-colors duration-200 rounded-lg`}>
              Monthly
            </div>
            <div
              onClick={() => setSelectedPricing("Yearly")}
              className={`${
                selectedPricing === "Yearly" && "bg-[#C9FA49] text-[#101010]"
              } cursor-pointer w-full  sm:w-[125px] h-[56px] text-xl font-semibold grid place-content-center transition-colors duration-200 rounded-lg`}>
              Yearly
            </div>
            <div
              onClick={() => setSelectedPricing("Packs")}
              className={`${
                selectedPricing === "Packs" && "bg-[#C9FA49] text-[#101010]"
              } cursor-pointer w-full  sm:w-[125px] h-[56px] text-xl font-semibold grid place-content-center transition-colors duration-200 rounded-lg`}>
              Packs
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          {packageData.map((pack, index) => (
            <div
              key={index}
              className={`${
                pack.isPopular ? "bg-[#FFF] text-[#101010]" : " bg-gradient-to-br from-[#ffffff56] to-[#FFFFFF10] "
              } form-border-gradient w-full px-6 py-10 sm:p-10 rounded-[40px] min-h-[695px] flex flex-col justify-between relative overflow-hidden max-w-lg`}>
              {pack.isPopular && (
                <div className="bg-[#C9FA49] uppercase font-semibold text-[#101010] text-center absolute top-0 right-0 rotate-45 translate-y-12 translate-x-48 w-[500px]">
                  Most Popular
                </div>
              )}
              <div className="space-y-5">
                <h1 className={`${pack.isPopular && "text-[#101010]"} text-3xl font-syne font-semibold`}>{pack.name}</h1>
                <p className={`${pack.isPopular && "!text-[#6f6f6fcc]"} text-xl leading-relaxed text-white/80`}>{pack.description}</p>
                <h2 className="text-4xl font-bold">{pack.price}</h2>
                <div className="border-t border-[#8B8B8B] space-y-3 pt-8">
                  {pack.features.map((feature, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <Check size={20} />
                      <span className="font-semibold text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href={pack.link}>
                <button
                  className={`${
                    pack.isPopular ? "bg-[#101010] text-[#C9FA49] " : "hover:bg-white/10"
                  } w-full py-4 px-6 border border-[#8B8B8B] rounded-xl font-semibold transition duration-200`}>
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
