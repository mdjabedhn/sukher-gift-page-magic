import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ring-box.jpg";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[100px] md:text-[160px] font-bold text-white/10 select-none whitespace-nowrap">
              SPECIAL GIFT
            </span>
          </div>
          <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            💍 সুখের Gift
          </h1>
          <p className="relative text-xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            ভালোবাসার জন্য বিশেষ রিং বক্স
          </p>
        </div>
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          প্রিয়জনকে চমকে দিন প্রিমিয়াম রিং বক্স দিয়ে। প্রতিটি বিশেষ মুহূর্তকে আরও স্মরণীয় করে তুলুন 
          আমাদের সুন্দর ডিজাইন করা উপহার প্যাকেজিং দিয়ে।
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
