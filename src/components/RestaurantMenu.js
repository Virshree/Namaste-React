import React, { useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  const [showIndex,setShowIndex]=useState(null);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    city,
    costForTwo,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  

  return (
    <div className="">
      <div className="flex items-center mx-auto flex-col text-xl ">
        <h2 className="font-bold text-3xl  mt-5 py-4 ">{name}</h2>
        <div className="bg-white-400  bg-gray-150 shadow-xl  rounded-lg border border-t-6	 w-6/12">
          <h4 className="font-bold text-xl m-2 p-3">
            {" "}
            ★{avgRating}({totalRatingsString}) - {costForTwoMessage}
          </h4>

          <h3 className="m-2 p-3 text-orange-600  text-xl">
            {cuisines.join(" ,")}
          </h3>

          <h4 className="m-2 p-3 text-xl ">{city}</h4>
          <hr />
          <h5 className="m-2 p-3 text-gray-400 text-xl">
            2.5 kms | ₹{costForTwo / 100} Delivery fee will apply
          </h5>
        </div>

        <div className="w-6/12 cursor-pointer">
          {categories?.map((category,index) => {
            return (
              <div className="">
                <RestaurantCategory
                  resList={category?.card?.card}
                  key={category?.card?.info?.id}
                  showItems={index=== showIndex ? true : false}
                   setShowIndex={()=>setShowIndex(index)}
                />
              </div>
            );
          })}
        </div>
       
      </div>
    </div>
  );
};

export default RestaurantMenu;
