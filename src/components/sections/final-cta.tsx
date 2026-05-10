import JoinWaitlist from "../ui/join-waitlist";
import SectionTitle from "../ui/section-title";

export default function FinalCTA() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <SectionTitle
          subtitle="Early Access Waitlist"
          title="Get early access to MA UI Kit"
          description="Join the waitlist to secure Early Access at the lowest price."
        />
        <div className="w-full px-4 flex justify-center">
          <JoinWaitlist />
        </div>
      </div>
    </section>
  );
}
