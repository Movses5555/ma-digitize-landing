"use client";
import React from "react";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-[14px] font-medium text-[#000000EB] ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full h-12 px-3  rounded-md text-[16px] transition-all duration-200
              border outline-none
              placeholder:text-[16px] placeholder:font-normal placeholder:leading-[150%] placeholder:tracking-[0px]
              ${!error ? "bg-white border-[#00000014] hover:border-[#00000026] placeholder:text-[#0000003D]" : "placeholder:text-[#899299] bg-[#FCF4F6] border-[#F9D2DA] "}
              disabled:bg-[#F5F5 font-f5] disabled:cursor-not-allowed disabled:opacity-50
            `}
            {...props}
          />
        </div>
        {
          !!error && (
            <div className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center">
                <Image 
                  src="/icons/error.svg"
                  alt="lock"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-[13px] font-medium text-[#DF1B41] ml-1">
                {error}
              </p>
            </div>
          )
        }
      </div>
    );
  }
);

Input.displayName = "Input";

