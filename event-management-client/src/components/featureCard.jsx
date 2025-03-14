import React from "react";
import { Calendar } from "lucide-react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300 group">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
        <Calendar className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold mb-3 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
