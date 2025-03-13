
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { ProductLocator } from "@/components/home/ProductLocator";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <FeaturesSection />
      <ProductLocator />
      <RecommendationEngine />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Index;
