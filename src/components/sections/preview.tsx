"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";

const previewItems = [
  { title: "Buttons, Inputs & Dropdowns", image: "/images/previews/preview_1.svg" },
  { title: "Navigation Systems", image: "/images/previews/preview_2.svg" },
  { title: "Tables & Data Views", image: "/images/previews/preview_3.svg" },
  { title: "Modals & Slideouts", image: "/images/previews/preview_4.svg" },
  { title: "Dashboards", image: "/images/previews/preview_5.svg" },
  { title: "Settings Pages", image: "/images/previews/preview_6.svg" },
];

export default function Preview() {

  const scrollToTop = () => {
    window.scrollTo({
      top: -100,
      behavior: "smooth",
    });
  }

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <SectionTitle
          subtitle="Insite The Kit"
          title="Sneak Peek Inside MA UI Kit"
          description="A preview of what&apos;s being built — full access arrives with Early Access. Join the waitlist to get notified when it goes live."
        />
        <div className="block lg:hidden w-full relative">
          <div className="absolute right-0 -top-[10px] z-20 bg-card-scroll-blur w-[16px] md:w-[60px] h-[270px] xs:h-[362px] sm:h-[370px] md:h-[270px]"></div>
        </div>
        <div className="w-full max-w-[1248px] overflow-x-auto no-scrollbar pb-6 md:pb-8">
          <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-6 pr-4 md:pr-10 lg:pr-0 lg:px-0 mx-auto min-w-max lg:min-w-full">
            {previewItems.map((item, index) => (
              <div 
                key={index}
                className="relative aspect-32/28 md:aspect-40/28 rounded-[17px] border border-[#00000014] overflow-hidden bg-[#F8F9FA] shadow-sm max-w-[400px] w-[75vw] md:w-[40vw] lg:w-full bg-preview-card" 
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover aspect-32/28 md:aspect-40/28 rounded-[18px]"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10 bg-white/20">
                  <div className="w-12 h-12 bg-[#FFFFFFE5] rounded-lg shadow-lock flex items-center justify-center border border-[#E1E3E5] mb-2">
                    <Image 
                      src="/icons/lock.svg"
                      alt="lock"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="bg-[#FFFFFFE5] py-1 px-3 rounded-[6px]">
                    <span className="text-[12px] font-semibold text-[#000000C2] leading-[18px] tracking-[0px]">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Button
            classNames="h-12 px-6"
            onClick={scrollToTop}
          >
            <span className="text-[#FFFFFFFA] text-[14px] sm:text-[16px] font-bold leading-[150%] tracking-[0px]">
              Join the Waitlist
            </span>
          </Button>
          {/* <p className="text-[#0000008F] text-[14px] font-medium">
            Unlock complete access when we launch
          </p> */}
        </div>
      </div>
    </section>
  );
}
