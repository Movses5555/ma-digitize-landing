"use client"

import { Fragment } from "react";
import SectionTitle from "../ui/section-title";
import Image from "next/image";

const comparisonRows = [
  {
    early: "Complete design foundations",
    full: "Polished and refined foundations",
  },
  {
    early: "Core component library",
    full: "Expanded component library (300+ components and variants)",
  },
  {
    early: "Web application screen examples (mobile coming later in v1.0)",
    full: "Full web application screens (50+ screens)",
  },
  {
    early: "Light mode (dark mode coming later in v1.0)",
    full: "Full dark mode (web & mobile)",
  },
  {
    early: "Auto Layout & variables",
    full: "Complete mobile UI system (components + screens)",
  },
  {
    early: "Consistent naming & structure",
    full: "Full polished documentation & structure",
  },
];

function splitPrimaryNote(text: string): { primary: string; note?: string } {
  const match = text.match(/^(.+?)(\s*\([^)]+\))\s*$/);
  if (match?.[1]?.trim() && match[2]) {
    return { primary: match[1].trim(), note: match[2].trim() };
  }
  return { primary: text };
}

function FeatureCell({
  text,
  iconTone = "purple",
}: {
  text: string;
  iconTone?: "purple" | "blue";
}) {
  const { primary, note } = splitPrimaryNote(text);
  const circle =
    iconTone === "blue"
      ? "bg-[#0043C0]"
      : "bg-[#6366F1]";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${circle}`}
      >
        <Image
          src="/icons/checkbox_2.svg"
          alt="checkbox"
          width={20}
          height={20}
        />
      </div>
      <span className="text-[16px] font-normal leading-[28px] tracking-[0px] text-[#4A5565]">
        {primary}
        {note ? (
          <>
            {" "}
            <span>
              {note}
            </span>
          </>
        ) : null}
      </span>
    </div>
  );
}

function MobileRoadmapSection({
  title,
  rows,
  pick,
}: {
  title: string;
  rows: typeof comparisonRows;
  pick: "early" | "full";
}) {
  return (
    <div className="w-full">
      <p className="text-base font-medium leading-[24px] text-[#4A5565] mb-2">
        {title}
      </p>
      <div
        className="mb-4 h-3 w-full border-y border-[#E5E7EB] bg-[#F3F4F6]"
        aria-hidden
      />
      <div className="flex flex-col divide-y divide-[#F2F4F7]">
        {rows.map((row, index) => (
          <div key={index} className="py-4 first:pt-0">
            <FeatureCell text={row[pick]} iconTone="blue" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatsInside() {
  return (
    <section className="flex w-full flex-col items-center px-4 md:px-6">
      <div className="flex w-full flex-col items-center rounded-2xl border-[1.5px] border-[#E1E3E5] bg-white px-4 py-14 md:px-6 lg:py-24">
        <SectionTitle
          subtitle="Features & Contents"
          title="What MA UI Kit Includes"
          description="Available at Early Access, with much more coming in v1.0."
        />

        <div className="w-full max-w-[1248px] pt-0 md:pt-2 lg:pt-4">
          <div className="flex flex-col gap-10 md:hidden">
            <MobileRoadmapSection
              title="Early Access (v0.9)"
              rows={comparisonRows}
              pick="early"
            />
            <MobileRoadmapSection
              title="Full Release (v1.0)"
              rows={comparisonRows}
              pick="full"
            />
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-x-12 border-b border-[#F2F4F7] pb-4 lg:gap-x-20">
              <p className="text-base font-medium leading-[24px] text-[#4A5565]">
                Early Access (v0.9)
              </p>
              <p className="text-base font-medium leading-[24px] text-[#4A5565]">
                Full Release (v1.0)
              </p>
            </div>
            <div
              className="h-3 w-full border-y border-[#E5E7EB] bg-[#F3F4F6]"
              aria-hidden
            />
            <div className="flex flex-col">
              {comparisonRows.map((row, index) => {
                const isLast = index === comparisonRows.length - 1;
                return (
                  <Fragment key={index}>
                    <div className={`grid grid-cols-2 gap-x-12 py-6 lg:gap-x-20 h-[80px] lg:h-22 items-center`}>
                      <FeatureCell text={row.early} />
                      <FeatureCell text={row.full} />
                    </div>
                    {
                      !isLast && (
                        <div className="border-b border-[#E5E7EB]" />
                      )
                    }
                  </Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

