import Image from "next/image";
import JoinWaitlist from "@/components/ui/join-waitlist"
import Card from "../ui/card";

export default function Hero() {

  // return (
  //   <Card
  //     id="waitlist"
  //     subtitle="Design System Overview"
  //     title="MA UI Kit: A Modern Design System for Web Apps"
  //     description="Build clean, consistent, production-ready web app interfaces with a scalable Figma design system."
  //   >
  //     <JoinWaitlist isShowText />
  //   </Card>
  // )
  return (
    <section id="waitlist" className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-5 lg:px-[72px] w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="bg-white border border-[#D1D5DC] px-4 py-1.5 rounded-lg text-[14px] text-[#4A5565] mb-5 md:mb-6 lg:mb-10 flex items-center justify-center gap-[7px]">
          <div className="w-[6px] h-[6px] bg-[#615FFF] rounded-full"></div>
          <span className="leading-[20px] tracking-[0px]">
            MA UI Kit — Coming Soon
          </span>
        </div>
        <h2 className="max-w-[329px] md:max-w-[764px] lg:max-w-[1024px] font-heading text-center text-[32px] md:text-[40px] lg:text-[56px] font-bold leading-[40px] md:leading-[48px] lg:leading-[68px] tracking-[0px] text-[#000000EB] mb-2 md:mb-4 lg:mb-6">
          MA UI Kit: A Modern Design System for Web Apps
        </h2>
        <p className="max-w-[329px] md:max-w-[540px] lg:max-w-[600px] text-center text-[#4A5565] text-[18px] lg:text-[20px] font-normal leading-[28px] tracking-[0px] mb-8 md:mb-10 lg:mb-12">
          Build clean, consistent, production-ready web app interfaces with a scalable Figma design system.
        </p>
        <JoinWaitlist isShowText />
        <div className="mt-8 md:mt-12 lg:mt-14 w-full bg-white">
          <div className="relative aspect-[1248/569.44] w-full overflow-hidden rounded-[17px]">
            <Image 
              src="/hero_preview.svg"
              alt="MA UI Kit Dashboard Preview"
              fill
              priority
              fetchPriority="high"
              className="object-cover rounded-[17px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
