import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItems}  from '../utils/cartSlice';
import { toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 import vegLogo from "../assets/veg.png";
 import NonvegLogo from "../assets/nonveg.png";

const ItemList = ({ data }) => {
  // console.log(data);
  const disptach=useDispatch();


  const handleAddItem=(items)=>{
    disptach(addItems(items));
    toast.success("Item Added Sucessfully !")
 
  }
  return (
    <div>
      {data?.map((items) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={items?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="flex m-2 text-orange-600 ">{items?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? 
              <img src={vegLogo} alt="veg" className="w-8 h-8 "/>:
              <img src={NonvegLogo}  alt="nonveg" className="w-8 h-8 hover:cursor-pointer"/>
              
              } {items?.card?.info?.ribbon?.text}
              </span>
             
              <span className="font-bold text-xl m-2 p-1">
                {items?.card?.info?.name} -
              </span>
              <span className="font-bold ">
                ₹
                {items?.card?.info?.price / 100
                  ? items?.card?.info?.price / 100
                  : items?.card?.info?.defaultPrice / 100}{" "}
              </span>
              <br/>
              <span> ⭐ {items?.card?.info?.ratings?.aggregatedRating?.rating  || 4.3}</span>
            </div>
            <p className="text-md text-gray-500 m-2 p-1">
              {items?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4  ">
            <button className=" bg-slate-100  text-green-600 text-xl hover:bg-slate-300 
             font-bold p-2 hover:cursor-pointer ms-12  m-[120px]  w-28 rounded-xl  absolute"
             onClick={()=>handleAddItem(items)}>
              ADD
              <ToastContainer limit={1} position={"top-center"}/>

            </button>
            <img
              src={CDN_URL + items?.card?.info?.imageId}
              alt="logo"
              className="w-40 h-36 rounded-xl mx-auto  "
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
