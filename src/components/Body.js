import { useState } from "react";
import Resto from "./Resto";
import resObj from "../utils/resData";


const Body = () => {

  const [listOfRestaurant,setListOfRestaurant]=useState(resObj)

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"  
          onClick={()=>{
            let filteRestaurant=resObj?.filter(res=>res.info.avgRating > 4)
          console.log(filteRestaurant);
            setListOfRestaurant(filteRestaurant)
          }
          
          }> Top Rated Restaurant</button>
        </div>
        {/* <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your search"
          />
          <button className="search-btn">Search</button>
        </div> */}
        <div className="resto-container">
          {listOfRestaurant.map((restaurant,index) => (
            <Resto key={index} resName={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;