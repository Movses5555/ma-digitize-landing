"use client";

export default function SectionTitle({
  title,
  description,
  subtitle,
}: {
  title: string;
  description: string;
  subtitle: string;
}) {

  return (
    <>
        <div className="h-[28px] w-fit bg-white border border-[#D1D5DC] px-3 rounded-full text-[14px] text-[#4A5565] mb-4 lg:mb-5 flex items-center justify-center">
          <span className="text-[14px] text-[#0043C0] font-medium leading-[20px] tracking-[0px]">
            {subtitle}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-8">
          <h2 className="max-w-[500px] font-heading text-[22px] md:text-[28px] lg:text-[32px] text-center font-bold leading-[120%] tracking-[0px] text-[#000000EB] mb-2">
            {title}
          </h2>
          <p className="text-[#0000008F] max-w-[600px]  text-[16px] font-normal leading-[150%] tracking-[0px]">
            {description}
          </p>
        </div>
    </>
  );
}
