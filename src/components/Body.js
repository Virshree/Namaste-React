import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import MenuName from "./MenuName";
import CityMenu from "./CityMenu";
import CuisineMenu from "./CuisineMenu";
import ExploreMenu from "./ExploreMenu";
import Footer from "./Footer";

const Body = () => {
  const [itemInfo, setItemInfo] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [cityMenu, setCityMenu] = useState([]);
  const [cuisneMenu, setCuisneMenu] = useState([]);
  const [exploreMenu, setExploreMenu] = useState([]);

  const cityMenuItem = 11;
  const [next, setNext] = useState(cityMenuItem);

  const cuisineMenuItem = 11;
  const [cuisineNext, setCuisineNext] = useState(cuisineMenuItem);

  const handleMoreMenuItems = () => {
    setNext(next + cityMenuItem);
  };

  const handleMoreCuisineItem = () => {
    setCuisineNext(cuisineNext + cuisineMenuItem);
  };
  useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_API);
    const json = await res.json();
    console.log(json?.data);  

    setExploreMenu(json.data?.cards[8]?.card?.card?.brands);

    setCuisneMenu(json.data?.cards[7]?.card?.card?.brands);
    setCityMenu(json?.data?.cards[6]?.card?.card?.brands);

    setItemInfo(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h2>Check Internet connection ⚠️</h2>;

  //conditional  rendering


  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold ml-56  ">What's on your mind ?</h2>

      <br />

      <div
        className="text-xl font-bold mx-5 flex  ml-40 mr-32 pr-5
      overflow-x-scroll  "
      >
        {itemInfo?.map((menu) => {
          return <MenuName key={menu.id} resMenuList={menu} />;
        })}
      </div>
      <hr />
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
              className="bg-green-200 mx-2  py-2 px-2 rounded-lg text-xl"
              onClick={() => {
                // console.log(searchRestaurant);

                const filtered = listOfRestaurant?.filter((search) =>
                  search?.info?.name
                    .toLowerCase()
                    .includes(searchRestaurant.toLowerCase())
                );
                // console.log(filtered);
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
         
          </div>
        </div>
        <hr />
        <div className="m-3 p-3 ">
          <h2 className="text-3xl   font-bold ">
            Top restaurant chains in Mumbai
          </h2>
          <button className="bg-white-400 text-black m-2 p-2  text-xl border border-black
           rounded-lg" 
           onClick={()=>{

           }}
           >Pure Veg</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl border border-black
           rounded-lg">Offers</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl  border border-black
          rounded-lg">Fast delivery</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl  border border-black
          rounded-lg">New on Swiggy</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl  border border-black
          rounded-lg"
          onClick={() => {
            const filterData = listOfRestaurant?.filter(
              (res) => res?.info?.avgRating > 4.1
            );

            setFilteredRestaurant(filterData);
          }}
          >Rating 4.0 +</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl  border border-black
          rounded-lg">Rs.300-Rs.600</button>
          <button className="bg-white-400 text-black m-2 p-2  text-xl border border-black
          rounded-lg"
          onClick={() => {
            const filterData = listOfRestaurant?.filter(
              (res) => res?.info?.costForTwo < 300
            );
              console.log(filterData);
            setFilteredRestaurant(filterData);
          }}
          >Less than Rs.300</button>
        </div>

        <br />

        <div className="flex flex-wrap  ">
          {filteredRestaurant?.map((restaurant,index) => (
            <Link
              to={"/restaurant/" + restaurant?.info.id}
              style={{ textDecoration: "none", color: "black" }}
              // key={restaurant?.info.id}
              key={index}
            >
              {" "}
              <RestaurantCard resName={restaurant} key={restaurant?.info?.id} />
            </Link>
          ))}
        </div>

        <hr />
        <h3 className="font-bold text-3xl mt-14 p-5">
          Best Places to Eat Across the Cities
        </h3>
        <div className=" pr-28 grid grid-cols-4 gap-4 mb-9">
          {cityMenu?.slice(0, next)?.map((city) => {
            return (
              <div>
                <CityMenu resCity={city} key={city?.id} />
              </div>
            );
          })}

          {next <= cityMenu?.length && (
            <button
              className="mt-4  bg-white-400  text-xl   p-2 border border-gray rounded-xl"
              onClick={() => handleMoreMenuItems()}
            >
              Show More ⬇
            </button>
          )}
        </div>

        <hr />
        <h3 className="font-bold text-3xl mt-14 p-5">Best Cuisines Near Me</h3>
        <div className="pr-28 grid grid-cols-4 gap-4 mb-9">
          {cuisneMenu?.slice(0, cuisineNext)?.map((cuisine) => {
            return <CuisineMenu resCuisine={cuisine} key={cuisine?.id} />;
          })}
  
            {cuisineNext <= cuisneMenu.length && (
              <button
                className=" bg-white-400  text-xl p-3  border border-gray
              rounded-xl"
                onClick={() => handleMoreCuisineItem()}
              >
                {" "}
                Show More ⬇
              </button>
            )}
        </div>

        <hr />
        <h3 className="font-bold text-3xl mt-14 p-5">
          Explore Every Restaurants Near Me
        </h3>
        <div className="pr-28 grid grid-cols-2 gap-2 mb-9">
          {exploreMenu?.map((explore) => {
            return <ExploreMenu resExplore={explore} key={explore?.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
