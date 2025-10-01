import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 বিশেষ অফার
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            আজকের জন্য বিশেষ ছাড়
          </h2>
          
          <div className="text-6xl md:text-8xl font-bold text-primary mb-8">
            30% ডিসকাউন্ট!
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-card rounded-xl p-4 shadow-float min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">ঘন্টা</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-float min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">মিনিট</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-float min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">সেকেন্ড</div>
            </div>
          </div>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToCheckout}
            className="text-lg px-8 py-6 h-auto"
          >
            👉 অফার নিন এখনই
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
