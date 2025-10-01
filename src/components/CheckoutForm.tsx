import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "1"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("সব তথ্য পূরণ করুন", {
        description: "Please fill all fields"
      });
      return;
    }

    // Create WhatsApp message
    const message = `নতুন অর্ডার 🎁\n\nনাম: ${formData.name}\nফোন: ${formData.phone}\nঠিকানা: ${formData.address}\nসংখ্যা: ${formData.quantity}`;
    const whatsappUrl = `https://wa.me/8801818238270?text=${encodeURIComponent(message)}`;
    
    toast.success("অর্ডার প্রক্রিয়া শুরু হয়েছে!", {
      description: "WhatsApp এ যাচ্ছে..."
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="checkout" className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          📝 এখনই আপনার সুখের Gift অর্ডার করুন
        </h2>
        <p className="text-center text-muted-foreground mb-12">Order Your Gift Now</p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-float">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">নাম (Name) *</Label>
              <Input 
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="আপনার নাম লিখুন"
                className="mt-2 h-12 text-lg"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-lg">ফোন নম্বর (Phone) *</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="০১XXXXXXXXX"
                className="mt-2 h-12 text-lg"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="address" className="text-lg">ঠিকানা (Address) *</Label>
              <Input 
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                className="mt-2 h-12 text-lg"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="quantity" className="text-lg">সংখ্যা (Quantity)</Label>
              <Input 
                id="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                className="mt-2 h-12 text-lg"
              />
            </div>
            
            <Button 
              type="submit"
              variant="cta" 
              size="lg"
              className="w-full text-lg py-6 h-auto"
            >
              ✅ অর্ডার কনফার্ম করুন
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
