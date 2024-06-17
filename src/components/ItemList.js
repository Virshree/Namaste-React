import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vegLogo from "../assets/veg.png";
import NonvegLogo from "../assets/nonveg.png";
import Counter from "./Counter";

const ItemList = ({ data ,cartQuantity}) => {
  const disptach = useDispatch();
  // console.log(data);
  // console.log(data.length);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const handleAddItem = (items) => {
    // console.log("Data",items)
    disptach(addItem(items));

    toast.success("Item Added Sucessfully !");
  };

  const [counters, setCounters] = useState(Array.from({ length: 1 }, () => 0));
  const handleIncrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index]++;
    setCounters(updatedCounters);
 
  };

  const handleDecrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index] = Math.max(0, updatedCounters[index] - 1);
    setCounters(updatedCounters);
  };

  
  let totalPrice = 0;

  cartItems.map((item) => {
    let price =

      (item?.card?.info?.price / 100)
      || (item?.card?.info?.defaultPrice / 100);

    totalPrice += price;

    return totalPrice;

  });
  // console.log(totalPrice);

  return (
    <div>
      {data?.map((items) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={items?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="flex m-2 text-orange-600 ">
                {items?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img src={vegLogo} alt="veg" className="w-8 h-8 " />
                ) : (
                  <img
                    src={NonvegLogo}
                    alt="nonveg"
                    className="w-8 h-8 hover:cursor-pointer"
                  />
                )}{" "}
                {items?.card?.info?.ribbon?.text}
              </span>

              <span className="font-bold text-xl m-2 p-1">
                {items?.card?.info?.name} -
              </span>
              <span className="font-bold ">
                ₹
                {items?.card?.info?.price / 100
                  ? items?.card?.info?.price / 100
                  : items?.card?.info?.defaultPrice / 100}{" "}
              </span>

              <br />
              <span>
                {" "}
                ⭐ {items?.card?.info?.ratings?.aggregatedRating?.rating || 4.3}
              </span>
            </div>

            <div>
              {counters.map((quantity, index) => {
                return (
                  <div>
                    <Counter
                      key={index}
                     
                      quantity={quantity}
                      onIncrement={() => handleIncrement(index)}
                      onDecrement={() => handleDecrement(index)}
                    />
                  
                  </div>
                );
              })}
            </div>
            <p className="text-md text-gray-500 m-2 p-1">
              {items?.card?.info?.description}
            </p>
        

          </div>

          <div className="w-3/12 p-4  ">
            <ToastContainer limit={3} position={"top-center"} />

            <button
              className=" bg-black  text-green-600 text-xl 
             font-bold p-2 hover:cursor-pointer mt-14  ml-10   w-28 rounded-xl  absolute"
              onClick={() => handleAddItem(items)}
            >
              ADD
           
            </button>
            <ToastContainer limit={1} position={"top-center"} />

            <img
              src={CDN_URL + items?.card?.info?.imageId}
              alt="logo"
              className="w-40 h-36 rounded-xl mx-auto  "
            />
          </div>
          <hr />
        </div>
      ))}
      <div>
        <h3>Rs.{totalPrice}</h3>
      </div>
    </div>
  );
};

export default ItemList;
