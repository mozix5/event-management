import React, { useState, useEffect } from "react";

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [progressWidth, setProgressWidth] = useState(100);

  const toastTypes = {
    success: {
      gradient: "bg-gradient-to-r from-green-400 to-teal-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    warning: {
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    error: {
      gradient: "bg-gradient-to-r from-red-500 to-pink-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    },
    info: {
      gradient: "bg-gradient-to-r from-blue-400 to-indigo-500",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const percent = (remaining / duration) * 100;
      setProgressWidth(percent);

      if (percent > 0) {
        requestAnimationFrame(updateProgress);
      } else {
        handleClose();
      }
    };

    const animationId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationId);
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose && onClose();
    }, 500);
  };

  const style = toastTypes[type] || toastTypes.info;

  return (
    <div
      className={`fixed bottom-4 right-4 flex flex-col w-72 backdrop-blur-sm transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
      role="alert"
    >
      <div
        className={`rounded-t-xl ${style.gradient} p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform`}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3 bg-white/20 p-2 rounded-full">
            {style.icon}
          </div>
          <div className="text-white font-medium ml-1">{message}</div>
          <button
            type="button"
            className="ml-auto -mr-1 bg-white/20 text-white rounded-full p-1 hover:bg-white/30 transition-colors"
            aria-label="Close"
            onClick={handleClose}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-b-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
        <div
          className={`h-full ${style.gradient}`}
          style={{
            width: `${progressWidth}%`,
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5); // Generate a unique ID
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
    return id;
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  React.useEffect(() => {
    window.toast = {
      success: (message, duration) => addToast(message, "success", duration),
      warning: (message, duration) => addToast(message, "warning", duration),
      error: (message, duration) => addToast(message, "error", duration),
      info: (message, duration) => addToast(message, "info", duration),
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col-reverse gap-3">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{
            transform: `translateY(${index * -5}px)`,
            zIndex: 50 - index,
          }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

export { ToastContainer };
