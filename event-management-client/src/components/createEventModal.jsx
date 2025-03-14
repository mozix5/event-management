import React from "react";
import { X, ChevronDown } from "lucide-react";
import Spinner from "./spinner.jsx";

const CreateEventModal = ({
  isOpen,
  onClose,
  onSubmit,
  newEvent,
  onInputChange,
  isCreatingEvent,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl max-w-lg w-full max-h-90vh overflow-y-auto border border-gray-700">
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h3 className="text-xl font-bold">Create New Event</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-5">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={onInputChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={onInputChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={newEvent.time}
                onChange={onInputChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={onInputChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Category</label>
            <div className="relative">
              <select
                name="category"
                value={newEvent.category}
                onChange={onInputChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                required
              >
                <option value="religious">Religious</option>
                <option value="social">Social</option>
                <option value="charity">Charity</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={onInputChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-32"
              placeholder="Enter event description"
              required
            ></textarea>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              disabled={isCreatingEvent}
              onClick={onClose}
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              disabled={isCreatingEvent}
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
            >
              {isCreatingEvent ? <Spinner /> : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
