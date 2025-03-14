import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Lock, Mail, User } from "lucide-react";
import { useLoginMutation, useRegisterMutation } from "../services/api.js";
import { createSession } from "../utils/session.js";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // 'login' or 'signup'

  const [login, { isLoading }] = useLoginMutation();
  const [register, { isRegistering, error }] = useRegisterMutation();

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      const { user, token } = response;
      createSession({ user, token });
      navigate("/events", { replace: true });
    } catch (error) {
      window.toast.error(error?.error || "Something went wrong");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register({ username, email, password }).unwrap();
      setActiveTab("login");
      window.toast.success("User registered successfully");
    } catch (error) {
      window.toast.error(error?.data.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 pb-0 text-center">
                <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {activeTab === "login" ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-gray-400 mb-6">
                  {activeTab === "login"
                    ? "Sign in to your Communion account"
                    : "Join the Communion community"}
                </p>
              </div>

              <div className="flex border-b border-gray-700 mb-6">
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors duration-300 ${activeTab === "login" ? "text-purple-400 border-b-2 border-purple-500" : "text-gray-400 hover:text-gray-300"}`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-3 text-center font-medium transition-colors duration-300 ${activeTab === "signup" ? "text-purple-400 border-b-2 border-purple-500" : "text-gray-400 hover:text-gray-300"}`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>

              {activeTab === "login" && (
                <form className="p-6 pt-0" onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Lock size={18} />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition duration-200"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
                  >
                    Login
                  </button>
                </form>
              )}

              {activeTab === "signup" && (
                <form className="p-6 pt-0" onSubmit={handleSignup}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        id="name"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="signup-email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        id="signup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="signup-password"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Lock size={18} />
                      </div>
                      <input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition duration-200"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
                  >
                    Create Account
                  </button>
                </form>
              )}
              <div className="px-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex-grow border-t border-gray-700"></div>
                  <span className="mx-4 text-sm text-gray-500">OR</span>
                  <div className="flex-grow border-t border-gray-700"></div>
                </div>
              </div>
              <div className="px-6 pb-6 text-center">
                <p className="text-gray-400">
                  {activeTab === "login" ? (
                    <>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setActiveTab("signup")}
                        className="text-purple-400 hover:text-purple-300 font-medium transition duration-200"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-purple-400 hover:text-purple-300 font-medium transition duration-200"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
