import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data?.map((items) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={items?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-xl m-2 p-1">
                {items?.card?.info?.name} -
              </span>
              <span className="font-bold ">
                ₹
                {items?.card?.info?.price / 100
                  ? items?.card?.info?.price / 100
                  : items?.card?.info?.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-md text-gray-500 m-2 p-1">
              {items?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4  ">
            <button className=" bg-pink-200 text-xl mx-8 mt-4 w-24 px-1  absolute">
              ADD+
            </button>
            <img
              src={CDN_URL + items?.card?.info?.imageId}
              alt="logo"
              className="w-40 h-36 rounded-xl mx-auto  "
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
