"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link";

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
    <header className="bg-black shadow-lg py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-white tracking-tight transition-colors">
          Datascape
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white  text-lg transition-colors">Home</Link>
          <Link href="/aboutus" className="text-gray-300 hover:text-white  text-lg transition-colors">AboutUs</Link>
          <button
            onClick={toggleServices}
            className={`text-gray-300 hover:text-white hover:cursor-pointer text-lg transition-colors ${showServices ? 'text-blue-400' : ''
              }`}
          >
            Services
          </button>
          <Link href="/consulting" className="text-gray-300 hover:text-white text-lg transition-colors">Consulting</Link>
          <Link href="/contactus" className="text-gray-300 hover:text-white  text-lg transition-colors">Contact</Link>

          {/* Login/Signup or Get Started Button */}
          <div className="ml-8 flex space-x-4">
        

            {!loading && isLoggedIn && (
              <>
                <Link href="/getstarted" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
                  Get Started
                </Link>
                <div onClick={logOut} className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-500 transition">
                  Log Out
                </div>
              </>
            )}

            {!loading && !isLoggedIn && (
              <>
                <Link href="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition ">Login</Link>
                <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition ">Signup</Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-white text-2xl">{isMenuOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="text-gray-300 hover:text-white text-lg transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white text-lg transition-colors">About Us</a>
            <button
              onClick={toggleServices}
              className={`text-gray-300 hover:text-white text-lg transition-colors ${showServices ? 'text-blue-400' : ''
                }`}
            >
              Services
            </button>
            <a href="/consulting" className="text-gray-300 hover:text-white text-lg transition-colors">Consulting</a>
            <a href="/contact" className="text-gray-300 hover:text-white text-lg transition-colors">Contact</a>

            <div className="flex space-x-4 mt-4">
              {loading ? (
                <div className="text-gray-300">Loading...</div>
              ) : isLoggedIn ? (
                <a href="/getstarted" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 ">Get Started</a>
              ) : (
                <>
                  <a href="/login" className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 ">Login</a>
                  <a href="/signup" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 ">Signup</a>
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
