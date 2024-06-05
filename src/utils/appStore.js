import { configureStore } from "@reduxjs/toolkit";
 import CartReducer from './cartSlice';
import restaurantSlice from "./restaurantSlice";

const appStore=configureStore({
     reducer:{
        cart:CartReducer,
        restaurant:restaurantSlice
     }
});

export default appStore;