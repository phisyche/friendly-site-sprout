
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <section className="container mx-auto px-6 py-32 animate-fadeIn flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&w=600&h=400" 
                alt="African healthcare team in consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-transparent to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full mb-4">
                Contact
              </span>
              <h1 className="text-4xl font-bold tracking-tight mb-8">Get in Touch</h1>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow"
                    rows={5}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
