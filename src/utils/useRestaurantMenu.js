import { useEffect, useState } from "react";
import { REST_INFO_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_INFO_API_URL + resId);
    const json = await data.json();
    // console.log(json?.data);
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
