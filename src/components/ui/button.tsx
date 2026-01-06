"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  classNames?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, disabled, classNames, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          flex items-center justify-center
          bg-[#0043C0] text-[#FFFFFFFA]
          w-full rounded-lg
          font-bold text-[16px]
          leading-[150%] tracking-[0px]
          transition-all duration-200
          disabled:bg-[#EFF5FF] disabled:pointer-events-none disabled:opacity-100
          cursor-pointer
          ${classNames}
        `}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div 
              className="animate-spin h-5 w-5 rounded-full"
              style={{
                background: "conic-gradient(from 180deg at 50% 50%, #899299 0deg, rgba(255, 255, 255, 0) 360deg)",
                WebkitMaskImage: "radial-gradient(closest-side, transparent 65%, black 70%)",
                maskImage: "radial-gradient(closest-side, transparent 65%, black 70%)"
              }}
            />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
