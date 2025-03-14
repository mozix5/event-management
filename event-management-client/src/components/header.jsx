import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/reducers/authSlice.js";
import { destroySession } from "../utils/session.js";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    destroySession();
    dispatch(logout());
  };

  const isActive = (path) => location.pathname === path;

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
          <button
            onClick={() => handleNavigation("/")}
            className={`font-medium ${
              isActive("/") ? "text-purple-400" : "text-gray-300"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/events")}
            className={`hover:text-purple-400 transition duration-300 ${
              isActive("/events") ? "text-purple-400" : "text-gray-300"
            }`}
          >
            Events
          </button>
        </nav>

        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-purple-400">{user?.username}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavigation("/auth")}
                className={`px-4 py-2 hover:text-purple-400 transition duration-300 ${
                  isActive("/auth") ? "text-purple-400" : "text-gray-300"
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => handleNavigation("/auth")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <button className="md:hidden text-gray-300" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation("/")}
              className={`font-medium py-2 text-left ${
                isActive("/") ? "text-purple-400" : "text-gray-300"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/events")}
              className={`hover:text-purple-400 transition duration-300 py-2 text-left ${
                isActive("/events") ? "text-purple-400" : "text-gray-300"
              }`}
            >
              Events
            </button>
            <hr className="my-2 border-gray-700" />
            {isAuthenticated ? (
              <div className="flex flex-col space-y-4">
                <span className="text-purple-400 py-2 text-left">
                  {user?.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300 text-left"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/auth")}
                  className={`px-4 py-2 hover:text-purple-400 transition duration-300 text-left ${
                    isActive("/auth") ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => handleNavigation("/auth")}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300 text-left"
                >
                  Sign Up
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
