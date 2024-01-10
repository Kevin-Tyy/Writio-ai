import Link from "next/link";
import React from "react";
import LMarquee from "@/app/(site)/(home)/components/client/LMarquee";
import RMarquee from "@/app/(site)/(home)/components/client/RMarquee";
import Image from "next/image";
import { features } from "./components/constants/data";
export default function page() {
  return (
    <div className="relative">
      <main className="w-full h-full min-h-screen bg-[#101010]/10 backdrop-blur-[100px]">
        <section className="px-4 md:px-16 py-6">
          <div className="max-w-[1720px] mx-auto w-full">
            <div className="flex items-center">
              <div className="w-full space-y-10">
                <h1 className="text-5xl leading-[1.3] max-w-[555px] font-syne">Turning concepts into AI-generated masterpieces.</h1>
                <p className="max-w-[555px] text-[#DDDDDD]">
                  Effortlessly generate high-quality AI-driven content tailored to your needs. Unlock limitless possibilities, save your time and start making
                  money today!
                </p>
                <div className="flex items-center gap-x-5">
                  <Link href="/">
                    <button className="px-8 py-3 rounded-lg  font-semibold text-sm bg-[#C9FA49] text-[#101010]"> Get Started</button>
                  </Link>
                  <Link href="/">
                    <button className="px-8 py-3 rounded-lg  font-semibold text-sm bg-transparent border border-[#FFF]/60"> Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="w-full relative">
                {/* <div className="absolute right-0 translate-y-1/2 -translate-x-1/2 bg-[#C9FA49] w-[450px] h-[450px] rounded-full blur-[400px]"></div> */}
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <LMarquee />
          <RMarquee />
        </div>
        <section className="px-4 md:px-16 py-6 mt-20">
          <div className="max-w-[1520px] mx-auto w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#c9fa4914] py-2 px-4 rounded-full flex justify-center items-center">
                <span className="text-sm text-[#C9FA49]">Coolest Features</span>
              </div>
              <h1 className="text-5xl leading-[1.3] max-w-2xl text-center font-syne">Another features only for your business</h1>
              <p className="max-w-xl text-center">Here are several features we provide to you to make the greatest CRM system for your business.</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#adceff14] ring-1 ring-[#ffffff16] p-10 rounded-[33px] space-y-4 group hover:bg-[#c9fa4914] hover:ring-[#c9fa4952] transition duration-200">
                  <div className="ring-1 ring-[#FFFFFF24] bg-[#FFFFFF10] w-fit p-4 rounded-full group-hover:bg-[#c9fa4914] group-hover:ring-[#c9fa4952] transition duration-200">
                    <Image src={feature.image} alt="writio-features" width={30} height={30} />
                  </div>
                  <h1 className="text-2xl font-syne">{feature.title}</h1>
                  <p className="text-white/80 font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
