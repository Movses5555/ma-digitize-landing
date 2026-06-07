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
      <div className="h-[28px] w-fit bg-white border border-[#D1D5DC] px-3 rounded-lg text-[14px] text-[#4A5565] mb-4 lg:mb-5 flex items-center justify-center">
        <span className="text-[14px] text-[#0043C0] font-medium leading-[20px] tracking-[0px]">
          {subtitle}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-4 mb-8 md:mb-10 lg:mb-12">
        <h2 className="max-w-[520px] font-heading text-[28px] md:text-[32px] lg:text-[36px] text-center font-bold leading-[36px] md:leading-[40px] lg:leading-[44px] tracking-[0px] text-[#101828] mb-4">
          {title}
        </h2>
        <p className="text-[#4A5565] max-w-[764px] text-[18px] lg:text-[20px] font-normal leading-[28px] tracking-[0px]">
          {description}
        </p>
      </div>
    </>
  );
}
