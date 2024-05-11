import { useEffect, useState } from "react";
import axios from "axios";
 import Resto from "./Resto";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

function handleSearch(e){
  // e.preventDefault();
  setSearchRestaurant(e.target.value);
  console.log(searchRestaurant);
}
useEffect(()=>{
fetchData();
},[])

async function fetchData(){

const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9798657&lng=73.11873270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
const res=await axios.get(url);     
 setListOfRestaurant(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteRestaurant = listOfRestaurant?.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteRestaurant);
            setListOfRestaurant(filteRestaurant);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">
        <input
          type="text"
   
          className="search-input"
          placeholder="Enter your search"
        />
        <button
          className="search-btn"
              value={searchRestaurant}
          onChange={()=>handleSearch()}

        >
          Search
        </button>
        {searchRestaurant}
      </div>

      <div className="resto-container">
        {listOfRestaurant.map((restaurant, index) => (
          <Resto key={index} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
