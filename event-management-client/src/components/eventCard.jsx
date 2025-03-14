import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition duration-300 group">
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition duration-300">
          {event.title}
        </h3>

        <div className="flex items-start mb-2">
          <Calendar className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <div className="text-gray-300 text-sm">
              {formatDate(event.date)}
            </div>
            <div className="text-gray-400 text-sm">
              {formatTime(event.date)}
            </div>
          </div>
        </div>

        <div className="flex items-start mb-3">
          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-gray-300 text-sm">{event.location}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <div className="flex items-center text-gray-400 text-sm">
            <Users className="h-4 w-4 mr-1" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
