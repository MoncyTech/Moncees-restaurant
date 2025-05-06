
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Array of images to display in the carousel
const carouselImages = [
  {
    url: "/lovable-uploads/fa164508-1454-4837-991a-3d1af7d093c2.png",
    alt: "Restaurant Patio"
  },
  {
    url: "/lovable-uploads/0ee809cc-c08a-4257-82ea-57d85e5d08b2.png",
    alt: "Moncees Logo"
  },
  {
    url: "/lovable-uploads/6d299d89-136d-4871-88d6-5ad24dd41992.png",
    alt: "Premium Bar"
  }
];

interface ImageCarouselProps {
  interval?: number; // Time in milliseconds between auto-rotations
}

export const ImageCarousel = ({ interval = 5000 }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => 
        current === carouselImages.length - 1 ? 0 : current + 1
      );
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel 
        className="w-full" 
        opts={{ 
          align: "start",
          loop: true,
        }}
        setApi={(api) => {
          if (api) {
            api.scrollTo(activeIndex);
          }
        }}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-full">
              <div className="p-1 relative group">
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-moncees-black">
                  <div className="absolute inset-0 bg-gradient-to-b from-moncees-black/40 to-moncees-black/70 z-10"></div>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                    <h3 className="font-cormorant text-2xl font-semibold text-moncees-gold">
                      {image.alt}
                    </h3>
                  </div>
                </AspectRatio>
                
                <div className="absolute bottom-4 right-4 z-30 flex gap-2">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeIndex 
                          ? "bg-moncees-gold w-4" 
                          : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious 
          className="hidden md:flex -left-4 bg-moncees-gold/20 hover:bg-moncees-gold/40 border-moncees-gold text-white"
          icon={<ChevronLeft className="h-4 w-4 text-white" />}
        />
        <CarouselNext 
          className="hidden md:flex -right-4 bg-moncees-gold/20 hover:bg-moncees-gold/40 border-moncees-gold text-white"
          icon={<ChevronRight className="h-4 w-4 text-white" />}
        />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
