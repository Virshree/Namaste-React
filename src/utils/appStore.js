import { configureStore } from "@reduxjs/toolkit";
 import CartReducer from './cartSlice';
import restaurantSlice from "./restaurantSlice";
import locationSlice from "./locationSlice";

const store=configureStore({
     reducer:{
        cart:CartReducer,
        restaurant:restaurantSlice,
        location:locationSlice
     }
});

export default store;