import React from "react";

const privacyData = [
  {
    id: 1,
    title: "Information We Collect",
    description: "We only collect the information you provide when you join the waitlist:",
    listItems: ["Email address"],
    footerText: "We do not collect payment data, personal profiles, account details, or sensitive information."
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description: "We use your email address to:",
    listItems: [
      "Send Early Access updates",
      "Share product release announcements",
      "Provide news related to MA Digitize and its upcoming UI Kit"
    ],
    footerText: "We do not sell or share your email with third parties for marketing unrelated to MA Digitize."
  },
  {
    id: 3,
    title: "Analytics",
    description: "We may use basic analytics tools to understand website traffic and performance (e.g., Google Analytics). These tools collect anonymous, non-identifiable usage data such as device type, page views, or browser type."
  },
  {
    id: 4,
    title: "Cookies",
    description: "Our website may use cookies for functionality or analytics. You may control or disable cookies in your browser settings."
  },
  {
    id: 5,
    title: "Data Protection",
    description: "We take reasonable measures to protect your information from unauthorized access or misuse."
  },
  {
    id: 6,
    title: "Unsubscribing",
    description: "You can unsubscribe from our emails at any time by clicking the link included in every message."
  },
  {
    id: 7,
    title: "Changes to This Policy",
    description: "We may update this Privacy Policy periodically. The “Last Updated” date reflects the latest version."
  },
  {
    id: 8,
    title: "Contact",
    description: "For privacy-related questions, contact us at:",
    email: "hello@madigitize.com"
  }
];


export default function PrivacyPolicy() {
  const lastUpdated = "01 Jan 2026";

  return (
    <div className="flex flex-col font-sans px-4 md:px-6">
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
              Your privacy matters to us. This Privacy Policy describes how MA Digitize handles the small amount of data collected through our waitlist landing page.
            </p>
            <ul className="space-y-3">
              {privacyData.map((section, index) => (
                <React.Fragment key={section.id}>
                  <li className="flex flex-col gap-3 mb-0">
                    <div className="flex items-center gap-2">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0043C0]" />
                      <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#000000C2]">
                        {section.id}. {section.title}
                      </h2>
                    </div>
                    <p className="text-[#0000008F] text-[20px] leading-[150%] tracking-[0px]">
                      {section.description}
                      {section.email && (
                        <a href={`mailto:${section.email}`} className="text-[#000000C2] hover:underline ml-1">
                          {section.email}
                        </a>
                      )}
                    </p>
                    {section.listItems && (
                      <ul className="list-disc list-inside mb-3">
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

