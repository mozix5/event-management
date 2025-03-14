import React from "react";
import Home from "./pages/home.jsx";
import EventsPage from "./pages/events.jsx";
import Auth from "./pages/auth.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes.jsx";
import { ToastContainer } from "./components/toast.jsx";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/events" element={<EventsPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
