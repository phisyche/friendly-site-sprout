
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-6 mt-auto border-t border-emerald-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-emerald-800 text-sm">
          © {new Date().getFullYear()} diabetescare.co.ke - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
