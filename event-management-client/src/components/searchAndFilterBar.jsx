import React from "react";
import { Search, Filter } from "lucide-react";

const SearchAndFilterBar = ({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  isLoadingEvents,
}) => {
  return (
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
          onChange={onSearchChange}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-gray-400" />
        <span className="text-gray-400">Filter:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {["all", "religious", "social", "charity"].map((filter) => (
          <button
            key={filter}
            disabled={isLoadingEvents}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === filter
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
