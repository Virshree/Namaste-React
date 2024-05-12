import { useEffect, useState } from "react";
import axios from "axios";
import Resto from "./Resto";
import Shimmer from "./Shimmer";
import Header from "./Header";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant,setSearchRestaurant]=useState('');
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);


  useEffect(() => {
    fetchData(); 
  }, []);


  async function fetchData() {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9798657&lng=73.11873270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const res = await axios.get(url);
    
    console.log(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setListOfRestaurant(
       res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
         ?.restaurants
    );
    setFilteredRestaurant(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  }

  //conditional  rendering


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <Header/>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData= listOfRestaurant?.filter(
              (res) => res?.info?.avgRating > 4
            );
            console.log(filterData);
            setListOfRestaurant(filterData);
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
          onChange={(e) =>setSearchRestaurant(e.target.value) }
          placeholder="Enter your search"
        />
        <button
          className="search-btn"
          onClick={()=>{console.log(searchRestaurant);

         const filtered=listOfRestaurant?.filter((search)=>search?.info?.name.toLowerCase().
               includes(searchRestaurant.toLowerCase()));
             console.log(filtered);
              setFilteredRestaurant(filtered);
          
          }}
        >
          Search
        </button>
        
      </div>

      <div className="resto-container">
        {filteredRestaurant.map((restaurant, index) => (
          <Resto key={index} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
