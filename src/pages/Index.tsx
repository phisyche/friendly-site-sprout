
const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
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
