
const Programs = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
            Our Programs
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-6 text-gray-900">
            Diabetes Care & Management Programs
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2 mt-12">
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
        </div>
      </section>
    </div>
  );
};

export default Programs;
