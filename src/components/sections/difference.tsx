import Image from "next/image";
import SectionTitle from "../ui/section-title";
import Card from "../ui/card";

const differences = [
  {
    icon: "/icons/workflow.svg",
    title: "Faster workflows",
    desc: "Assemble layouts quickly using clear structure and reusable patterns.",
    gridClass: " md:col-span-2"
  },
  {
    icon: "/icons/pixel.svg",
    title: "Consistent by default",
    desc: "Clear rules keep your designs clean and predictable.",
    gridClass: " md:col-span-2"
  },
  {
    icon: "/icons/revision.svg",
    title: "Fewer revisions",
    desc: "Strong foundations reduce mistakes and rework.",
    gridClass: " md:col-span-2"
  },
  {
    icon: "/icons/handoff.svg",
    title: "Cleaner developer handoff",
    desc: "Logical naming, structure, and tokens developers understand.",
    gridClass: " md:col-span-3"
  },
  {
    icon: "/icons/scale.svg",
    title: "Built to scale",
    desc: "Add features without breaking consistency.",
    gridClass: " md:col-span-3"
  }
];

export default function Difference() {
  return (
    <Card
      id="difference"
      subtitle="Why It Matters"
      title="Why MA UI Kit Makes a Difference"
      description="Achieve faster workflows, cleaner designs, and smoother collaboration — all with a system built for modern web apps."
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
        {differences.map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center p-4 md:p-5 lg:p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-center shadow-card hover:shadow-md transition-all duration-300 ${item.gridClass}`}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center border border-[#E5E7EB] mb-4 shadow-card group-hover:scale-110 transition-transform relative">
              <Image 
                src={item.icon}
                alt={item.title}
                width={16}
                height={16}
                className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            </div>
            <h3 className="font-semibold text-[16px] md:text-[18px] text-[#101828] leading-[24px] md:leading-[28px] tracking-[0px] mb-1">
              {item.title}
            </h3>
            <p className="text-[#4A5565] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )


  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-8 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <SectionTitle
          subtitle="Why It Matters"
          title="Why MA UI Kit Makes a Difference"
          description="Achieve faster workflows, cleaner designs, and smoother collaboration — all with a system built for modern web apps."
        />
        <div className="w-full max-w-[1036px] grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
          {differences.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-start p-4 md:p-6 rounded-2xl border-[1.5px] border-[#00000014] bg-[#FDFDFD] shadow-card hover:shadow-md transition-all duration-300 ${item.gridClass}`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#E1E3E5] mb-3 md:mb-4 shadow-sm">
                <Image 
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-semibold text-[16px] text-[#000000C2] leading-[150%] tracking-[0px] mb-1">
                {item.title}
              </h3>
              <p className="text-[#0000008F] text-[14px] leading-[150%] tracking-[0px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

