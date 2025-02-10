
const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-6 py-32 animate-fadeIn">
        <div className="max-w-xl mx-auto">
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
      </section>
    </div>
  );
};

export default Contact;
