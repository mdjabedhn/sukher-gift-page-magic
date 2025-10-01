const WhyNeedSection = () => {
  const reasons = [
    {
      emoji: "❤️",
      title: "ভালোবাসা প্রকাশের সেরা উপহার",
      subtitle: "Best way to express love"
    },
    {
      emoji: "🎁",
      title: "স্মরণীয় মুহূর্তের জন্য পারফেক্ট",
      subtitle: "Perfect for memorable moments"
    },
    {
      emoji: "💍",
      title: "বিশেষ মানুষকে চমক দেওয়ার জন্য",
      subtitle: "Surprise your loved one"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] font-bold text-muted opacity-5 select-none">
              WHY NEED
            </span>
          </div>
          <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            প্রয়োজন কেন?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl gradient-soft shadow-float hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{reason.emoji}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground/70">
                {reason.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeedSection;
