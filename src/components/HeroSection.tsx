import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ring-box.jpg";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            💍 সুখের Gift – ভালোবাসার জন্য বিশেষ রিং বক্স
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-light">
            A Special Ring Gift Box
          </p>
          
          <div className="my-12">
            <img 
              src={heroImage} 
              alt="Premium Red Ring Gift Box" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-float"
            />
          </div>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToCheckout}
            className="text-lg px-8 py-6 h-auto"
          >
            👉 এখনই অর্ডার করুন
          </Button>
        </div>
      </div>
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float-heart"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '0',
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
