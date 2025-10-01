import HeroSection from "@/components/HeroSection";
import WhyNeedSection from "@/components/WhyNeedSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ImageGallery from "@/components/ImageGallery";
import ReviewCarousel from "@/components/ReviewCarousel";
import OfferSection from "@/components/OfferSection";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyNeedSection />
      <WhyChooseSection />
      <ImageGallery />
      <ReviewCarousel />
      <OfferSection />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Index;
