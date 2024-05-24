import React from "react";
import "./resto.css";
import { CDN_URL } from "../utils/constants";

function RestaurantCard(props) {
  const { resName } = props;

  const {
    name,
    avgRating,
    cuisines,
    locality,
    costForTwo,
    cloudinaryImageId,  
    sla,
  } = resName?.info;
  return (
    <div className="resto">
      <div className="resto-img">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="logo"
          width="200px"
          height="200px"
          className="img"
        />
        <h2>{name}</h2>
        <h4>{avgRating} ⭐ </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime ? sla?.deliveryTime : 0} minutes</h4>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
