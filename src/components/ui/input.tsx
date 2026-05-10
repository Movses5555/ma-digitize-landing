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
              border outline-none bg-white
              placeholder:text-[16px] placeholder:font-normal placeholder:leading-[150%] placeholder:tracking-[0px] placeholder:text-[#6A7282]
              
              focus:border-2  focus:shadow-[0_2px_4px_0_#6C757D0A,0_16px_32px_-4px_#6C757D1A]

              disabled:bg-[#F5F5 font-f5] disabled:cursor-not-allowed disabled:opacity-50
              ${error ? "border-[#F9D2DA] focus:border-[#FB2C36]" : "border-[#D1D5DC] focus:border-[#0059FF]"}
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
              <p className="text-[14px] font-normal text-[#E7000B] ml-1">
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

