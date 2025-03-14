import React from "react";

const TestimonialCard = ({ quote, name, role }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl relative">
      <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-tr-xl rounded-bl-xl opacity-20"></div>
      <div className="mb-4 text-purple-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.9989 2C6.47774 2 2.00044 6.47731 2.00044 12.0004C2.00044 17.5236 6.47774 22.0009 11.9989 22.0009C17.5222 22.0009 21.9995 17.5236 21.9995 12.0004C21.9995 6.47731 17.5222 2 11.9989 2ZM17.0716 9.64L11.1356 15.576C10.9797 15.732 10.7723 15.8186 10.5541 15.8186C10.3358 15.8186 10.1284 15.732 9.97253 15.576L6.92822 12.5309C6.61591 12.2186 6.61591 11.7138 6.92822 11.4016C7.24053 11.0893 7.74547 11.0893 8.05778 11.4016L10.5541 13.8978L15.9449 8.51111C16.2572 8.1988 16.7622 8.1988 17.0745 8.51111C17.3838 8.82342 17.3838 9.32569 17.0716 9.64V9.64Z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
        <div>
          <h5 className="font-medium text-white">{name}</h5>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
