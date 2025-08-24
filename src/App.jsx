import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Navbar/Loader";
import SignUp from "./Components/Navbar/SignUp";
import Login from "./Components/Navbar/Login";
import Footer from "./Components/Navbar/Footer";
import Navbar from "./Components/Navbar/Navbar"

const Home = () => <h1></h1>;

const PageLoader = ({ children, setLoading }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/login") {
      navigate("/home", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return showContent ? children : null;
};



const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (navType === "back_forward") {
      const savedPosition = sessionStorage.getItem(`scroll-${location.key}`);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${location.key}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return null;
};

const AppContent = ({ user, handleLogin }) => (
  <>
    <Navbar user={user} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
    </Routes>
    <div className="main-container">
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  </>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleLogin = (profile) => {
    setUser(profile);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <ScrollRestoration />

      {loading && <Loader />}

      <PageLoader setLoading={setLoading}>
        <AppContent user={user} handleLogin={handleLogin} />
      </PageLoader>
    </div>
  );
};

export default App;
