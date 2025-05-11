const Footer = () => {
  return (
      <footer className="bg-gray-900 py-6 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-4">
            <h2 className="font-bold text-lg">Datascape</h2>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Datascape. All Rights Reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;