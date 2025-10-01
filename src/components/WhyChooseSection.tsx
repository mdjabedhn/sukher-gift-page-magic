import product1 from "@/assets/product-1.jpg";

const WhyChooseSection = () => {
  const features = [
    {
      icon: "✨",
      text: "Premium ring box design"
    },
    {
      icon: "🪞",
      text: "সুন্দর প্যাকেজিং ও ঝলমলে চেহারা"
    },
    {
      icon: "🖤",
      text: "কালার contrast যা চোখে পড়ে সাথে সাথে"
    },
    {
      icon: "✅",
      text: "বাংলাদেশে দ্রুত ডেলিভারি"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] font-bold text-muted opacity-5 select-none">
              WHY CHOOSE
            </span>
          </div>
          <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            কেন নেবেন?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img 
              src={product1} 
              alt="Red Ring Box with Interior" 
              className="rounded-2xl shadow-float w-full"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors"
              >
                <span className="text-4xl flex-shrink-0">{feature.icon}</span>
                <p className="text-lg font-medium text-foreground pt-2">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
