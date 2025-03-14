import React, { useState } from "react";
import { useCreateEventMutation, useGetEventsQuery } from "../services/api.js";
import EventsHeader from "../components/eventsHeader.jsx";
import SearchAndFilterBar from "../components/searchAndFilterBar.jsx";
import EventCard from "../components/eventCard.jsx";
import CreateEventModal from "../components/createEventModal.jsx";

const EventsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: events = [],
    isLoading: isEventsLoading,
    refetch,
  } = useGetEventsQuery({
    filter: activeFilter,
    search: searchQuery,
  });

  const [createEvent, { isLoading: isCreatingEvent }] =
    useCreateEventMutation();

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "social",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(newEvent).unwrap();
      setIsModalOpen(false);
      window.toast.success("Event created successfully");
      setNewEvent({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        category: "social",
      });
      refetch();
    } catch (error) {
      window.toast.error(error?.data.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <EventsHeader onOpenModal={() => setIsModalOpen(true)} />

      <div className="container mx-auto px-4">
        <SearchAndFilterBar
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <section className="py-8">
          {isEventsLoading ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">Loading events...</h3>
            </div>
          ) : events?.length === 0 ? (
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
              {events.events?.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>

      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        newEvent={newEvent}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default EventsPage;
