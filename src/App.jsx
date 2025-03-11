import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";

const TRACKING_ID = "G-WNRMQXCDP7"; 
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <AnalyticsTracker /> {/* Tracks page views */}
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Track page views
function AnalyticsTracker() {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

export default App;
