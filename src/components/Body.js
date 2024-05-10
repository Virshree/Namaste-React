import { useState } from "react";
import Resto from "./Resto";
import resObj from "../utils/resData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
  const [searchRestaurant, setSearchRestaurant] = useState("");

function handleSearch(e){
  // e.preventDefault();
  setSearchRestaurant(e.target.value);
  console.log(searchRestaurant);
  setSearchRestaurant('');
  alert(`The name is ${searchRestaurant}`)
}
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteRestaurant = resObj?.filter(
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
