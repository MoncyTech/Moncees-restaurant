
import { useRef } from "react";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/ContactInfo";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-moncees-black">
      {/* Hero Section */}
      <Hero scrollToContact={scrollToContact} />
      
      {/* About Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-moncees-black to-moncees-black/95">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-moncees-gold mb-8 fade-in tracking-wide">
            Welcome to Moncees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-moncees-black/70 p-6 border border-moncees-gold/30 rounded-lg fade-in delay-100">
              <img 
                src="/lovable-uploads/0ee809cc-c08a-4257-82ea-57d85e5d08b2.png" 
                alt="Moncees Logo" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h3 className="font-cormorant text-xl font-semibold text-moncees-gold mb-2">Fine Dining</h3>
              <p className="text-white/80 font-nunito">Experience our exceptional cuisine crafted with the finest ingredients.</p>
            </div>
            
            <div className="bg-moncees-black/70 p-6 border border-moncees-gold/30 rounded-lg fade-in delay-200">
              <img 
                src="/lovable-uploads/6d299d89-136d-4871-88d6-5ad24dd41992.png" 
                alt="Beer & Wine Bar" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h3 className="font-cormorant text-xl font-semibold text-moncees-gold mb-2">Premium Bar</h3>
              <p className="text-white/80 font-nunito">Enjoy our selection of craft beers, fine wines, and signature cocktails.</p>
            </div>
            
            <div className="bg-moncees-black/70 p-6 border border-moncees-gold/30 rounded-lg fade-in delay-300">
              <img 
                src="/lovable-uploads/fa164508-1454-4837-991a-3d1af7d093c2.png" 
                alt="Restaurant Patio" 
                className="w-24 h-24 object-cover object-center mx-auto mb-4 rounded-full"
              />
              <h3 className="font-cormorant text-xl font-semibold text-moncees-gold mb-2">Beautiful Patio</h3>
              <p className="text-white/80 font-nunito">Dine in our picturesque outdoor setting surrounded by nature.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Carousel Section - Added above Contact & Hours */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-moncees-black/95 to-moncees-black">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-moncees-gold mb-8 fade-in tracking-wide">
            Our Experience
          </h2>
          <div className="fade-in delay-200">
            <ImageCarousel interval={6000} />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactSectionRef} className="py-16 md:py-24 px-6 bg-gradient-to-b from-moncees-black/95 to-moncees-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-moncees-gold mb-8 fade-in tracking-wide">
            Contact & Hours
          </h2>
          
          <ContactInfo />
          
          <div className="mt-16 text-moncees-white/80 font-nunito text-sm fade-in delay-400">
            <p>© {new Date().getFullYear()} Moncees Restaurant & Bar. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
