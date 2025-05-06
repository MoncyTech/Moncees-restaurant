
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToContact: () => void;
}

const Hero = ({ scrollToContact }: HeroProps) => {
  return (
    <div className="relative h-screen bg-moncees-black flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-restaurant-patio bg-cover bg-center opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto fade-in">
        <img 
          src="/lovable-uploads/92782904-c05b-4a5f-a65d-7e4b81e32c35.png" 
          alt="Moncees Restaurant & Bar" 
          className="mx-auto w-52 md:w-64 mb-8"
        />
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-moncees-gold mb-4">
          Fine Dining & Bar
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of exquisite cuisine and premium beverages in an elegant atmosphere
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-moncees-gold text-moncees-black hover:bg-moncees-gold/90 font-montserrat font-medium px-8 py-6 text-lg"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
