import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const ReviewCarousel = () => {
  const reviews = [
    {
      rating: 5,
      text: "বক্সটা খুব সুন্দর, আমার বাগদানে ব্যবহার করেছি। দারুণ লেগেছে!",
      author: "সাদিয়া, ঢাকা"
    },
    {
      rating: 5,
      text: "দ্রুত ডেলিভারি আর প্যাকেজিং দেখে মুগ্ধ।",
      author: "রাহুল, চট্টগ্রাম"
    },
    {
      rating: 5,
      text: "প্রিমিয়াম কোয়ালিটি! আমার স্ত্রী খুব খুশি হয়েছে।",
      author: "কামরুল, সিলেট"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          রিভিউ
        </h2>
        <p className="text-center text-muted-foreground mb-12">Review</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-float min-h-[250px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-center mb-6 text-foreground font-medium">
              "{reviews[currentReview].text}"
            </p>
            
            <p className="text-center text-muted-foreground font-semibold">
              – {reviews[currentReview].author}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview 
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

export default ReviewCarousel;
