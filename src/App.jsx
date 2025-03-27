import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation, useNavigate, Outlet,  } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Navbar/Footer";
import SignUp from "./Components/Navbar/SignUp";
import Login from "./Components/Navbar/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const handleLogin = (profile) => {
    setUser(profile);
  };

  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  // Automatically navigate to /home if the user lands on the root or any other path
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/login") {
      navigate("/home", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    setRefresh((prev) => prev + 1);
  }, [location]);  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div key={refresh} className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
      
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>

      {/* Render Navbar, Footer, and other components only if not on the signup or login page */}
      {!isAuthPage && (
        <>
          <Navbar user={user} />
          <div className="main-container">
            <div className="content">
              <Outlet/>
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;