
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=400" 
            alt="Medical professional using laptop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Our Mission & Vision
              </h1>
              <p className="text-white/90 text-lg">
                Dedicated to creating awareness and providing support for individuals living with diabetes in Kenya
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
            About Us
          </span>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Diabetes Care Kenya is dedicated to creating awareness and providing support for individuals living with diabetes in Kenya. Our mission is to improve the quality of life for people with diabetes through education, support, and access to quality healthcare services.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With diabetes prevalence at 4.5% in Kenya, we understand the importance of proper diabetes management and care. Our team works tirelessly to ensure that every person with diabetes has access to the information and resources they need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

