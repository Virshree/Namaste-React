import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState ,useEffect} from "react";
import FilteredCity from "./FilteredCity";
import { _ } from "lodash";


export default function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cityName, setCityName] = useState("");
  const [filterCity, setFilterCity] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const [location, setLocation] = useState();

  const btnRef = React.useRef();

  useEffect(() => {
    fetchCity();
  }, []);
  const fetchCity = async () => {
    const data = await fetch("http://localhost:8000/cities");
    const json = await data.json();
    // console.log(json);
    console.log(cityInfo[416]?.latitude.toFixed(2));
    console.log(cityInfo[416]?.longitude.toFixed(2));
    console.log(cityInfo[416]?.city)

    setCityInfo(json);
  };
 

  const updateInput = (cityName) => {
    setCityName(cityName);
    /*_.debounce will fire the setSuggestions
     and fetchSuggestions only after a gap of 3000ms */
    _.debounce((input) => setFilterCity(fetchCity(input)));   
  };

//   useEffect(() => {
//     if (navigator.geolocation) {
//         navigator.permissions
//         .query({ name: "geolocation" })
//         .then(function (result) {
//             // console.log(result);
//             if (result.state === "granted") {
//             //If granted then you can directly call your function here
//             } else if (result.state === "prompt") {
//             //If prompt then the user will be asked to give permission
//             } else if (result.state === "denied") {
//             //If denied then you have to show instructions to enable location
//             }
//         });
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }, []);

// function success(pos) {
//   var crd = pos.coords;
//   console.log(`Your current position is: ${location}`);
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   // console.log(`More or less ${crd.accuracy} meters.`);
//   getLocationInfo(crd.latitude, crd.longitude);

// }
function errors(err) {
  // console.warn(`ERROR(${err.code}): ${err.message}`);
}
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
// navigator.geolocation.getCurrentPosition(success, errors, options);

// async function getLocationInfo(latitude, longitude) {

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       if (data?.data?.statusMessage) {
//         // console.log("results:", data);
//         setLocation(data);
//       } else {
//         console.log("Reverse geolocation request failed.");
//       }
//     })
//     .catch((error) => console.error(error));
// }

const getLocationInfo=async(latitude, longitude)=>{
  const url=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}5&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

  const data=await fetch(url);
  const json=await data.json();
  // console.log(json);
  // setLocation(json?.data);
}
  
// console.log(location);
  return (
    <>
      <Button ref={btnRef} className=" border border-white m-2 p-2 bg-white " 
      
      onClick={onOpen}>
        ⬇
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerContent className="">
          <DrawerCloseButton />

          <DrawerBody className=" mt-10 p-5 ">
            <div className="flex m-10 p-2">
            <Input value={cityName}
            placeholder="Search for area,street name"

             onChange={(e) => updateInput(e.target.value)}/>
          
            <button className="bg-gray-400 text-white text-md ml-3 p-2 border border-black"
            onClick={() => {
              const cityFilter = cityInfo?.filter((cities) =>
                cities?.city.toLowerCase().includes(cityName.toLowerCase())
              );
              // console.log(cityFilter);
              setFilterCity(cityFilter);
            }}
            >Search</button>
            </div>
          <p className="text-gray-400 m-5 p-4"> RECENT SEARCHES</p>
            {/* <Button className="mt-10 p-2 text-gray-400 bg-white-400 ">
              Get current location
              <br />
              using GPS
            </Button> */}

            <div className="flex flex-wrap border border-gray flex flex-col  w-3/4 
             cursor-pointer   
           ">
              { filterCity.length > 0 && filterCity?.map((city) => {
                return <FilteredCity resFilterCity={city} key={city?.id}  />;
              })}
                   
                   
                   
            <h3 className="text-xl font-bold m-3 p-3">Location:{location ? <>Your location: {location}</> : null}</h3>
            </div>
          
          </DrawerBody>
         
         
        </DrawerContent>
      </Drawer>
    </>
  );
}
