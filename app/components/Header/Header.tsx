"use client";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Datascape
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-4 py-3 bg-white border-t">
              <ul className="space-y-2">
                <li>
                  <a href="/" className="block py-2 text-gray-600 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="block py-2 text-gray-600 hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="block py-2 text-gray-600 hover:text-gray-800">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="block py-2 text-gray-600 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
  );
};

export default Header;
