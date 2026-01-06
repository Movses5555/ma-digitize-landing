import JoinWaitlist from "../ui/join-waitlist";

export default function FinalCTA() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h2 className="font-heading text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-[120%] text-[#000000EB] mb-3">
            Be the first to get MA UI Kit
          </h2>
          <p className="text-[#0000008F] text-[15px] md:text-[16px] font-normal">
            Join the waitlist and get Early Access at the lowest price.
          </p>
        </div>
        <div className="w-full px-4 flex justify-center">
          <JoinWaitlist />
        </div>
      </div>
    </section>
  );
}
