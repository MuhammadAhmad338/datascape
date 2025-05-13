"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      setIsLoggedIn(!!accessToken);
      setLoading(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.location.href = "/";
  }

  return (
    <header className="bg-gray-900 shadow-lg py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Datascape</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/aboutus" className="text-gray-300 hover:text-white">About Us</a>
          <a href="/services" className="text-gray-300 hover:text-white">Services</a>
          <a href="/consulting" className="text-gray-300 hover:text-white">Consulting</a>
          <a href="/contactus" className="text-gray-300 hover:text-white">Contact</a>

          {/* Login/Signup or Get Started Button */}
          <div className="ml-8 flex space-x-4">
            {loading ? (
              <div className="text-gray-300">Loading...</div>
            ) : isLoggedIn ? (
              <div onClick={logOut} className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-500 transition">
                Log Out
              </div>
            ) : (
              <>
                <a href="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Login</a>
                <a href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">Signup</a>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-white">{isMenuOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
            <a href="/services" className="text-gray-300 hover:text-white">Services</a>
            <a href="/consulting" className="text-gray-300 hover:text-white">Consulting</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>

            <div className="flex space-x-4 mt-4">
              {loading ? (
                <div className="text-gray-300">Loading...</div>
              ) : isLoggedIn ? (
                <a href="/getstarted" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">Get Started</a>
              ) : (
                <>
                  <a href="/login" className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">Login</a>
                  <a href="/signup" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">Signup</a>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
