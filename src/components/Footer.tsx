
const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} diabetescare.co.ke - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
