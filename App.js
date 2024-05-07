import React from "react";
import ReactDOM from "react-dom/client";
import Resto from "./components/RestaurandCard/Resto";
import "./App.css";
/**
 * Header Component
 * 1.Logo
 * 2.Navbar Items
 *
 * Body Component
 * 1.Search
 * 2.Restaurant containers
 * 3.Restaurant cards
 *
 * Footer Component
 * 1.copyright
 * 2.links
 * 3.address
 * 4.contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj=[{
  "info":{
    "id": "447754",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Panvel",
    "areaName": "Panvel",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 3.8,
    "parentId": "721",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 45,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  },
 
},
{
  "info": {
    "id": "726166",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "LOKMANYA NAGAR",
    "areaName": "Panvel",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "61955",
    "avgRatingString": "4.2",
    "totalRatingsString": "500+",
  }
}
,
{
  "info": {
    "id": "105250",
    "name": "UBQ by Barbeque Nation",
    "cloudinaryImageId": "nt3tmbosghu2vjyg1udr",
    "locality": "Orion Mall",
    "areaName": "Panvel",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts"
    ],
    "avgRating": 3.8,
    "parentId": "10804",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
  },

},
{
  "info": {
    "id": "305821",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "eysc5htccvwlwtakqw6p",
    "locality": "Panvel",
    "areaName": "Panvel",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts"
    ],
    "avgRating": 3.7,
    "parentId": "2438",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
}
},
{
  "info": {
    "id": "692143",
    "name": "BOOM Sandwich - Sub of India",
    "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
    "locality": "east raigad",
    "areaName": "Panvel",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Snacks",
      "Indian",
      "Desserts"
    ],
    "avgRating": 4,
    "parentId": "401169",
    "avgRatingString": "4.0",
    "totalRatingsString": "50+",
  }
},
{
  "info": {
    "id": "49513",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_49513.JPG",
    "locality": "Navi Mumbai",
    "areaName": "Panvel",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4,
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},{
  "info": {
    "id": "62475",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    "locality": "Village Takka",
    "areaName": "Panvel",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 0.5,
      "serviceability": "SERVICEABLE",
      "slaString": "30 mins",
      "lastMileTravelString": "0.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},
{
  "info": {
    "id": "30246",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_30246.JPG",
    "locality": "Little World",
    "areaName": "Kharghar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "630",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 41,
      "lastMileTravel": 10.5,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "10.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},
{
  "info": {
    "id": "726167",
    "name": "Big Bowl",
    "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
    "locality": "LOKMANYA NAGAR",
    "areaName": "Panvel",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Tibetan",
      "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "434792",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 1.9,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "1.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},
{
  "info": {
    "id": "351125",
    "name": "Grameen Kulfi",
    "cloudinaryImageId": "jdhelzdbjdnseq2wxd8r",
    "locality": "Phule Road",
    "areaName": "Panvel",
    "costForTwo": "₹120 for two",
    "cuisines": [
      "Desserts",
      "Ice Cream"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "12175",
    "avgRatingString": "4.7",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 17,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},
{
  "info": {
    "id": "204091",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
    "locality": "Phule Road",
    "areaName": "Panvel",
    "costForTwo": "₹120 for two",
    "cuisines": [
      "Desserts",
      "Ice Cream"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "6249",
    "avgRatingString": "4.6",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},{
  "info": {
    "id": "84726",
    "name": "Natural Ice cream",
    "cloudinaryImageId": "xqkzvppsad1a1etvv2mm",
    "locality": "Opposite To Orion Mall",
    "areaName": "Panvel",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Ice Cream",
      "Desserts"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "2093",
    "avgRatingString": "4.7",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
},
{
  "info": {
    "id": "603153",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "fiwokq6fg8it4qyvtvi8",
    "locality": "Nearlittle World Mall",
    "areaName": "Kharghar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 10.5,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "10.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
  }
}
]



 

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="resto-container">
        {/* <Resto  resName={resObj[0]}/> */}
        {resObj.map((restaurant)=>(
          <Resto  key={restaurant.info.id }resName={restaurant}/>
        ))}
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
