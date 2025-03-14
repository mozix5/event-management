import React from "react";
import { Plus } from "lucide-react";

const EventsHeader = ({ onOpenModal }) => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-400">
              Discover and connect with events in your community
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsHeader;
