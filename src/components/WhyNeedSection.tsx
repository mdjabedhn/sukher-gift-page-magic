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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          প্রয়োজন কেন?
        </h2>
        <p className="text-center text-muted-foreground mb-12">Why You Need This</p>
        
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
