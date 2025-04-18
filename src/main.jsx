import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';


import {
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About/About.jsx';
import Services from './Home/Services.jsx';
import Projects from './Components/Navbar/Projects.jsx';
import FAQSection from './Components/Navbar/Faq.jsx';
import Login from './Components/Navbar/Login.jsx';
import SignUp from './Components/Navbar/SignUp.jsx';
import Logout from './Components/Navbar/Logout.jsx';
import ContactUs from './ContactPage/ContactUs.jsx';
import Support from './Components/Navbar/Support.jsx';
import Message from './Components/Navbar/Message.jsx';
import Reviews from './Components/Navbar/Reviews.jsx';
import Home from './Home/Home.jsx';
import Loader from './Components/Navbar/Loader.jsx';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/faq",
        element: <FAQSection/>
      },

      {
    
        path: "support",
        element: <Support/>
      },
      {
        path: "message",
        element: <Message/>
      },
      {
        path: "reviews",
        element: <Reviews/>
      },
      {
        path: "/loader",
        element: <Loader/>
      }

    ],
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/logout",
    element: <Logout />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);