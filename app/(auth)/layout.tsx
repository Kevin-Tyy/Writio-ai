import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <main className="w-full h-full min-h-screen absolute inset-0 text-[#101010] dark:text-white bg-[#FFFFFF] dark:bg-[#101010]/20 backdrop-blur-[100px] flex flex-col z-[1] ">
        <Navbar />
        <div className="flex flex-col lg:flex-row flex-1 w-full h-full items-center max-w-[1520px] mx-auto gap-20 px-2 mt-20 lg:mt-0">
          <div className="w-full relative z-10 flex justify-center lg:justify-start">{children}</div>
          <div className="w-full h-full relative flex flex-col gap-20 justify-center items-center">
            <div className="absolute right-0 bg-[#C9FA49] w-[400px] h-[400px] rounded-full blur-[400px] z-[-1]"></div>
            <Image src="/svgs/arrow.svg" alt="arrow" width={200} height={200} className="absolute translate-y-40 -translate-x-28 left-0 hidden sm:block" />
            <div className="w-full max-w-xl space-y-20">
              <div className="w-full ">
                <div className="w-full relative">
                  <Image src="/svgs/x-ico.svg" alt="arrow" width={18} height={18} className="absolute -left-8 top-6" />
                  <Image src="/svgs/wave-ico-lg.svg" alt="arrow" width={100} height={100} className="absolute right-1/4 top-6 hidden sm:block" />
                  <Image src="/svgs/x-ico.svg" alt="arrow" width={15} height={15} className="absolute right-1/4 top-16" />
                  <Image src="/svgs/line-ico.svg" alt="arrow" width={35} height={35} className="absolute left-48 top-[108px]" />
                  <Image src="/svgs/square-ico.svg" alt="arrow" width={20} height={20} className="absolute left-60 top-[98px]" />
                  <h1 className="text-4xl sm:text-5xl text-[#9F9F9F] dark:text-white  md:text-[60px] font-semibold !leading-[1.2] tracking-wider font-syne text-clip overflow-hidden">
                    Concepts <br />
                    into AI <br />
                    -generated <br />
                    masterpieces.
                  </h1>
                  <Image src="/svgs/square-ico.svg" alt="arrow" width={20} height={20} className="absolute -left-8 botttom-0" />
                  <Image src="/svgs/line-ico.svg" alt="arrow" width={30} height={30} className="absolute left-8 -bottom-3 " />
                  <div className="bg-[#C9FA49] h-72 min-[400px]:h-80 w-52 min-[400px]:w-64 absolute top-[68px] left-20 min-[400px]:left-36 mix-blend-difference text-black z-[1] flex items-end px-4 pb-8">
                    <div className="relative text-lg whitespace-normal min-[400px]:whitespace-nowrap">
                      Unlock limitless possibilities
                      <Image src="/svgs/wave-ico.svg" alt="arrow" width={100} height={100} className="absolute -left-16 -bottom-6" />
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 flex justify-end">
                  <h1 className="w-fit min-[400px]:-rotate-90 text-xs">www.company name.com</h1>
                </div>
              </div>
              <div className="w-full flex flex-col min-[400px]:flex-row justify-center min-[400px]:justify-between items-center min-[400px]:items-end pt-40 gap-y-6">
                <div className="space-y-5">
                  <div className="bg-[#C9FA49] h-3 w-28" />
                  <h1>#socialmedia #customhashtag #latesttrend</h1>
                </div>
                <div className="flex gap-3  border-t-2 border-[#DDD] pt-2 px-4 cursor-pointer">
                  <span className="text-[22px] font-semibold whitespace-nowrap">Try now</span>
                  <Image src={"/svgs/arrow-left.svg"} alt="arrow" width={12} height={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
