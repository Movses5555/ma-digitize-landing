"use client";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Early Access?",
    answer: "Early Access gives you the opportunity to get the MA UI Kit before the full release. You'll receive version 0.9 of the product — around 30–40% completed — at a discounted price. All Early Access users automatically receive every future update, including the full release and all improvements after it."
  },
  {
    question: "When will it launch?",
    answer: "The full release is planned for this year. Early Access will be available first, followed by continuous updates until the kit reaches version 1.0 and beyond. Join the waitlist to be notified the moment Early Access opens."
  },
  {
    question: "What will the pricing be?",
    answer: "Early Access will launch at a discounted price. The final full-release price will be higher. Joining the waitlist ensures you get the lowest price and early access before the public release."
  },
  {
    question: "Do I need Figma?",
    answer: "Yes — the MA UI Kit is designed exclusively for Figma. You can use it with a free Figma account, and no additional plugins are required.",
    note: "Some advanced features, such as Figma Variables (used for themes, colors, spacing, and other system values), require a paid Figma plan to edit. Free users can still view and use the pre-configured styles."
  },
  {
    question: "Can I use it for client and commercial projects?",
    answer: "Yes. Your license allows you to use the UI Kit for personal projects, client work, freelance work, and commercial products. You can build unlimited designs with it."
  },
  {
    question: "Will I get updates?",
    answer: "Yes — all users receive updates. Early Access customers get every update, including feature additions, improvements, component expansions, and the complete version 1.0 release."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#000000EB] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0000008F] text-[15px] md:text-[16px] font-normal">
            Got questions? We've got answers about Early Access, pricing, updates, and more.
          </p>
        </div>
        <div className="w-full max-w-[872px] flex flex-col gap-4 md:gap-5 lg:gap-6 px-4 md:px-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              note={faq.note} 
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
