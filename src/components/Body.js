import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_API);
    const json = await res.json();
    // console.log(json?.data);
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h2>Check Internet connection ⚠️</h2>;

  //conditional  rendering

  const {loggedUser,setUserName}=useContext(UserContext);

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex">
        <div className="search flex items-center">
          <input
            type="text"
            className="border focus:border-sky-500  border-solid border-black m-4 text-2xl	"
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            className="bg-green-200 mx-2 px-2 py-2 rounded-lg text-xl"
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
          <button
            className="bg-gray-200 m-4 px-4 p-4 text-xl "
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
          <div className="m-4 px-4 p-4 text-xl">
            <label>UserName: </label>
         
          <input
            className="border border-black p-2 "
            value={loggedUser}
            onChange={(e)=>setUserName(e.target.value)}
         />
            {" "}
            </div>
          
        </div>
      </div>
      <div className="flex flex-wrap ">
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
