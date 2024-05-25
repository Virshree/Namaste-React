import React from "react";
import "./resMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
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
    <div className="menu">
      <div>
        <h2 className="resName">{name}</h2>
        <div className="resMenu">
          <h4>
            {" "}
            ★{avgRating}({totalRatingsString}){costForTwoMessage}
          </h4>

          <h3 className="cuisine-text">{cuisines.join(" ,")}</h3>

          <h4>{city}</h4>
          <hr/>
          <h5 className="resCost">
           2.5 kms | ₹
            {costForTwo/100} Delivery fee will apply
          </h5>
        </div>

        <div className="menu-items">
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
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
