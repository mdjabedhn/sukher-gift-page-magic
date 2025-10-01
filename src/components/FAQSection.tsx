import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "এই রিং বক্স কি দিয়ে তৈরি?",
      answer: "আমাদের রিং বক্স প্রিমিয়াম ভেলভেট কাপড় এবং উচ্চমানের প্লাস্টিক দিয়ে তৈরি। ভিতরে নরম কুশন আছে যা রিংকে সুরক্ষিত রাখে।"
    },
    {
      question: "ডেলিভারি কতদিনে হবে?",
      answer: "ঢাকার ভিতরে ১-২ দিন এবং ঢাকার বাইরে ২-৪ দিনের মধ্যে ডেলিভারি করা হয়। জরুরি অর্ডারের জন্য এক্সপ্রেস ডেলিভারি সুবিধা আছে।"
    },
    {
      question: "LED লাইট কি সব বক্সে আছে?",
      answer: "না, LED লাইট শুধুমাত্র প্রিমিয়াম মডেলে আছে। স্ট্যান্ডার্ড মডেল সাধারণ ভেলভেট বক্স। আপনি অর্ডারের সময় LED মডেল সিলেক্ট করতে পারবেন।"
    },
    {
      question: "কি কি রঙ পাওয়া যায়?",
      answer: "আমাদের বক্স লাল, সাদা, কালো এবং রোজ গোল্ড রঙে পাওয়া যায়। লাল রঙ সবচেয়ে জনপ্রিয় এবং রোমান্টিক উপহারের জন্য আদর্শ।"
    },
    {
      question: "রিটার্ন পলিসি কি?",
      answer: "পণ্য পাওয়ার ৩ দিনের মধ্যে কোনো সমস্যা থাকলে রিটার্ন/এক্সচেঞ্জ করা যাবে। তবে পণ্য অব্যবহৃত এবং মূল প্যাকেজিংয়ে থাকতে হবে।"
    },
    {
      question: "কাস্টম ডিজাইন করা যাবে?",
      answer: "হ্যাঁ! বাল্ক অর্ডারের ক্ষেত্রে (১০+ পিস) কাস্টম লোগো বা ডিজাইন যোগ করা যায়। বিস্তারিত জানতে আমাদের WhatsApp এ যোগাযোগ করুন।"
    },
    {
      question: "দাম কত?",
      answer: "স্ট্যান্ডার্ড মডেল ৩৫০-৫০০ টাকা এবং LED প্রিমিয়াম মডেল ৬৫০-৮৫০ টাকা। বর্তমানে ৩০% ছাড় চলছে!"
    },
    {
      question: "পেমেন্ট পদ্ধতি কি?",
      answer: "আমরা ক্যাশ অন ডেলিভারি (COD), বিকাশ, নগদ এবং রকেট - সব পেমেন্ট পদ্ধতি গ্রহণ করি। অগ্রিম পেমেন্টে অতিরিক্ত ছাড় পাবেন।"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] font-bold text-muted opacity-5 select-none">
              FAQ
            </span>
          </div>
          <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
            সাধারণ প্রশ্নাবলী
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl px-6 bg-gradient-to-br from-white to-red-50/30 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100">
            <p className="text-lg font-semibold text-foreground mb-2">
              আরও কোনো প্রশ্ন আছে?
            </p>
            <p className="text-muted-foreground mb-4">
              আমাদের সাথে সরাসরি যোগাযোগ করুন, আমরা সবসময় সাহায্যের জন্য প্রস্তুত!
            </p>
            <a
              href="https://wa.me/8801818238270"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#25D366]/90 transition-colors"
            >
              <span>📞</span>
              WhatsApp এ মেসেজ করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;