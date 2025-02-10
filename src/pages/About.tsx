
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-6 text-gray-900">
            Our Mission & Vision
          </h1>
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
