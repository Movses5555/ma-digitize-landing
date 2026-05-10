import React from "react";

const privacyData = [
  {
    id: 1,
    title: "Purpose of the Website",
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
    description:
      "Our website may use cookies for basic functionality or analytics purposes.\nYou can control or disable cookies through your browser settings at any time.",
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
    email: "hello@madigitize.com"
  }
];


export default function PrivacyPolicy() {
  const lastUpdated = "01 Jan 2026";

  return (
    <div className="flex flex-col font-inter px-4 md:px-6">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 md:px-6 py-[56px] lg:py-[96px]">
        <div className="w-full max-w-[822] mx-auto">
          <div className="">
            <h1 className="font-heading text-[24px] md:text-[32px] lg:text-[48px] font-bold text-[#000000EB] leading-[120%] tracking-[0px]">
              Privacy Policy
            </h1>
            <div className="inline-block bg-[#F1F2F3] my-4 md:my-5 lg:my-6 px-3 py-[6px] rounded-full border border-[#E1E3E5]">
              <p className="text-[14px] text-[#000000C2] font-normal leading-[120%] tracking-[0px]">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-[#00000014] mb-5 md:mb-6 lg:mb-8"></div>
          <div className="space-y-10 text-[#0000008F] leading-[170%] text-[16px]">
            <p className="text-[20px] text-[#0000008F] mb-5 md:mb-6 lg:mb-8 leading-[120%] tracking-[0px] ">
              Welcome to MA Digitize. By accessing or using our Early Access waitlist website, you agree to the following Privacy Policy.
            </p>
            <ul className="space-y-3">
              {privacyData.map((section, index) => (
                <React.Fragment key={section.id}>
                  <li className="flex flex-col gap-3 mb-0">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#0043C0]" />
                      <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#000000C2]">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                    <p className="whitespace-pre-line text-[#0000008F] text-[20px] leading-[150%] tracking-[0px]">
                      {section.description}
                      {section.email && (
                        <a href={`mailto:${section.email}`} className="text-[#000000C2] hover:underline ml-1">
                          {section.email}
                        </a>
                      )}
                    </p>
                    {section.listItems && (
                      <ul className="list-disc list-inside mb-3 pl-3">
                        {section.listItems.map((item, idx) => (
                          <li key={idx} className="text-[#000000C2] text-[20px] font-normal leading-[150%] tracking-[0px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.footerText && (
                      <p className="text-[#0000008F] text-[20px] font-normal leading-[150%] tracking-[0px]">
                        {section.footerText}
                      </p>
                    )}
                  </li>
                  {index !== privacyData.length - 1 && (
                    <div className="w-full h-px bg-[#00000014] my-5 md:my-6 lg:my-8" />
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

