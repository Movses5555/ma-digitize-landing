import Link from "next/link";
import { getSupportEmail } from "@/lib/support-email";
import { unsubscribeFromWaitlist } from "@/lib/waitlist/unsubscribe";

export const metadata = {
  title: "Unsubscribe — MA Digitize",
  description: "Unsubscribe from MA UI Kit Early Access waitlist emails.",
};

type UnsubscribePageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function UnsubscribePage({ searchParams }: UnsubscribePageProps) {
  const { token } = await searchParams;

  if (!token?.trim()) {
    return (
      <UnsubscribeCard
        title="Invalid unsubscribe link"
        description="This link is missing or invalid. If you still receive emails from us, contact us and we will remove you manually."
      />
    );
  }

  const result = await unsubscribeFromWaitlist(token);

  if (result.ok) {
    return (
      <UnsubscribeCard
        title="You've been unsubscribed"
        description="You will no longer receive Early Access waitlist emails from MA Digitize. You can rejoin the waitlist anytime from our website."
      />
    );
  }

  if (result.reason === "already_unsubscribed") {
    return (
      <UnsubscribeCard
        title="Already unsubscribed"
        description="This email address is no longer on the MA UI Kit Early Access waitlist."
      />
    );
  }

  return (
    <UnsubscribeCard
      title="Invalid unsubscribe link"
      description="This link is invalid or has expired. If you still receive emails from us, contact us and we will remove you manually."
    />
  );
}

function UnsubscribeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const supportEmail = getSupportEmail();

  return (
    <div className="flex flex-1 flex-col px-4 md:px-6">
      <div className="flex flex-1 w-full items-center justify-center bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 md:px-6 py-14 lg:py-20">
        <div className="w-full max-w-[560px] mx-auto text-center">
          <h1 className="font-heading text-[24px] md:text-[32px] font-bold text-[#101828] leading-tight tracking-[0px]">
            {title}
          </h1>
          <div className="w-full h-px bg-[#E5E7EB] my-6" />
          <p className="text-[#4A5565] text-[16px] md:text-[18px] leading-[28px]">{description}</p>
          <p className="mt-6 text-[#4A5565] text-[16px] leading-[24px]">
            Questions?{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="text-[#0043C0] font-medium hover:underline"
            >
              {supportEmail}
            </a>
          </p>
          <Link
            href="/"
            className="inline-block mt-8 text-[#0043C0] text-[16px] font-medium hover:underline"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
