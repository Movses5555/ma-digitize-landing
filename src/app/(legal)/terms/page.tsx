import React from "react";

const termsData = [
  {
    id: 1,
    title: "Purpose of the Website",
    description: "MA Digitize provides information about our upcoming digital design product (MA UI Kit) and allows visitors to join the waitlist for Early Access.",
    footerText: "No product downloads, purchases, or accounts are offered at this stage."
  },
  {
    id: 2,
    title: "Acceptable Use",
    description: "You agree to use the website only for lawful purposes and not to disrupt or attempt to interfere with its functionality or security.",
  },
  {
    id: 3,
    title: "Intellectual Property",
    description: "All branding, graphics, images, text, and design elements displayed on this website are the property of MA Digitize.",
    footerText: "You may not copy, reuse, or redistribute our content without written permission."
  },
  {
    id: 4,
    title: "Email Waitlist",
    description: "By joining our waitlist, you agree to receive emails related to MA Digitize updates, Early Access announcements, and product releases.",
    footerText: "You can unsubscribe at any time using the link included in every email."
  },
  {
    id: 5,
    title: "No Guarantees",
    description: "All content shown on the website, including blurred product previews, is for informational purposes and may change before the final product release."
  },
  {
    id: 6,
    title: "Third-Party Tools",
    description: "The website may use standard third-party services such as analytics or email marketing tools. These services help us understand traffic and manage the waitlist."
  },
  {
    id: 7,
    title: "Changes to the Terms",
    description: "We may update these Terms from time to time. The “Last Updated” date reflects the version currently in effect."
  },
  {
    id: 8,
    title: "Contact",
    description: "For questions, email us at:",
    email: "hello@madigitize.com"
  }
];


export default function TermsAndConditions() {
  const lastUpdated = "01 Jan 2026";

  return (
    <div className="flex flex-col font-sans px-4 md:px-6">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 md:px-6 py-[56px] lg:py-[96px]">
        <div className="w-full max-w-[822] mx-auto">
          <div className="">
            <h1 className="font-heading text-[24px] md:text-[32px] lg:text-[48px] font-bold text-[#000000EB] leading-[120%] tracking-[0px]">
              Terms & Conditions
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
              Welcome to MA Digitize. By accessing or using our website, you agree to the following terms.
            </p>
            <ul className="space-y-3">
              {termsData.map((section, index) => (
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
                    {section.footerText && (
                      <p className="text-[#0000008F] text-[20px] mt-[30px] font-normal leading-[150%] tracking-[0px]">
                        {section.footerText}
                      </p>
                    )}
                  </li>
                  {index !== termsData.length - 1 && (
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

