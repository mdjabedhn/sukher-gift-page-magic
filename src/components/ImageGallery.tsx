import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const ImageGallery = () => {
  const images = [
    { src: product1, alt: "Red ring gift box with white interior" },
    { src: product2, alt: "Elegant ring box packaging" },
    { src: product3, alt: "Premium ring gift box design" },
    { src: product4, alt: "Opened ring box showing cushion" },
    { src: product5, alt: "Heart shaped ring gift box" },
    { src: product6, alt: "LED illuminated ring box" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float-heart opacity-30"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] font-bold text-muted opacity-5 select-none">
              GALLERY
            </span>
          </div>
          <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            ছবির গ্যালারি
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg mb-8 text-muted-foreground">
            আমাদের প্রিমিয়াম রিং বক্সের সংগ্রহ দেখুন - প্রতিটি মুহূর্তকে বিশেষ করে তুলতে ডিজাইন করা হয়েছে। 
            উচ্চমানের উপকরণ এবং আকর্ষণীয় প্যাকেজিং যা আপনার প্রিয়জনকে মুগ্ধ করবে।
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-float hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ✨ সব বক্স হাতে তৈরি এবং যত্ন সহকারে প্যাক করা হয় ✨
            </p>
            <p className="text-sm text-muted-foreground">
              প্রতিটি বক্স বিশেষ মুহূর্তের জন্য উপযুক্ত - বাগদান, বিবাহ বার্ষিকী, ভালোবাসা দিবস বা যেকোনো রোমান্টিক উপলক্ষ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
