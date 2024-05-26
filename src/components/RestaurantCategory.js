import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resList }) => {
  //   console.log(resList?.title);

  const [showItems, setShowItems] = useState(false);

  function handleClick() {
    // console.log("clicked");
    setShowItems(!showItems);
  }
  return (
    <div className="bg-white-900 shadow-lg border border-b-1 mt-8 ">
      <div className="flex justify-between m-4" onClick={handleClick}>
        <span className="font-bold text-xl m-2 ">
          {resList?.title} ({resList?.itemCards?.length})
        </span>
        <span className="">▼</span>
      </div>
      <div className="m-2 p-1">
        {showItems && <ItemList data={resList?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
