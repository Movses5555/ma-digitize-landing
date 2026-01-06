import Image from "next/image";
import JoinWaitlist from "@/components/ui/join-waitlist"

export default function Hero() {
  return (
    <section id="waitlist" className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 md:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="bg-[#F1F2F3] border border-[#E1E3E5] px-4 py-1.5 rounded-full text-[14px] text-[#000000C2] mb-5 md:mb-6 lg:mb-10">
          <span className="leading-[150%] tracking-[0px]">MA UI Kit • Coming Soon</span>
        </div>
        <h2 className="max-w-[329px] md:max-w-[680px] lg:max-w-[900px] font-heading text-center text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-[120%] tracking-[0px] text-[#000000EB] mb-2 md:mb-4 lg:mb-6">
          MA UI Kit: A Modern Design System for Web Apps
        </h2>
        <p className="max-w-[329px] md:max-w-[726px] lg:max-w-[754px] text-center text-[#0000008F] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[0px] mb-5 md:mb-6 lg:mb-10">
          Build clean, consistent, production-ready web app interfaces 3x faster with a modern, reusable Figma UI kit.
        </p>
        <JoinWaitlist isShowText />
        <div className="mt-6 md:mt-10 lg:mt-16 w-full max-w-[1200px] bg-white rounded-[17px] border border-[#E1E3E5]">
          <div className="relative aspect-[1200/502] w-full overflow-hidden rounded-[17px]">
            <Image 
              src="/hero-preview.svg"
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
