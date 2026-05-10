import Image from "next/image";
import JoinWaitlist from "@/components/ui/join-waitlist"

export default function Hero() {
  return (
    <section id="waitlist" className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 md:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="bg-white border border-[#D1D5DC] px-4 py-1.5 rounded-full text-[14px] text-[#4A5565] mb-5 md:mb-6 lg:mb-10 flex items-center justify-center gap-2">
          <div className="w-[6px] h-[6px] bg-[#615FFF] rounded-full"></div>
          <span className="leading-[150%] tracking-[0px]">
            MA UI Kit — Coming Soon
          </span>
        </div>
        <h2 className="max-w-[329px] md:max-w-[680px] lg:max-w-[900px] font-heading text-center text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-[120%] tracking-[0px] text-[#000000EB] mb-2 md:mb-4 lg:mb-6">
          MA UI Kit: A Modern Design System for Web Apps
        </h2>
        <p className="max-w-[329px] md:max-w-[540px] lg:max-w-[600px] text-center text-[#0000008F] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[0px] mb-5 md:mb-6 lg:mb-10">
          Build clean, consistent, production-ready web app interfaces with a scalable Figma design system.
        </p>
        <JoinWaitlist isShowText />
        <div className="mt-6 md:mt-10 lg:mt-16 w-full max-w-[1240px] bg-white rounded-[17px] border border-[#E1E3E5]">
          <div className="relative aspect-1240/520 w-full overflow-hidden rounded-[17px]">
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
