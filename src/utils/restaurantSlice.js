import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice=createSlice({
    name:'restaurant',
    initialState:{
        carouselItem:[],
    },
    reducers:{
        putCarouselItem:(state,action)=>{
            state.carouselItem.push(action.payload);
        }
    }
})

export const {putCarouselItem}=restaurantSlice.actions;

export default restaurantSlice.reducer