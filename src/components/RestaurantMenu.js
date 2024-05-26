import React from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

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

  return (
    <div className="">
      
      <div className="flex items-center mx-auto flex-col text-xl ">
     
      <h2 className="font-bold text-3xl  mt-5 py-4  ">{name}</h2> 
        <div className="bg-white-400  bg-gray-150 shadow-xl  rounded-lg border border-t-6	 w-6/12">
      
          <h4 className="font-bold text-xl m-2 p-3">
            {" "}{" "}
            ★{avgRating}({totalRatingsString}) - {costForTwoMessage}
          </h4>

          <h3 className="m-2 p-3 text-orange-600  text-xl">{cuisines.join(" ,")}</h3>

          <h4 className="m-2 p-3 text-xl ">{city}</h4>
          <hr/>
          <h5 className="m-2 p-3 text-gray-400 text-xl">
           2.5 kms | ₹
            {costForTwo/100} Delivery fee will apply
          </h5>
        </div>

        <div>
          
        </div>
        {/* <div className="menu-items">
          <div>
            <h2>Recommended({itemCards.length})</h2>
            <ul>
              {itemCards?.map((item) => {
                return (
                  <div className="card-menu" key={item?.card?.info?.id}>
                    {" "}
          
                    <b>
                      {" "}
                      <li>
                        {item?.card?.info?.name}- ₹
                        
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}{" "}
                      </li>
                    </b>
                    
                    <img
                      className="imgs-card"
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt="logo"
                      width="200px"
                      height="250px"
                    />
                   
                    <p className="menu-text">{item?.card?.info?.description}</p>
                    <hr/>
                  </div>
                );
              })}
            </ul>
           
          </div>
        </div> */}
      </div>
    </div>
  );
}; 

export default RestaurantMenu;
