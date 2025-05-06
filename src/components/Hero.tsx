import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToContact: () => void;
}

const Hero = ({ scrollToContact }: HeroProps) => {
  return (
    <div className="relative min-h-screen bg-moncees-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-restaurant-patio bg-cover bg-center opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto fade-in pt-20">
        <div className="relative mx-auto w-52 md:w-64 mb-8">
          <img
            src="/lovable-uploads/6d299d89-136d-4871-88d6-5ad24dd41992.png"
            alt="Moncees Restaurant & Bar"
            className="w-full h-auto object-contain filter drop-shadow-[0_0_8px_rgba(213,178,124,0.5)] scale-[1.5] md:scale-[2]"
            style={{
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-moncees-gold/20 to-transparent opacity-70 rounded-full"
            style={{ mixBlendMode: "overlay" }}
          ></div>
        </div>
        <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-moncees-gold mb-4 tracking-wide">
          Fine Dining & Bar
        </h1>
        <p className="font-nunito text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto tracking-wide">
          Experience the perfect blend of exquisite cuisine and premium
          beverages in an elegant atmosphere
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-moncees-gold text-moncees-black hover:bg-moncees-gold/90 font-nunito font-medium px-8 py-6 text-lg mb-16"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
