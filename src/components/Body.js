import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import {  RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import MenuName from "./MenuName";

const Body = () => {
  const [itemInfo, setItemInfo] = useState([]);

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  
  const [leftSide,setLeftSide]=useState('');
  const [rightSide,setRightSide]=useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_API);
    const json = await res.json();
    // console.log(json?.data);

    setItemInfo(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    // console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(itemInfo);
    //  console.log(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h2>Check Internet connection ⚠️</h2>;

  //conditional  rendering

  const { loggedUser, setUserName } = useContext(UserContext);

  function handleLeft(){
    const l=[...itemInfo.slice(0,6)];
    setLeftSide(leftSide);
    console.log(l);
    console.log(leftSide)
   
  }

  function handleRight(){
    const r=[...itemInfo.slice(6,12)];

    setRightSide(rightSide);
    console.log(r);
    console.log(rightSide)
  }

  return (
    <div className="mt-6">
      <h2 className="text-3xl  font-bold ml-56 ">What's on your mind ?</h2>
      <div className="mx-28 p-2">
      <button className="bg-gray-400  text-xl   float-right rounded-xl"
       onClick={()=>handleRight()}>↪ </button>
      <button className="bg-gray-400 text-xl float-right  rounded-xl" onClick={()=>handleLeft()}>
      ↩ 
      </button>
      </div>
      <br />
      <br />
      <div className="text-xl font-bold m-2 p-2 flex flex-wrap ml-56">
        {itemInfo?.slice(0,6).map((menu) => (
          <div>
            {leftSide || rightSide ||  <MenuName resMenuList={menu}  /> }
           
          </div>
        ))}
      </div>
          <hr/>
      <div className="ml-56">
        <div className="flex">
          <div className="search flex items-center">
            <input
              type="text"
              className="border focus:border-sky-500  border-solid border-black m-4 text-2xl	"
              value={searchRestaurant || " "}
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
                onChange={(e) => setUserName(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
        <hr />
        <div className="m-3 p-3 ">
          <h2 className="text-3xl   font-bold ">
            Top restaurant chains in Mumbai
          </h2>
        </div>

        <br />

        <div className="flex flex-wrap  ">
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
    </div>
  );
};

export default Body;
