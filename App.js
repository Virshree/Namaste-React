import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Header from "./src/components/Header";


const  App=() => {

  return (
    <div className="app">
      <Header/>
      <Outlet/>   
    </div>
  );
};

export const appRouter=createBrowserRouter
([
  {
    path: "/",
    element:<App/>,
   
    children:[{
      path:"/about",
      element:<About/>
    },
    {
      path:"/",
      element:<Body/>
    },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>
  }
  ],
  errorElement:<Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);