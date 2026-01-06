import Image from "next/image";

const features = [
  {
    icon: "/icons/box.svg",
    title: "300+ Ready UI Components",
    description: "Everything you need to build production-level web apps."
  },
  {
    icon: "/icons/layers.svg",
    title: "Full Design System Foundations",
    description: "Color, typography, grids, spacing, shadows, states, interactions."
  },
  {
    icon: "/icons/layout.svg",
    title: "Reusable Templates & Layouts",
    description: "Pre-built screens for dashboards, forms, tables, modals & more."
  }
];


export default function Features() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] tracking-[0px] text-[#000000EB] mb-2">
            Design Faster. Design Better. Design Consistently.
          </h2>
          <p className="text-[#0000008F] text-[16px] font-normal leading-[150%] tracking-[0px]">
            A complete Figma library with everything you need to build modern web app interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="max-w-[400px] group p-4 md:p-6 rounded-2xl border-[1.5px] border-[#00000014] bg-[#FAFBFD] shadow-card hover:bg-white hover:border-[#E1E3E5] hover:shadow-xl hover:shadow-[#0047FF]/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 border border-[#E1E3E5] group-hover:scale-110 transition-transform relative">
                <Image 
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="text-[16px] font-semibold text-[#000000C2] mb-1 leading-[150%] tracking-[0px]">
                {feature.title}
              </p>
              <p className="text-[14px] font-normal text-[#0000008F] leading-[150%] tracking-[0px] ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

