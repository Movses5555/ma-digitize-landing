"use client"
import { Button } from "../ui/button";

const phases = [
  {
    number: 1,
    status: "NOW LIVE",
    title: "Phase 1 — Coming Soon",
    subtitle: "(Current Phase)",
    features: [
      "Sneak peeks & behind-the-scenes",
      "Blurred previews",
      "Join the waitlist for Early Access updates",
    ],
    active: true,
  },
  {
    number: 2,
    status: "EARLY-BIRD PRICING",
    title: "Phase 2 — Early Access",
    subtitle: "(v0.9)",
    features: [
      "Get access to version 0.9 (30–40% complete)",
      "Purchase at a discounted Early Access price",
      "Provide feedback & help shape the final UI Kit",
      "Receive every future update automatically — including the full v1.0 release and all improvements beyond it",
    ],
    active: false,
  },
  {
    number: 3,
    status: "FINAL VERSION",
    title: "Phase 3 — Full Release",
    subtitle: "(v1.0)",
    features: [
      "Complete component library",
      "All templates, pages, and variants",
      "Fully polished, documented Figma file",
      "Public release at full price",
    ],
    active: false,
  },
];

export default function Timeline() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#000000EB] mb-3">
            Release Timeline
          </h2>
          <p className="text-[#0000008F] text-[15px] md:text-[16px] font-normal leading-[150%]">
            See how the MA UI Kit moves from early previews to the full polished v1.0 release.
          </p>
        </div>
        <div className="block lg:hidden w-full relative">
          <div className="absolute right-0 -top-[10px] z-10 bg-card-scroll-blur w-[16px] md:w-[60px] h-[500px]"></div>
        </div>
        <div className="relative w-full max-w-[1296px] overflow-x-auto no-scrollbar px-0 lg:px-6 pb-4">
          <div className="relative flex lg:grid lg:grid-cols-3 gap-3 md:gap-6 px-4 md:px-8 lg:px-0 pr-10 lg:mx-auto min-w-max lg:min-w-full">
            <div className="absolute left-10 right-10 top-10 bg-[#E1E3E5] h-[2px]"></div>
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative z-0 w-[320px] md:w-[400px] lg:w-full flex flex-col items-center justify-between p-4 md:p-6 lg:p-8 bg-[#FAFBFD] shadow-card rounded-[16px] border-[1.5px] ${
                  phase.active 
                    ? "border-[#0043C0]" 
                    : "border-[#00000014]"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 bg-[#FFFFFF] rounded-full border-[3px] flex items-center justify-center text-[32px] leading-[48px] tracking-[0px] font-heading font-bold ${
                    phase.active ? "border-[#0043C0] text-[#0043C0]" : "border-[#E1E3E5] text-[#0000004D]"
                  }`}>
                    {phase.number}
                  </div>

                  <div className={`my-4 md:my-5 lg:my-6 px-4 py-[6px] rounded-full text-[12px] leading-[18px] tracking-[0.5px] font-bold  ${
                    phase.active ? "bg-[#0047FF] text-[#FFFFFFFA]" : "bg-[#F1F2F3] text-[#000000C2] border border-[#E1E3E5]"
                  }`}>
                    {phase.status}
                  </div>

                  <h3 className="font-heading text-[16px] font-bold text-[#000000EB] mb-1 leading-[19.2px] tracking-[0px]">
                    {phase.title}
                  </h3>
                  <p className="text-[14px] text-[#0000008F] leading-[150%px] tracking-[0px] mb-4 md:mb-5 lg:mb-6">
                    {phase.subtitle}
                  </p>
                  <div className="w-full">
                    <ul className="space-y-3">
                      {phase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex gap-2 ">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                            phase.active ? "bg-[#0043C0]" : "bg-[#899299]"
                          }`} />
                          <span className="text-[14px] leading-[150%] tracking-[0px] text-[#000000C2]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {phase.active && (
                  <div className="w-full">
                    <Button
                      onClick={scrollToTop}
                      classNames='h-12'
                    >
                      <span className="text-[#FFFFFFFA] text-[14px] font-bold leading-[170%] tracking-[0%]">
                        Join Waitlist
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
