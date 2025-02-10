
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <section className="container mx-auto px-6 py-8 animate-fadeIn">
        <div className="max-w-6xl mx-auto mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=500" 
                  alt="Digital health representation" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Digital Innovation in Diabetes Care</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=500" 
                  alt="Peaceful nature scene" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Holistic Approach to Wellness</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&h=500" 
                  alt="Community engagement" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Community Support & Education</h2>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
            Welcome to Diabetes Care Kenya
          </span>
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Creating Awareness & Supporting Diabetes Care
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Empowering Kenyans with diabetes through education, support, and quality healthcare services. Together, we can manage diabetes effectively and live healthy lives.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
              Learn More
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
