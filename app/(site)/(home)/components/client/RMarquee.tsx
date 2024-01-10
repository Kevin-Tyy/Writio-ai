"use client";
import Image from "next/image";

import React from "react";
import Marquee from "react-fast-marquee";
interface Props {
  angle?: number;
}
export default function RMarquee({ angle }: Props) {
  return (
    <div className="marquee">
      <div className={`bg-[#C9FA49] !rotate-[-4deg] overflow-hidden marquee`}>
        <Marquee>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/ai-image.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/speech-to-text.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/ai-writer.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/text-to-voice.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/instagram-captions.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/ai-chat.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
          <div className="w-full min-w-[320px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
            <Image src="/marquee/ai-code.svg" alt="" width={200} height={200} className="min-w-[150px] select-none" draggable={false} />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
