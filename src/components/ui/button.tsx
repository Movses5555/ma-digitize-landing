"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  classNames?: string;
  loadingText?: string;
  size?: "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      children, 
      isLoading, 
      disabled, 
      classNames, 
      loadingText = "Joining...",
      size = "md",
      ...props 
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        data-loading={isLoading ? "" : undefined}
        className={`
          flex items-center justify-center
          bg-[#0043C0] text-[#FFFFFF]
          border-b-2 border-[#00000014]
          enabled:hover:bg-[#003699]
          focus:bg-[#0043C0] focus:outline-none
          focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#0059FF]
          w-full rounded-lg
          font-bold text-[16px]
          leading-[150%] tracking-[0px]
          transition-all duration-200
          disabled:bg-[#F3F4F6] disabled:border-b-[#E5E7EB] disabled:pointer-events-none disabled:text-[#99A1AF]
          disabled:**:text-[#99A1AF]
          disabled:data-loading:bg-[#0043C0] disabled:data-loading:border-b-[#00000014]
          disabled:data-loading:text-[#FFFFFF] disabled:data-loading:**:text-[#FFFFFF]
          cursor-pointer disabled:data-loading:cursor-wait
          ${classNames}
        `}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div
              className="h-4 w-4 shrink-0 animate-spin rounded-full"
              style={{
                background:
                  "conic-gradient(from 200deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0.45) 55deg, rgba(180, 190, 255, 0.2) 140deg, rgba(255, 255, 255, 0) 290deg)",
                WebkitMaskImage:
                  "radial-gradient(closest-side, transparent 62%, black 68%)",
                maskImage: "radial-gradient(closest-side, transparent 62%, black 68%)",
              }}
            />
            <span className="text-[14px] whitespace-nowrap font-bold leading-[20px] tracking-[0px] text-inherit">
              {loadingText}
            </span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
