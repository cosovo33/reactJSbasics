import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./component/dashboard";
import AboutUs from "./component/dashboard/aboutus";
import Charts from "./component/dashboard/chart";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
};

export default App;
