import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resList ,showItems,setShowIndex}) => {


  function handleClick() {
    setShowIndex();

  }
  return (
    <div className="bg-white-900 shadow-lg border border-b-1 mt-8 ">
      <div className="flex justify-between m-4" onClick={handleClick}>
        <span className="font-bold text-xl m-2 ">
          {resList?.title} ({resList?.itemCards?.length})
        </span>
        <span> {showItems ==true? "⬆":  "⬇"}</span>
      </div>
      <div className="m-2 p-1">
        {showItems && <ItemList data={resList?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
