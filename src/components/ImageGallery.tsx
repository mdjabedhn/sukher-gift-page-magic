import { useState } from "react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageGallery = () => {
  const images = [product1, product2, product3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float-heart opacity-30"
            style={{
              left: `${30 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          ছবির গ্যালারি
        </h2>
        <p className="text-center text-muted-foreground mb-12">Gallery</p>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-float">
            <img 
              src={images[currentIndex]} 
              alt={`Product view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <Button
            variant="secondary"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
