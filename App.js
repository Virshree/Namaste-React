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
// import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";
import Shimmer from "./src/components/Shimmer";
import { ChakraProvider } from "@chakra-ui/react";


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
    <div className="">
<ChakraProvider>
    <Provider store={appStore} >
    <UserContext.Provider  value={{loggedUser:userName,setUserName}}>
    <div className="app">
    
      <Header />
      
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    </ChakraProvider>

    </div>
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
            <About />
        ),
      },
      {
        path: "/",
        element: <Suspense fallback={<Shimmer/>}><Body /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
            <Grocery />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: 
 
           <RestaurantMenu />,
    
      
      },
      {
        path: "/cart",
        element:<Cart/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
