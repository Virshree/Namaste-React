import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
