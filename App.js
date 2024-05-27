import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Header from "./src/components/Header";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";

const App = () => {

  const[userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Virshree Desai"
    }
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider  value={{loggedUser:userName,setUserName}}>
    <div className="app">
    
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const About = lazy(() => import("./src/components/About"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
