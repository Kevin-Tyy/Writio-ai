import Link from "next/link";
import React from "react";
import LMarquee from "@/app/(site)/(home)/components/client/LMarquee";
import RMarquee from "@/app/(site)/(home)/components/client/RMarquee";
import Image from "next/image";
import { features } from "./components/constants/data";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
export default function page() {
  return (
    <div className="relative">
      <main className="w-full h-full min-h-screen bg-[#101010]">
        <section className="px-4 md:px-16 py-6 my-28">
          <div className="max-w-[1720px] mx-auto w-full">
            <div className="flex items-center ">
              <div className="w-full space-y-10">
                <h1 className="text-[55px] leading-[1.3] max-w-[555px] font-syne font-bold">Turning concepts into AI-generated masterpieces.</h1>
                <p className="max-w-[555px] text-[#DDDDDD] text-lg leading-loose">
                  Effortlessly generate high-quality AI-driven content tailored to your needs. Unlock limitless possibilities, save your time and start making
                  money today!
                </p>
                <div className="flex items-center gap-x-5 !-mt-6">
                  <Link href="/">
                    <button className="px-8 py-3 rounded-lg  font-semibold bg-[#C9FA49] text-[#101010]"> Get Started</button>
                  </Link>
                  <Link href="/">
                    <button className="px-8 py-3 rounded-lg font-semibold bg-transparent border border-[#FFF]/60"> Learn More</button>
                  </Link>
                  <Image src="/svgs/arrow.svg" alt="arrow" width={300} height={300} className="translate-x-10 translate-y-10" />
                </div>
              </div>
              <div className="w-full relative h-[40vh] max-h-[500px]">
                <div className="absolute right-0 -translate-x-1/2 bg-[#C9FA49] w-[350px] h-[350px] rounded-full blur-[300px]" />
                <div className="w-full h-full grid place-content-center">
                  <div className="absolute top-0 left-10 translate-y-16">
                    <div className="relative opacity-40">
                      <div className="bg-[#3cf765] rounded-xl w-20 h-[42px] outline-shadow" />
                      <div className="outline-clip-path bg-[#3cf765] absolute -right-10 -top-10 -rotate-45" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0">
                    <div className="relative opacity-40">
                      <div className="bg-[#d43a87] rounded-xl w-24 h-[42px] outline-shadow-pink" />
                      <div className="outline-clip-path bg-[#d43a87] absolute -bottom-10 -left-10 rotate-[135deg]" />
                    </div>
                  </div>
                  <div className="border-4 border-[#7aff3c] rounded-3xl py-5 px-10">
                    <span className="uppercase text-4xl font-semibold tracking-[27px] text-[#C9FA49] font-syne text-center">Writio</span>
                  </div>
                  <div className="absolute bottom-0 left-1/4">
                    <div className="relative opacity-50 -translate-y-14">
                      <div className="bg-[#15ff00] rounded-xl w-24 h-[42px] outline-shadow" />
                      <div className="outline-octagon-clip-path bg-[#15ff00] absolute -left-8 -bottom-8 -rotate-[20deg]" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <div className="relative opacity-40">
                      <div className="bg-[#45f795] rounded-xl w-28 h-[42px] outline-shadow" />
                      <div className="outline-clip-path bg-[#45f795] absolute -left-10 -top-10 -rotate-[135deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <LMarquee />
          <RMarquee />
        </div>
        <section className="px-4 md:px-16 py-6 relative">
          <Image src="/planet-image.png" alt="" width={500} height={500} className="absolute right-0 top-0" />
          <div className="max-w-[1720px] mx-auto w-full !mt-28">
            <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff20] to-transparent p-20 backdrop-blur-lg w-full space-y-10">
              <div className="bg-[#FFFFFF18] py-2 px-4 rounded-full flex justify-center items-center w-fit">
                <span className="text-sm text-[#FFF] uppercase font-syne">core features</span>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="w-full text-5xl font-semibold max-w-2xl leading-[1.3] font-syne">Meet your ultimate AI-Powered Content Platform</h1>
                <p className="w-full max-w-2xl leading-loose text-lg">
                  Lorem ipsum dolor sit amet consectetur. Massa viverra netus sed auctor nunc sodales eleifend. Libero nisi at id malesuada.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="w-full flex flex-col gap-5">
                  <div className="bg-[#101010] px-12 pt-16 rounded-[40px] space-y-6 flex flex-col items-center">
                    <div className="bg-[#C9FA49] text-[#101010] px-5 py-1.5 rounded-border text-sm font-semibold uppercase">AI WRITER</div>
                    <h1 className="text-3xl text-center font-semibold font-syne leading-relaxed">Generate SEO-optimized blogs, sales emails...</h1>
                    <p className="text-white/80 text-center text-lg leading-loose">
                      Craft SEO-optimized blog posts, sales emails, and other content for maximum online visibility and engagement.
                    </p>
                    <Link href="">
                      <button className="text-[#101010] bg-white px-6 py-3.5 rounded-xl font-semibold">See All Features</button>
                    </Link>
                    <Image src="/features1.png" alt="image" width={442} height={328} />
                  </div>
                  <div className="bg-[#101010] px-12 pt-16 rounded-[40px] space-y-6 flex flex-col items-center">
                    <div className="bg-[#C9FA49] text-[#101010] px-5 py-1.5 rounded-border text-sm font-semibold uppercase">AI Code</div>
                    <h1 className="text-3xl text-center font-semibold font-syne leading-relaxed max-w-lg">Ready to write code at the speed of light?</h1>
                    <p className="text-white/80 text-center text-lg leading-loose">
                      Effortless coding with AI Code Generator: Instant solutions for
                      <br /> your programming needs.{" "}
                    </p>
                    <Image src="/features2.png" alt="image" width={442} height={328} />
                  </div>
                </div>
                <div className="bg-[#101010] px-16 pt-16 rounded-[40px] h-full w-full flex flex-col">
                  <div className="h-full space-y-6 flex flex-col items-start">
                    <div className="bg-[#C9FA49] text-[#101010] px-5 py-1.5 rounded-border text-sm font-semibold uppercase">100+ AI WRITER Templates</div>
                    <h1 className="text-3xl font-semibold font-syne leading-relaxed">What can (Company Name) write for you?.</h1>
                    <p className="text-white/80 text-lg leading-loose">
                      Lorem ipsum dolor sit amet consectetur. Convallis lacus gravida dignissim montes a. In faucibus interdum facilisis interdum nec. Mi
                      viverra tristique nunc tortor consequat orci nunc. Etiam faucibus sociis integer gravida tortor amet vitae. Venenatis tristique morbi nibh
                      risus a rutrum quisque est vitae. Quisque morbi eu morbi eros ac quam volutpat leo. Enim fermentum duis sed scelerisque tristique habitant
                      metus non etiam.
                    </p>
                    <Link href="/register">
                      <button className="text-[#101010] bg-[#C9FA49] px-6 py-3.5 rounded-xl font-semibold">Get Stared For Free</button>
                    </Link>
                  </div>
                  <div className="h-full 2xl:w-4/5 mx-auto flex items-start mb-20">
                    <div className="h-full grid grid-cols-3 w-full">
                      <div className="flex items-center">
                        <Image src="/gifs/facebook-ico.gif" alt="facebook-ico" width={140} height={140} className="mix-blend-exclusion" />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <Image src="/gifs/instagram-ico.gif" alt="instagram-ico" width={140} height={140} className="-translate-y-20 mix-blend-color-dodge" />
                        <Image
                          src="/gifs/twitter-x-ico.gif"
                          alt="x-ico"
                          width={80}
                          height={80}
                          className="-translate-x-10 translate-y-20 mix-blend-color-dodge"
                        />
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <Image src="/gifs/linkedin-ico.gif" alt="linkedin-ico" width={140} height={140} className="mix-blend-color-dodge" />
                        <Image src="/gifs/youtube-ico.gif" alt="linkedin-ico" width={140} height={140} className="-translate-x-16 mix-blend-luminosity" />
                        <Image src="/gifs/behance-ico.gif" alt="behance-ico" width={140} height={140} className="mix-blend-difference" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-16 py-6 mt-20 relative">
          <Image src="/planet-image-2.png" alt="" width={750} height={750} className="absolute left-0 top-10 opacity-40" />
          <div className="max-w-[1720px] mx-auto w-full">
            <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff20] to-transparent p-20 backdrop-blur-lg w-full space-y-10">
              <div className="bg-[#FFFFFF18] py-2 px-4 rounded-full flex justify-center items-center w-fit">
                <span className="text-sm text-[#FFF] uppercase">core features</span>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="w-full text-5xl font-semibold max-w-2xl leading-[1.3] font-syne">Meet your ultimate AI-Powered Content Platform</h1>
                <p className="w-full max-w-2xl leading-loose text-lg">
                  Lorem ipsum dolor sit amet consectetur. Massa viverra netus sed auctor nunc sodales eleifend. Libero nisi at id malesuada.
                </p>
              </div>
              <div className="flex gap-5">
                <div className="w-full bg-[#101010] px-12 pt-16 rounded-[40px] space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-fit bg-[#C9FA49] text-[#101010] px-5 py-1.5 rounded-border text-sm font-semibold uppercase">AI CODE</div>
                    <h1 className="text-3xl font-semibold font-syne leading-relaxed">That's remarkably human-like and engaging...</h1>
                    <p className="text-white/80 text-lg leading-loose">
                      Simply choose your assistant and engage with a friendly chatbot to generate ideas, enhance your content, or even bring a smile to your
                      face.
                    </p>
                    <Link href="">
                      <button className="text-[#101010] bg-white px-6 py-3.5 rounded-xl font-semibold mt-5">See All Features</button>
                    </Link>
                  </div>
                  <Image src="/features3.png" alt="image" width={442} height={328} className="mx-auto" />
                </div>
                <div className="w-full bg-[#101010] px-12 pt-16 rounded-[40px] space-y-3 flex flex-col">
                  <div className="w-fit bg-[#C9FA49] text-[#101010] px-5 py-1.5 rounded-border text-sm font-semibold uppercase">AI IMAGE</div>
                  <h1 className="text-3xl font-semibold font-syne leading-relaxed">Visualize what you dream of. Create images from text.</h1>
                  <p className="text-white/80 text-lg leading-loose">
                    Instantly create stunning images using AI Image Generator – your tool for artistic innovation.{" "}
                  </p>
                  <Link href="">
                    <button className="text-[#101010] bg-white px-6 py-3.5 rounded-xl font-semibold mt-3">Try for Free</button>
                  </Link>
                  <Image src="/features1.png" alt="image" width={442} height={328} className="mx-auto" />
                </div>
              </div>
              <div className="flex gap-5 !mt-5">
                <div className="w-full bg-[#101010] p-12 rounded-[40px] space-y-6 flex flex-col items-center">
                  <h1 className="text-3xl font-semibold text-center font-syne leading-relaxed">Transforming SpokenWords into Text.</h1>
                  <p className="text-white/80 text-lg text-center leading-loose max-w-xl">
                    Effortless coding with AI Code Generator: Instant solutions for your programming needs.{" "}
                  </p>
                  <Link href="">
                    <button className="text-[#101010] bg-white px-6 py-3.5 rounded-xl font-semibold mt-5">Convert Now</button>
                  </Link>
                  <Image src="/features4.png" alt="image" width={538} height={538} className="mx-auto" />
                </div>
                <div className="w-full max-w-lg bg-[#101010] px-12 pt-16 rounded-[40px] space-y-3 flex flex-col">
                  <h1 className="text-3xl font-semibold font-syne leading-relaxed">Convert your texts into Lifelike Speech</h1>
                  <p className="text-white/80 text-lg leading-loose">Elevate Your Content with Expressive Narration: Discover Text-to-Voice Excellence. </p>
                  <Link href="">
                    <button className="text-[#101010] bg-white px-6 py-3.5 rounded-xl font-semibold mt-3">Convert Now</button>
                  </Link>
                  <Image src="/features5.png" alt="image" width={442} height={328} className="mx-auto !mt-20" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-16 py-6 mt-20">
          <div className="max-w-[1520px] mx-auto w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#c9fa4914] py-2 px-4 rounded-full flex justify-center items-center">
                <span className="text-sm text-[#C9FA49] uppercase font-syne">Coolest Features</span>
              </div>
              <h1 className="text-5xl leading-[1.3] max-w-2xl text-center font-syne font-bold">Another features only for your business</h1>
              <p className="max-w-xl text-center leading-relaxed text-lg text-white/70">
                Here are several features we provide to you to make the greatest CRM system for your business.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#adceff14] ring-1 ring-[#ffffff16] p-10 rounded-[33px] space-y-4 group hover:bg-[#c9fa4914] hover:ring-[#c9fa4952] transition duration-200">
                  <div className="ring-1 ring-[#FFFFFF24] bg-[#FFFFFF10] w-fit p-4 rounded-full group-hover:bg-[#c9fa4914] group-hover:ring-[#c9fa4952] transition duration-200">
                    <Image src={feature.image} alt="writio-features" width={30} height={30} />
                  </div>
                  <h1 className="text-2xl font-syne font-semibold">{feature.title}</h1>
                  <p className="text-white/80 font-light text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-4 md:px-16 py-6 mt-20">
          <div className="max-w-[1520px] mx-auto w-full">
            <Pricing />
          </div>
        </section>
        <section className="px-4 md:px-16 py-6 mt-20">
          <div className="max-w-[1720px] mx-auto w-full">
            <div className="relative rounded-[40px] form-border-gradient bg-gradient-to-br from-[#ffffff50] via-[#ffffff20] to-transparent p-12 backdrop-blur-lg w-full space-y-10">
              <div className="bg-[#FFFFFF18] py-2 px-4 rounded-full flex justify-center items-center w-fit">
                <span className="text-sm text-[#FFF] uppercase font-syne">questions & answers</span>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="w-full text-5xl font-semibold max-w-3xl leading-[1.3] font-syne">Common questions to know before use our software.</h1>
                <p className="w-full max-w-2xl leading-loose text-lg">
                  Here are several common question and answer that could help you understand our software before you use it.
                </p>
              </div>
              <div>
                <div>
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
