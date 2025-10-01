import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const ReviewCarousel = () => {
  const reviews = [
    {
      rating: 5,
      text: "বক্সটা খুব সুন্দর, আমার বাগদানে ব্যবহার করেছি। দারুণ লেগেছে! সবাই জিজ্ঞেস করেছে কোথায় পেয়েছি।",
      author: "সাদিয়া আক্তার",
      location: "ঢাকা"
    },
    {
      rating: 5,
      text: "দ্রুত ডেলিভারি আর প্যাকেজিং দেখে মুগ্ধ। বক্সের কোয়ালিটি সত্যিই প্রিমিয়াম, টাকার মূল্য পেয়েছি।",
      author: "রাহুল হোসেন",
      location: "চট্টগ্রাম"
    },
    {
      rating: 5,
      text: "প্রিমিয়াম কোয়ালিটি! আমার স্ত্রী খুব খুশি হয়েছে। রিং বক্সটা দেখতে একদম দোকানের মতো পেশাদার।",
      author: "কামরুল ইসলাম",
      location: "সিলেট"
    },
    {
      rating: 5,
      text: "ভ্যালেন্টাইনস ডেতে এই বক্সে রিং দিয়েছিলাম, অসাধারণ! প্যাকেজিং এত সুন্দর ছিল যে খুলতেই মন চায়নি।",
      author: "তানিয়া রহমান",
      location: "রাজশাহী"
    },
    {
      rating: 5,
      text: "বাজেটের মধ্যে এত সুন্দর গিফট বক্স পাবো ভাবিনি। LED লাইট দিয়ে যখন প্রপোজ করলাম, এক কথায় পারফেক্ট!",
      author: "আরিফ মাহমুদ",
      location: "বরিশাল"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 md:py-24 gradient-soft overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] font-bold text-muted opacity-5 select-none">
              REVIEWS
            </span>
          </div>
          <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            কাস্টমার রিভিউ
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto relative" style={{ perspective: "1000px" }}>
          <div className="flex justify-center gap-4 md:gap-8">
            {reviews.map((review, index) => {
              const position = (index - currentReview + reviews.length) % reviews.length;
              let transform = "";
              let zIndex = 0;
              let opacity = 0;
              let scale = 0.8;
              
              if (position === 0) {
                transform = "translateX(0) translateZ(0) rotateY(0deg)";
                zIndex = 30;
                opacity = 1;
                scale = 1;
              } else if (position === 1) {
                transform = "translateX(280px) translateZ(-200px) rotateY(-25deg)";
                zIndex = 20;
                opacity = 0.6;
                scale = 0.85;
              } else if (position === reviews.length - 1) {
                transform = "translateX(-280px) translateZ(-200px) rotateY(25deg)";
                zIndex = 20;
                opacity = 0.6;
                scale = 0.85;
              } else {
                opacity = 0;
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    scale,
                    width: "400px",
                    left: "50%",
                    marginLeft: "-200px",
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-float hover:shadow-2xl transition-shadow relative">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                    
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-lg text-center mb-6 text-foreground leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    <div className="text-center">
                      <p className="font-bold text-foreground">{review.author}</p>
                      <p className="text-sm text-muted-foreground">📍 {review.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center gap-2 mt-[450px] md:mt-[420px]">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
