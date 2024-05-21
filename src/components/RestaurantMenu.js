import React, { useState, useEffect } from "react";
import axios from "axios";
import "./resMenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, REST_INFO_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    // const url=(REST_INFO_API_URL + resId);
    // const data = await axios.get(url);
    const data = await fetch(REST_INFO_API_URL + resId);
    const json = await data.json();
    console.log(json?.data);

    setResInfo(json?.data);
    console.log("resMenu", resMenu);

    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <div>
        <h2 className="resName">{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
        <div className="resMenu">
          <h4>
            {" "}
            ★{resInfo?.cards[2]?.card?.card?.info?.avgRating}(
            {resInfo?.cards[2]?.card?.card?.info?.totalRatingsString})
            {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </h4>

          <h3 className="cuisine-text">
            {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(" ,")}
          </h3>

          <h4>{resInfo?.cards[2]?.card?.card?.info?.city}</h4>
          <h5 className="resCost">
            {resInfo?.cards[2]?.card?.card?.info?.lastMileTravelString} 1.2 kms
            | Rs.
            {resInfo?.cards[2]?.card?.card?.info?.costForTwo} Delivery fee will
            apply
          </h5>
        </div>
        <div className="menu-items">
          <h2>Recommended</h2>
          <div>
            <ul>
              {resMenu?.map((item) => {
                return (
                  <div className="item-card">
                    <b>
                      {" "}
                      <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}- Rs.
                        {item?.card?.info?.defaultPrice / 100}{" "}
                        {item?.card?.info?.price / 100}{" "}
                      </li>
                    </b>

                    <img
                      className="img-card"
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt="menu-item"
                      width="200px"
                      height="220px"
                    />
                    <p className="menu-text">{item?.card?.info?.description}</p>
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
