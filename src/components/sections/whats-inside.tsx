import Image from "next/image";

const features = [
  { title: "300+ production-ready components" },
  { title: "50+ full web app screens" },
  { title: "Layout & dashboard templates" },
  { title: "Auto-layout everywhere" },
  { title: "Responsive-ready design tokens" },
  { title: "Light & Dark modes" },
  { title: "Complete color system" },
  { title: "Typography & spacing scale" },
  { title: "Shadows & elevation system" },
  { title: "Icons & UI patterns" },
  { title: "Forms, tables, modals & menus" },
  { title: "Notifications & system states" },
];

export default function WhatsInside() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#000000EB] mb-3">
            What's Inside
          </h2>
          <p className="text-[#0000008F] text-[15px] md:text-[16px] font-normal">
            Everything you need to build production-ready web apps.
          </p>
        </div>
        <div className="w-full max-w-[1036px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {features.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-4 md:px-5 py-4 rounded-xl border-[1.5px] border-[#00000014] bg-[#FAFBFD]"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-[#0047FF] rounded-full flex items-center justify-center">
                <Image 
                  src="/icons/checkbox.svg"
                  alt="checkbox"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-[16px] font-normal text-[#000000C2] leading-[150%] tracking-[0px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

