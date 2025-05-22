"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const router = useRouter();

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

  const toggleServices = () => {
    setShowServices(!showServices);
    if (!showServices) {
      router.push('/services');
    }
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.location.href = "/";
  }

  return (
    <header className="bg-gray-900 shadow-lg py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <Image 
            src="/datascape.png"
            alt="Datascape Logo"
            width={50}
            height={35}
            priority
            className="object-contain"
          />
          Datascape
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white text-base transition-colors">Home</Link>
          <Link href="/aboutus" className="text-gray-300 hover:text-white text-base transition-colors">AboutUs</Link>
          <button
            onClick={toggleServices}
            className="text-gray-300 hover:text-white text-base transition-colors"
          >
            Services
          </button>
          <Link href="/consulting" className="text-gray-300 hover:text-white text-base transition-colors">Consulting</Link>
          <Link href="/contactus" className="text-gray-300 hover:text-white text-base transition-colors">Contact</Link>

          {/* Login/Signup or Get Started Button */}
          <div className="ml-6 flex space-x-3">
            {!loading && isLoggedIn && (
              <>
                <Link href="/getstarted" className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition">
                  Get Started
                </Link>
                <button onClick={logOut} className="bg-gray-700 text-white px-3 py-1.5 rounded hover:bg-gray-600 transition">
                  Log Out
                </button>
              </>
            )}

            {!loading && !isLoggedIn && (
              <>
                <Link href="/login" className="bg-gray-700 text-white px-3 py-1.5 rounded hover:bg-gray-600 transition">Login</Link>
                <Link href="/signup" className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition">Signup</Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <nav className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/aboutus" 
                  className="text-gray-300 hover:text-white text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white text-base transition-colors text-left"
                >
                  Services
                </button>
                <Link 
                  href="/consulting" 
                  className="text-gray-300 hover:text-white text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consulting
                </Link>
                <Link 
                  href="/contactus" 
                  className="text-gray-300 hover:text-white text-base transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-3 border-t border-gray-700">
                  {loading ? (
                    <div className="text-gray-300">Loading...</div>
                  ) : isLoggedIn ? (
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="/getstarted" 
                        className="bg-blue-600 text-white py-1.5 px-3 rounded hover:bg-blue-700 transition-colors text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                      <button
                        onClick={() => {
                          logOut();
                          setIsMenuOpen(false);
                        }}
                        className="bg-gray-700 text-white py-1.5 px-3 rounded hover:bg-gray-600 transition-colors"
                      >
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="/login" 
                        className="bg-gray-700 text-white py-1.5 px-3 rounded hover:bg-gray-600 transition-colors text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        href="/signup" 
                        className="bg-blue-600 text-white py-1.5 px-3 rounded hover:bg-blue-700 transition-colors text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
