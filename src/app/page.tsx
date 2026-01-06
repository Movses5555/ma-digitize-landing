import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Audience from "@/components/sections/audience";
import Difference from "@/components/sections/difference";
import Preview from "@/components/sections/preview";
import WhatsInside from "@/components/sections/whats-inside";
import Timeline from "@/components/sections/timeline";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans gap-4">
      <Hero />
      <Features />
      <Audience />
      <Difference />
      <Preview />
      <WhatsInside />
      <Timeline />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
