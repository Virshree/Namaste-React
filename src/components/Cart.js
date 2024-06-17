import React, { useState } from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vegLogo from "../assets/veg.png";
import NonvegLogo from "../assets/nonveg.png";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [showClear, setShowClear] = useState("");

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  const disptach = useDispatch();

  const handleClearCart = () => {
    disptach(clearCart());
    setShowClear(!showClear);
  };

  let totalPrice = 0;

  cartItems.map((item) => {
    let price =

      (item?.card?.info?.price / 100)
      || (item?.card?.info?.defaultPrice / 100);

    totalPrice += price;

    return totalPrice;

  });
  console.log(totalPrice);
    
  const handleAddItem = (items) => {
    disptach(addItems(items));

    toast.success("Item Added Sucessfully !");
  };
  return (
    <div className="flex item-center mx-auto p-2 flex-col">

    {cartItems.length < 1 ? null : (
          <div className="m-3 p-3 flex justify-between text-lg items-center my-2 py-2">
          
            <button
              disabled={cartItems.length > 0 ? false : true}
              className="m-3 p-2 bg-black text-white font-bold text-xl"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      {showClear && <p className="text-xl text-center m-4 p-4">Cart is empty.Add Items to cart</p>}

      <div className="w-6/12 m-auto p-2 bg-white-400">
        <ItemList data={cartItems} />

  
     

        {/* {cartItems.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex flex-wrap gap-5 my-2 items-center shadow-lg 
                rounded-lg p-2 "
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span className="flex m-2 text-orange-600 ">
                    {item?.card?.info?.itemAttribute?.vegClassifier ===
                    "VEG" ? (
                      <img src={vegLogo} alt="veg" className="w-8 h-8 " />
                    ) : (
                      <img
                        src={NonvegLogo}
                        alt="nonveg"
                        className="w-8 h-8 hover:cursor-pointer"
                      />
                    )}{" "}
                    {item?.card?.info?.ribbon?.text}
                  </span>

                  <span className="font-bold text-xl m-2 p-1">
                    {item?.card?.info?.name} -
                  </span>
                  <span className="font-bold ">
                    ₹
                    {item?.card?.info?.price / 100
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}{" "}
                  </span>

                  <br />
                  <span>
                    {" "}
                    ⭐{" "}
                    {item?.card?.info?.ratings?.aggregatedRating?.rating || 4.3}
                  </span>
                </div>

                <div>
                   {counters.map((quantity, index) => {
                return (
                  <div>
                    <Counter
                      key={index}
                      price={data}
                      quantity={quantity}
                      onIncrement={() => handleIncrement(index)}
                      onDecrement={() => handleDecrement(index)}
                    />
                  
                  </div>
                );
              })} 
                </div>
                <p className="text-md text-gray-500 m-2 p-1">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="w-3/12 p-4  ">
                <ToastContainer limit={1} position={"top-center"} />

                <button
                  className=" bg-black  text-green-600 text-xl 
             font-bold p-2 hover:cursor-pointer mt-14  ml-10   w-28 rounded-xl  absolute"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                  <ToastContainer limit={1} position={"top-center"} />
                </button>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="logo"
                  className="w-40 h-36 rounded-xl mx-auto  "
                />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Cart;
