import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-purple-500 mr-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4.5a7.5 7.5 0 0 0-7.5 7.5c0 7.5 7.5 10.5 7.5 10.5s7.5-3 7.5-10.5a7.5 7.5 0 0 0-7.5-7.5Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Communion
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-purple-400 font-medium">
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            About
          </a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-gray-300 hover:text-purple-400 transition duration-300">
            Log In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-gray-300" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-purple-400 font-medium py-2">
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition duration-300 py-2"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition duration-300 py-2"
            >
              About
            </a>
            <hr className="my-2 border-gray-700" />
            <button className="px-4 py-2 text-gray-300 hover:text-purple-400 transition duration-300">
              Log In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
