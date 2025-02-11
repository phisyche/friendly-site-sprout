
import Footer from "@/components/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen pt-16 bg-white flex flex-col">
      <section className="container mx-auto px-6 py-32 animate-fadeIn flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
              Our Programs
            </span>
            <h1 className="text-4xl font-bold tracking-tight mb-6 text-gray-900">
              Diabetes Care & Management Programs
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive programs designed to support and educate individuals living with diabetes in Kenya.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&h=300" 
              alt="African healthcare professional consulting with patient" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
          </div>
        </div>
          
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">Education & Awareness</h3>
            <p className="text-gray-600">
              Regular workshops and seminars on diabetes management, nutrition, and lifestyle modifications. Our expert team provides comprehensive education on managing diabetes effectively.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Support Groups</h3>
            <p className="text-gray-600">
              Join our community of people living with diabetes. Share experiences, learn from others, and get emotional support from people who understand your journey.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">Clinical Care</h3>
            <p className="text-gray-600">
              Access to qualified healthcare professionals for regular check-ups, monitoring, and personalized treatment plans to manage your diabetes effectively.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Nutrition Guidance</h3>
            <p className="text-gray-600">
              Personalized dietary advice from registered nutritionists to help you maintain healthy blood sugar levels through proper meal planning.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Programs;
