import FaqSection from "./_components/modules/home/faqSection/FaqSection";
import HeroSection from "./_components/modules/home/heroSection/HeroSection";
import NewsLetter from "./_components/modules/home/newsLetter/NewsLetter";
import PricingSection from "./_components/modules/home/pricingSection/PricingSection";
import ReviewSection from "./_components/modules/home/reviewsSection/ReviewSection";

export default function Home() {
  return (
    <div className="px-2 md:px-0 overflow-hidden">
      <HeroSection />
      <PricingSection />
      <ReviewSection />
      <FaqSection />
      <NewsLetter />
    </div>
  );
}
