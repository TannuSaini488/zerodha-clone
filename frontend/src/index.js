import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-toastify';
import "./index.css";

import Login from "./landing_page/login/Login.js";
import Signup  from "./landing_page/signup/Signup.js";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from './landing_page/support/SupportPage'
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import HomePage from "./landing_page/home/HomePage.js";

export {default as Login} from './landing_page/login/Login.js';
export {default as Signup} from './landing_page/signup/Signup.js';

// Navigate(`${process.env.REACT_APP_DASHBOARD_URL}`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/product" element={<ProductPage />}/>
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/support" element={<SupportPage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
