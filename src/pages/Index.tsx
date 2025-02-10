
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <section className="container mx-auto px-6 py-8 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
            Welcome to Diabetes Care Kenya
          </span>
          <h1 className="text-5xl font-bold tracking-tight mb-12 text-gray-900">
{/*             Creating Awareness & Supporting Diabetes Care */}
          </h1>

          <Carousel className="w-full mb-16">
            <CarouselContent>
              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=500" 
                  alt="Blood glucose monitoring" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Education & Awareness</h2>
                  <p className="text-white text-lg mb-4">Regular workshops and seminars on diabetes management, nutrition, and lifestyle modifications. Our expert team provides comprehensive education on managing diabetes effectively.</p>
                </div>
              </CarouselItem>

              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&h=500" 
                  alt="Medical consultation" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Clinical Care</h2>
                  <p className="text-white text-lg mb-4">Access to qualified healthcare professionals for regular check-ups, monitoring, and personalized treatment plans to manage your diabetes effectively.</p>
                </div>
              </CarouselItem>

              <CarouselItem className="relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&h=500" 
                  alt="Support group meeting" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Community Support</h2>
                  <p className="text-white text-lg mb-4">Join our community of people living with diabetes. Share experiences, learn from others, and get emotional support from people who understand your journey.</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
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
