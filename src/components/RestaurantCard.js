import React, { useContext } from "react";

import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

function RestaurantCard(props) {
  const { resName } = props;


  const {
    name,
    avgRating,
    cuisines,
    locality,
    costForTwo,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    sla,
  } = resName?.info;
  const {loggedUser}=useContext(UserContext);
  // console.log(loggedUser);
  return (
    <div className="m-4 p-4 w-80 flex-col bg-gray-100 text-xl rounded-lg hover:bg-gray-200 cursor-pointer ">
      <label className="bg-black	 text-white mb-2 p-2 rounded-lg ">
        {aggregatedDiscountInfoV3?.header
          ? aggregatedDiscountInfoV3?.header
          : "50 % OFF "}{" "}
        {aggregatedDiscountInfoV3?.subHeader
          ? aggregatedDiscountInfoV3?.subHeader
          : "UPTO ₹120"}
      </label>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
        width="150px"
        height="150px"
        className="w-72  m-auto  p-auto rounded-xl h-60"
      />
      <h2 className="font-bold	text-2xl py-4">{name}</h2>
      <h4 className="font-bold text-xl py-2">
        {avgRating} ⭐ {sla?.deliveryTime ? sla?.deliveryTime : 0} minutes{" "}
      </h4>
      <h4 className="font-semi-bold py-2"> {costForTwo}</h4>

      <h4 className="text-gray-500 py-2">{cuisines.join(" , ")}</h4>
      <h4 className="uppercase">{locality}</h4>
      <h4>User:{loggedUser}</h4>
    </div>
  );
}

export default RestaurantCard;
