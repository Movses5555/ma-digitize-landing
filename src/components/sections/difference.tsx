import Image from "next/image";

const differences = [
  {
    icon: "/icons/workflow.svg",
    title: "Make your workflow 3× faster",
    desc: "Quickly assemble layouts using ready patterns.",
    gridClass: "md:max-w-[400px] md:col-span-2"
  },
  {
    icon: "/icons/pixel.svg",
    title: "Deliver pixel-perfect designs",
    desc: "Consistent rules across your product.",
    gridClass: "md:max-w-[400px] md:col-span-2"
  },
  {
    icon: "/icons/revision.svg",
    title: "Reduce revision cycles",
    desc: "Clear structure means fewer mistakes.",
    gridClass: "md:max-w-[400px] md:col-span-2"
  },
  {
    icon: "/icons/handoff.svg",
    title: "Improve developer handoff",
    desc: "Organized components, naming, and structure.",
    gridClass: "md:max-w-[612px] md:col-span-3"
  },
  {
    icon: "/icons/scale.svg",
    title: "Scale products easily",
    desc: "Add features without breaking consistency.",
    gridClass: "md:max-w-[612px] md:col-span-3"
  }
];

export default function Difference() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-8 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#000000EB] mb-2">
            Why MA UI Kit Makes a Difference
          </h2>
          <p className="max-w-[700px] text-[#0000008F] text-[15px] md:text-[16px] font-normal leading-[150%]">
            Achieve faster workflows, cleaner designs, and smoother collaboration — all with a system built for modern web apps.
          </p>
        </div>
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

