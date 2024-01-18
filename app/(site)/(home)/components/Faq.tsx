"use client";

import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { faqs } from "./constants/data";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="space-y-4">
      {faqs.map((item, index) => (
        <div className="border border-white/60 rounded-3xl min-[400px]:rounded-[56px] py-8 px-6 md:px-12">
          <div className={`flex justify-between items-center`}>
            <h1
              className="text-xl md:text-[27px] font-semibold cursor-pointer font-syne leading-relaxed"
              onClick={() => {
                if (currentItem === index) {
                  return setIsOpen((prev) => !prev);
                }
                setIsOpen(true);
                setCurrentItem(index);
              }}>
              {item.question}
            </h1>
            <div
              onClick={() => {
                if (currentItem === index) {
                  return setIsOpen((prev) => !prev);
                }
                setIsOpen(true);
                setCurrentItem(index);
              }}
              className="cursor-pointer hidden lg:block">
              {isOpen && currentItem === index ? <Minus size={40} /> : <Plus size={40} />}
            </div>
            <div
              onClick={() => {
                if (currentItem === index) {
                  return setIsOpen((prev) => !prev);
                }
                setIsOpen(true);
                setCurrentItem(index);
              }}
              className="cursor-pointer block lg:hidden">
              {isOpen && currentItem === index ? <Minus size={28} /> : <Plus size={28} />}
            </div>
          </div>
          <Collapse isOpened={isOpen && currentItem === index}>
            <p className="max-w-[1320px] text-lg py-4 text-[#101010] dark:text-white/80">{item.answer}</p>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
