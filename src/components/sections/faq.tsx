"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion";
import SectionTitle from "../ui/section-title";
import Card from "../ui/card";

const faqs = [
  {
    question: "What is Early Access?",
    answer: (
      <>
        <p className="mb-0">
          Early Access gives you the opportunity to get MA UI Kit before the full release.
        </p>
        <p>
          You&apos;ll receive version 0.9 of the product (around 30-40% complete) at a discounted price.
        </p>
        <p>
          All Early Access users automatically receive every future update, including the full 1.0 release and all improvements after it.
        </p>
      </>
    ),  
  },
  {
    question: "When will it launch?",
    answer:
      "The full release is planned for later this year. Early Access will be available first, followed by continuous updates until the kit reaches version 1.0 and beyond. Join the waitlist to be notified the moment Early Access opens.",
  },
  {
    question: "What will the pricing be?",
    answer:
      "Early Access will launch at a discounted price. The final full-release price will be higher. Joining the waitlist ensures you get the lowest price and early access before the public release.",
  },
  {
    question: "Can I use MA UI Kit for client and commercial projects?",
    answer: "Yes. Your license allows you to use MA UI Kit for personal projects, client work, freelance work, and commercial products. You can build unlimited designs with it. You may not resell, redistribute, or repackage the kit itself as a competing product.",
  },
  {
    question: "Do I need a paid Figma account?",
    answer: (
      <>
        <p className="mb-0">
          No. MA UI Kit works on both Free and Paid Figma plans.
        </p>
        <p>
          The difference is how you use it:
        </p>
        <div>
          <p className="font-bold text-[#4A5565]">Free Plan</p>
          <p className="mt-1">
            You&apos;ll use the kit by copying and pasting components into your project files. All styles and components remain fully editable.
          </p>
        </div>
        <div>
          <p className="font-bold text-[#4A5565]">Paid Plan</p>
          <p className="mt-1">
            You can publish the kit as a Team Library, allowing you to sync components, styles, and variables across all your project files automatically.
          </p>
        </div>
      </>
    ),
  },
  {
    question: "Will I get updates?",
    answer: (
      <>
        <p className="mb-0">
          Yes — all users receive updates.
        </p>
        <p>
          Early Access customers get every update, including new components, improvements, and the full v1.0 release.
        </p>
        <p>
          When a new version is released, you&apos;ll be notified and can duplicate the updated file and replace your previous version. Full instructions are provided in the documentation.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <Card
      id="faq"
      subtitle="Common Questions"
      title="Frequently Asked Questions"
      description="Got questions? Here&apos;s everything you need to know about Early Access, pricing, updates, and more."
    >
      <div className="flex w-full flex-col gap-4 md:gap-4 max-w-[764px] mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </Card>
  )

  return (
    <section className="flex w-full flex-col items-center px-4 md:px-6">
      <div className="flex w-full flex-col items-center rounded-2xl border-[1.5px] border-[#E1E3E5] bg-white py-14 lg:py-24">
        <SectionTitle
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Got questions? Here&apos;s everything you need to know about Early Access, pricing, updates, and more."
        />
        <div className="flex w-full max-w-[872px] flex-col gap-4 px-4 md:gap-4 md:px-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
