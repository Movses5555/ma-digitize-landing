"use client";
import { useState } from "react";
import Image from "next/image";

interface AccordionItemProps {
  question: string;
  answer: string;
  note?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  note,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div 
      className="w-full bg-[#FAFBFD] border-[1.5px] border-[#00000014] py-3 rounded-xl overflow-hidden transition-all duration-300"
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 text-left cursor-pointer transition-colors"
      >
        <span 
          className={`text-[16px] text-[#000000EB] leading-[150%] tracking-[0px] ${
            isOpen ? "font-bold" : "font-normal"
          }`}
        >
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <Image 
            src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
            alt={isOpen ? "minus" : "plus"}
            width={32}
            height={32}
          />
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out px-4 ${
          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#0000008F] text-[16px] leading-[150%] tracking-[0px] border-t border-[#00000014] pt-4">
          {answer}
        </div>
        {!!note && (
          <p className="text-[16px] text-[#0000008F] mt-6 font-normal leading-[150%] tracking-[0px]">
            <span className="font-bold">Note: </span>
            <span>{note}</span>
          </p>
        )}
      </div>
    </div>
  );
}

