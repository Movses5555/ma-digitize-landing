import Image from "next/image";

const audiences = [
  { icon: "/icons/designers.svg", title: "UI/UX Designers" },
  { icon: "/icons/web-app.svg", title: "Web App Designers" },
  { icon: "/icons/product.svg", title: "Product Designers" },
  { icon: "/icons/freelancers.svg", title: "Freelancers" },
  { icon: "/icons/teams.svg", title: "Design Teams & Agencies" },
  { icon: "/icons/saas.svg", title: "SaaS Founders" },
];

export default function Audience() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-6 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] tracking-[0px] text-[#000000EB] mb-2">
            Who This UI Kit Is For
          </h2>
          <p className="text-[#0000008F] text-[16px] font-normal leading-[150%] tracking-[0px]">
            Perfect for professionals who design modern web applications.
          </p>
        </div>
        <div className="w-full max-w-[1036px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-[14px] md:py-[22px] box-border rounded-2xl border-[1.5px] border-[#00000014] bg-[#FDFDFD] shadow-card hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-[#E1E3E5] group-hover:scale-110 transition-transform relative">
                <Image 
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-[16px] text-[#000000C2] leading-[150%] tracking-[0px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
