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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          কেন নেবেন?
        </h2>
        <p className="text-center text-muted-foreground mb-12">Why Choose This Gift</p>
        
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
