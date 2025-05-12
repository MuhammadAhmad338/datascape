const Footer = () => {
  return (
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-2xl">Datascape</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Empowering businesses through tailored web development, mobile apps, and enterprise consulting solutions.
            </p>
            <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Datascape. All Rights Reserved.</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/web-development" className="hover:text-gray-400">Web Development</a></li>
              <li><a href="/services/app-development" className="hover:text-gray-400">App Development</a></li>
              <li><a href="/services/consulting" className="hover:text-gray-400">Enterprise Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

