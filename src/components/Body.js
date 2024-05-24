import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {

    const res = await fetch(RESTAURANT_API);
    const json = await res.json();
    console.log(json?.data);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(filteredRestaurant);
  }

  //conditional  rendering

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = listOfRestaurant?.filter(
              (res) => res?.info?.avgRating > 4
            );
            // console.log(filterData);
            setFilteredRestaurant(filterData);
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
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          placeholder="Enter your search"
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchRestaurant);

            const filtered = listOfRestaurant?.filter((search) =>
              search?.info?.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );
            console.log(filtered);
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>

      <div className="resto-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info.id}
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant?.info.id}
          >
            {" "}
            <RestaurantCard resName={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
