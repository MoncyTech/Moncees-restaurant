
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
        <div className="relative mx-auto w-52 md:w-64 mb-8">
          <img 
            src="/lovable-uploads/92782904-c05b-4a5f-a65d-7e4b81e32c35.png" 
            alt="Moncees Restaurant & Bar" 
            className="w-full h-auto object-contain filter drop-shadow-[0_0_8px_rgba(213,178,124,0.5)]"
            style={{
              mixBlendMode: "screen",
              transform: "scale(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-moncees-gold/20 to-transparent opacity-70 rounded-full" style={{ mixBlendMode: "overlay" }}></div>
        </div>
        <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-moncees-gold mb-4 tracking-wide">
          Fine Dining & Bar
        </h1>
        <p className="font-nunito text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto tracking-wide">
          Experience the perfect blend of exquisite cuisine and premium beverages in an elegant atmosphere
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-moncees-gold text-moncees-black hover:bg-moncees-gold/90 font-nunito font-medium px-8 py-6 text-lg"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
