import FaqSection from "./_components/modules/home/faqSection/FaqSection";
import HeroSection from "./_components/modules/home/heroSection/HeroSection";
import PricingSection from "./_components/modules/home/pricingSection/PricingSection";
import ReviewSection from "./_components/modules/home/reviewSection/ReviewSection";
import SectionHeader from "./_components/ui/SectionHeader";

export default function Home() {
  return (
    <div className="px-2 md:px-0 overflow-hidden flex flex-col">
      <HeroSection />
      <PricingSection />
      <ReviewSection />
      <FaqSection />
      {/* // Left aligned with custom spacing */}
      <SectionHeader />
      <SectionHeader
        align="left"
        title="About Us"
        subtitle="Who We Are"
        stack="row"
        justify="between"
      />

      <SectionHeader align="center" title="Our Pricing" subtitle="Pricing" />

      <SectionHeader align="right" title="Contact Info" subtitle="Reach Out" />
    </div>
  );
}
