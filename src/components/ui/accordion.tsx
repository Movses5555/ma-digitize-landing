"use client";

import Image from "next/image";
import type { ReactNode } from "react";

export interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] transition-colors duration-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 pb-5 pt-6 text-left"
      >
        <span className="text-[16px] font-semibold leading-[150%] tracking-[0px] text-[#111827]">
          {question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center">
          <Image
            src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
            alt={isOpen ? "Collapse" : "Expand"}
            width={32}
            height={32}
          />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-[#E5E7EB]" />
          <div className="space-y-4 px-6 pb-6 pt-5 text-[15px] font-normal leading-[160%] tracking-[0px] text-[#4B5563]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
