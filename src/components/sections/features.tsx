import Image from "next/image";
import SectionTitle from "../ui/section-title";
import Card from "../ui/card";
import { RevealCard } from "../ui/reveal";

const features = [
  {
    icon: "/icons/box.svg",
    title: "Growing Component System",
    description:
      "Core, reusable UI components built for real-world web apps.",
  },
  {
    icon: "/icons/layers.svg",
    title: "Solid Design Foundations",
    description:
      "Colors, typography, spacing, effects, icons, and design tokens — structured from day one.",
  },
  {
    icon: "/icons/layout.svg",
    title: "Real Application Screens",
    description:
      "Carefully designed dashboards, settings, and informational pages — more coming with each release.",
  },
];

export default function Features() {
  return (
    <Card
      id="features"
      subtitle="Design System Overview"
      title="Design Faster. Design Better. Design Consistently."
      description="A structured Figma design system built to create scalable, modern web app interfaces."
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {features.map((feature, index) => (
          <RevealCard
            key={feature.title}
            index={index}
            className={`group flex flex-col items-center rounded-xl border-[1.5px] border-[#E5E7EB] bg-[#F9FAFB] p-4 md:p-5 text-center shadow-card transition-all duration-300 hover:border-[#E1E3E5] hover:bg-white hover:shadow-xl hover:shadow-[#0047FF]/5 lg:p-6 ${
              index === 2
                ? "md:col-span-2 lg:col-span-1"
                : ""
            }`}
          >
            <div className="relative mb-4 flex h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-lg border border-[#E1E3E5] bg-white transition-transform group-hover:scale-110">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={16}
                height={16}
                className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            </div>
            <p className="mb-1 text-[18px] font-semibold leading-[28px] tracking-[0px] text-[#101828]">
              {feature.title}
            </p>
            <p className="whitespace-pre-line text-[16px] max-w-[380px] font-normal leading-[24px] tracking-[0px] text-[#4A5565]">
              {feature.description}
            </p>
          </RevealCard>
        ))}
      </div>
    </Card>
  )

  return (
    <section className="flex w-full flex-col items-center px-4 md:px-6">
      <div className="flex w-full flex-col items-center rounded-2xl border-[1.5px] border-[#E1E3E5] bg-white px-4 md:px-5 lg:px-[72px] py-14 lg:py-24">
        <SectionTitle
          subtitle="Design System Overview"
          title="Design Faster. Design Better. Design Consistently."
          description="A structured Figma design system built to create scalable, modern web app interfaces."
        />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group flex flex-col items-center rounded-xl border-[1.5px] border-[#00000014] bg-[#FAFBFD] p-4 text-center shadow-card transition-all duration-300 hover:border-[#E1E3E5] hover:bg-white hover:shadow-xl hover:shadow-[#0047FF]/5 md:p-6 ${
                index === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-[#E1E3E5] bg-white transition-transform group-hover:scale-110">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="mb-1 text-[16px] font-semibold leading-[150%] tracking-[0px] text-[#000000C2]">
                {feature.title}
              </p>
              <p className="whitespace-pre-line text-[14px] max-w-[380px] font-normal leading-[150%] tracking-[0px] text-[#0000008F]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

