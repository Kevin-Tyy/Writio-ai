"use client";

import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { services } from "./constants/data";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="space-y-4">
      {services.map((item, index) => (
        <div className="space-y-4 border border-white/60 rounded-[56px] py-8 px-12">
          <div className={`flex justify-between items-center `}>
            <h1
              className="text-[27px] font-semibold cursor-pointer"
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
                
              }} className="cursor-pointer">
              {isOpen && currentItem === index ? <Minus size={40}/> : <Plus size={40}/>}
            </div>
          </div>
          <Collapse isOpened={isOpen && currentItem === index}>
            <p className="max-w-[1320px] text-lg pb-4">{item.answer}</p>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
