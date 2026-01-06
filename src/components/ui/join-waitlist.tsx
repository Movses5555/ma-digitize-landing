"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function JoinWaitlist({
  isShowText = false,
}: {
  isShowText?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      setIsJoined(true);
    }, 1500);
  };

  return (
    <div className="w-full md:max-w-[505px]">
      {
        isJoined ? (
          <div className="w-full flex flex-col items-center">
            <div className="w-[56px] h-[56px] bg-[#0043C0] flex items-center justify-center rounded-full">
              <Image 
                src="/icons/success.svg"
                alt="lock"
                width={32}
                height={32}
              />
            </div>
            <p className="text-[#000000EB] text-[20px] lg:text-[24px] font-bold leading-[36px] tracking-[0px] mt-4">
              🎉 You're in!
            </p>
            <p className="text-[#000000C2] text-[16px] text-center font-normal leading-[150%] tracking-[0px] my-2">
              You've successfully joined the MA UI Kit waitlist.
            </p>
            <p className="text-[#0000008F] text-[14px] text-center font-normal leading-[150%] tracking-[0px]">
              We'll email you upcoming updates and Early Access details.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-start w-full"
            >
              <div className="flex-grow w-full">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  error={error}
                  disabled={isLoading}
                />
              </div>
              <div className="md:w-[145px] min-w-[145px]">
                <Button 
                  type="submit"
                  classNames="h-12 px-6"
                  isLoading={isLoading}
                >
                  <span className="text-[#FFFFFFFA] text-[16px] font-bold leading-[150%] tracking-[0px]">
                    Join Waitlist
                  </span>
                </Button>
              </div>
            </form>
            {
              !!isShowText && (
                <p className="text-[14px] text-[#0000008F] mt-3 font-normal text-center leading-[150%] tracking-[0px] ">
                  Be the first to access it when we launch.
                </p>
              )
            }
          </div>

        )
      }
    </div>
  );
}
