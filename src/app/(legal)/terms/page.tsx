import React from "react";

const termsData = [
  {
    id: 1,
    title: "Purpose of the Website",
    description: "This website provides information about MA UI Kit, an upcoming digital design product, and allows visitors to join the Early Access waitlist. \n\n At this stage:",
    listItems: [
      "No purchases are available",
      "No product downloads are provided",
      "No user accounts are created"
    ],
  },
  {
    id: 2,
    title: "Acceptable Use",
    description: "You agree to use this website for lawful purposes only and not to attempt to disrupt, damage, or interfere with its functionality or security.",
  },
  {
    id: 3,
    title: "Intellectual Property",
    description: "All content on this website — including branding, text, graphics, images, and design elements — is the property of MA Digitize.",
    footerText: "You may not copy, reproduce, distribute, or reuse any content without prior written permission."
  },
  {
    id: 4,
    title: "Email Waitlist",
    description: "By joining the waitlist, you agree to receive emails related to:",
    listItems: [
      "MA Digitize updates",
      "Early Access announcements",
      "MA UI Kit product releases"
    ],
    footerText: "You can unsubscribe at any time via the link included in every email."
  },
  {
    id: 5,
    title: "No Guarantees",
    description: "All content shown on this website, including previews or blurred product visuals, is for informational purposes only and may change before the final product release."
  },
  {
    id: 6,
    title: "Third-Party Tools",
    description: "We may use standard third-party services (such as analytics or email tools) to operate the website and manage the waitlist."
  },
  {
    id: 7,
    title: "Changes to the Terms",
    description: "These Terms & Conditions may be updated from time to time. The “Last updated” date reflects the version currently in effect."
  },
  {
    id: 8,
    title: "Contact",
    description: "For questions regarding these Terms, contact us at: ",
    email: process.env.EMAIL_SUPPORT || "hello@madigitize.com"
  }
];


export default function TermsAndConditions() {
  const lastUpdated = process.env.TERMS_AND_CONDITIONS_LAST_UPDATED || "01 Jan 2026";

  return (
    <div className="flex flex-col font-inter px-4 md:px-6">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 md:px-6 py-[56px] lg:py-[96px]">
        <div className="w-full max-w-[822] mx-auto">
          <div className="">
            <h1 className="font-heading text-[24px] md:text-[32px] lg:text-[48px] font-bold text-[#101828] leading-[32px] md:leading-[40px] lg:leading-[60px] tracking-[0px]">
              Terms & Conditions
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
              Welcome to MA Digitize. By accessing or using this website, you agree to the following Terms & Conditions.
            </p>
            <ul className="space-y-3">
              {termsData.map((section, index) => (
                <React.Fragment key={section.id}>
                  <li className="flex flex-col gap-3 mb-0">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#0043C0]" />
                      <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#000000C2]">
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
                      <p className="whitespace-pre-line text-[#4A5565] text-[18px] font-normal leading-[28px] tracking-[0px]">
                        {section.footerText}
                      </p>
                    )}
                  </li>
                  {index !== termsData.length - 1 && (
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

