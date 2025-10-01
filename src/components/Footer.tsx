import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg text-muted-foreground mb-6">
          Designed and developed by <span className="font-semibold text-foreground">Jabed Digital Agency</span>
        </p>
        
        <Button 
          variant="whatsapp"
          size="lg"
          onClick={() => window.open('https://wa.me/8801818238270', '_blank')}
          className="text-lg px-8 py-6 h-auto gap-3"
        >
          <MessageCircle className="w-5 h-5" />
          📞 I need a landing page
        </Button>
        
        <div className="mt-8 text-sm text-muted-foreground">
          © 2025 সুখের Gift. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
