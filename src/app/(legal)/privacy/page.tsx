import React from "react";
import { getSupportEmail } from "@/lib/support-email";

const privacyData = [
  {
    id: 1,
    title: "Information We Collect",
    description: "We only collect the information you voluntarily provide when joining the waitlist:",
    listItems: ["Email address"],
    footerText: "We do not collect payment details, user accounts, personal profiles, or sensitive personal data."
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description: "Your email address is used solely to:",
    listItems: [
      "Notify you about Early Access availability",
      "Share product launch updates and announcements",
      "Send relevant news about MA Digitize and MA UI Kit"
    ],
    footerText: "We do not sell, rent, or share your email with third parties for unrelated marketing purposes."
  },
  {
    id: 3,
    title: "Analytics",
    description: "We may use basic analytics tools (such as Google Analytics) to understand website traffic and performance. These tools collect anonymous, non-identifiable data such as browser type, device type, or page views."
  },
  {
    id: 4,
    title: "Cookies",
    description: (
      <p className="text-[#4A5565] text-[18px] font-normal leading-[28px] tracking-[0px]">
          Our website may use cookies for basic functionality or analytics purposes.
        <br />
        You can control or disable cookies through your browser settings at any time.
      </p>
    )
  },
  {
    id: 5,
    title: "Data Protection",
    description: "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure."
  },
  {
    id: 6,
    title: "Unsubscribing",
    description: "You can unsubscribe from our emails at any time using the link included in every message we send."
  },
  {
    id: 7,
    title: "Changes to This Policy",
    description: "This Privacy Policy may be updated periodically. The “Last updated” date reflects the most recent version."
  },
  {
    id: 8,
    title: "Contact",
    description: "If you have any questions about this Privacy Policy, contact us at: ",
    email: getSupportEmail()
  }
];


export default function PrivacyPolicy() {
  const lastUpdated = process.env.PRIVACY_POLICY_LAST_UPDATED || "01 Jan 2026";

  return (
    <div className="flex flex-col font-inter px-4 md:px-6">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 md:px-6 py-[56px] lg:py-[96px]">
        <div className="w-full max-w-[822] mx-auto">
          <div className="">
            <h1 className="font-heading text-[24px] md:text-[32px] lg:text-[48px] font-bold text-[#101828] leading-[32px] md:leading-[40px] lg:leading-[60px] tracking-[0px]">
              Privacy Policy
            </h1>
            <div className="h-[28px] w-fit mt-4 mb-6 bg-white border border-[#D1D5DC] px-3 rounded-[6px] text-[14px] text-[#4A5565] flex items-center justify-center">
              <span className="text-[14px] text-[#4A5565] font-medium leading-[20px] tracking-[0px]">
                Last updated: {lastUpdated}
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-[#E5E7EB] mb-5 md:mb-6 lg:mb-8"></div>
          <div className="space-y-10 text-[#4A5565] leading-[170%] text-[16px]">
            <p className="text-[18px] text-[#4A5565] mb-5 md:mb-6 lg:mb-8 leading-[28px] tracking-[0px] ">
              Your privacy matters to us. This Privacy Policy explains how MA Digitize collects and uses a limited amount of information through our Early Access waitlist website.
            </p>
            <ul className="space-y-3">
              {privacyData.map((section, index) => (
                <React.Fragment key={section.id}>
                  <li className="flex flex-col gap-3 mb-0">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#0043C0]" />
                      <h2 className="text-[20px] lg:text-[24px] font-semibold leading-[30px] lg:leading-[32px] tracking-[0px] text-[#364153]">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                    <p className="whitespace-pre-line text-[#4A5565] text-[18px] leading-[28px] tracking-[0px]">
                      {section.description}
                      {section.email && (
                        <a href={`mailto:${section.email}`} className="text-[#4A5565] font-bold hover:underline ml-1">
                          {section.email}
                        </a>
                      )}
                    </p>
                    {section.listItems && (
                      <ul className="list-disc list-inside mb-3 pl-3">
                        {section.listItems.map((item, idx) => (
                          <li key={idx} className="text-[#4A5565] text-[18px] font-normal leading-[28px] tracking-[0px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.footerText && (
                      <p className="text-[#4A5565] text-[18px] font-normal leading-[28px] tracking-[0px]">
                        {section.footerText}
                      </p>
                    )}
                  </li>
                  {index !== privacyData.length - 1 && (
                    <div className="w-full h-px bg-[#E5E7EB] my-5 md:my-6 lg:my-8" />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

