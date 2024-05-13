import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import "./resMenu.css";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2893144&lng=80.4604643&restaurantId=123456";
    const data = await axios.get(url);
    console.log(data);
    console.log(data?.data?.data?.cards[2]?.card?.card?.info?.name);
    setResInfo(data);
  }
  // const {
    
  //   cuisines,
  //   costForTwoMessage,
  //   avgRating,
  //   city,
  //   totalRatingsString,
  //   lastMileTravelString,
  //   costForTwo,
  // } = resInfo?.data?.data?.cards[2]?.card?.card?.info;

  const itemCards =resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.
  REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);


  return (
    <div className="menu">
      <Header />
      <div>
        <h2 className="resName">{resInfo?.data?.data?.cards[2]?.card?.card?.info?.name}</h2>
        <div className="resMenu">
          <h4>
            {" "}
            ★{resInfo?.data?.data?.cards[2]?.card?.card?.info?.avgRating}
            ({resInfo?.data?.data?.cards[2]?.card?.card?.info?.totalRatingsString})
            {resInfo?.data?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
      
          </h4>

          <h3 className="cuisine-text">{resInfo?.data?.data?.cards[2]?.card?.card?.info?.cuisines.join(" ,")}</h3>

          <h4>{resInfo?.data?.data?.cards[2]?.card?.card?.info?.city}</h4> 
          <h5 className="resCost">
            {resInfo?.data?.data?.cards[2]?.card?.card?.info?.lastMileTravelString} 1.2 kms | Rs.
             {resInfo?.data?.data?.cards[2]?.card?.card?.info?.costForTwo} Delivery fee will
            apply
          </h5>
        </div>
        <div>
          <h2>Menu</h2>
          {/* {itemCards.map((items,index)=>{
            <li key={index}>{items?.card?.info?.name}</li>
          })} */}
          <ul>
 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
