import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Search,
  Plus,
  Filter,
  X,
  ChevronDown,
  Heart,
  Users,
} from "lucide-react";

const EventsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample event data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Interfaith Dialog Discussion",
      date: "2025-03-15T19:00:00",
      location: "Community Center, 123 Main St",
      description:
        "Join us for an open discussion about different faith traditions and finding common ground.",
      category: "religious",
      attendees: 24,
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "2025-03-18T10:00:00",
      location: "Downtown Food Bank",
      description:
        "Help collect and distribute food to those in need in our community.",
      category: "charity",
      attendees: 42,
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "Young Adults Mixer",
      date: "2025-03-20T18:30:00",
      location: "Riverside Park",
      description:
        "A casual get-together for young adults to make new friends and connections.",
      category: "social",
      attendees: 35,
      image: "/api/placeholder/400/250",
    },
    {
      id: 4,
      title: "Meditation Workshop",
      date: "2025-03-22T09:00:00",
      location: "Mindfulness Center, 45 Oak Ave",
      description:
        "Learn meditation techniques from different traditions to enhance your spiritual practice.",
      category: "religious",
      attendees: 18,
      image: "/api/placeholder/400/250",
    },
    {
      id: 5,
      title: "Community Garden Planting",
      date: "2025-03-25T10:00:00",
      location: "Harmony Gardens",
      description:
        "Help plant the community garden that will provide fresh produce for local food banks.",
      category: "charity",
      attendees: 29,
      image: "/api/placeholder/400/250",
    },
    {
      id: 6,
      title: "Movie Night: Diversity Stories",
      date: "2025-03-27T19:00:00",
      location: "Community Theater",
      description:
        "Watch and discuss films that celebrate diversity and understanding across cultures.",
      category: "social",
      attendees: 53,
      image: "/api/placeholder/400/250",
    },
  ]);

  // Form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "social",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new event with combined date and time
    const combinedDateTime = `${newEvent.date}T${newEvent.time}:00`;

    const createdEvent = {
      id: events.length + 1,
      title: newEvent.title,
      date: combinedDateTime,
      location: newEvent.location,
      description: newEvent.description,
      category: newEvent.category,
      attendees: 0,
      image: "/api/placeholder/400/250",
    };

    // Add to events and close modal
    setEvents([...events, createdEvent]);
    setIsModalOpen(false);

    // Reset form
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: "social",
    });
  };

  // Filter events based on category and search query
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      activeFilter === "all" || event.category === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Format date for display
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format time for display
  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Page Header */}
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
              onClick={() => setIsModalOpen(true)}
              className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Event
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">Filter:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeFilter === "all"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("religious")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeFilter === "religious"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Religious
              </button>
              <button
                onClick={() => setActiveFilter("social")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeFilter === "social"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Social
              </button>
              <button
                onClick={() => setActiveFilter("charity")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeFilter === "charity"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Charity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Listings */}
      <section className="container mx-auto px-4 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-4 text-gray-400">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition duration-300 group"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        event.category === "religious"
                          ? "bg-blue-900 text-blue-200"
                          : event.category === "social"
                            ? "bg-green-900 text-green-200"
                            : "bg-amber-900 text-amber-200"
                      }`}
                    >
                      {event.category.charAt(0).toUpperCase() +
                        event.category.slice(1)}
                    </span>
                  </div>
                </div>

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
                    <span className="text-gray-300 text-sm">
                      {event.location}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>

                    <button className="text-gray-400 hover:text-pink-500 transition duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Create Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-lg w-full max-h-90vh overflow-y-auto border border-gray-700">
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <h3 className="text-xl font-bold">Create New Event</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-32"
                  placeholder="Enter event description"
                  required
                ></textarea>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Communion App. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
