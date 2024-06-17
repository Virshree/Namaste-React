import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Drawer from "./Drawer";
import LoginDrawer from "./LoginDrawer";


const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);
  // console.log(loggedUser);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const address = useSelector(store => store.location.address)


  return (
    <div className="flex justify-between p-2 bg-azure-100 shadow-lg">
      <div className="flex ">
        <Link to="/">
          <img className="w-26 h-24 cursor-pointer" src={LOGO_URL} />
        </Link>
  
        <button className=" m-2 p-4 text-left">
          <Drawer />
        </button>
      </div>

      <div className="nav-items">
        <ul className="flex m-2 p-4">
          <li className="p-4 text-xl">
            Online Status :{onlineStatus ? " 🟢 " : "🔴"}
          </li>

          <Link to="/" className="p-4 text-xl">
            <li>Home</li>
          </Link>
          <Link to="/grocery" className="p-4 text-xl">
            <li>Grocery</li>
          </Link>
          <Link to="/about" className="p-4 text-xl">
            {" "}
            <li>About us</li>
          </Link>
          <Link to="/contact" className="p-4 text-xl">
            {" "}
            <li>Contact us</li>
          </Link>
          <Link to="/cart" className="p-4 text-xl">
            {" "}
            <li>Cart- {cartItems.length}</li>
          </Link>

          <button
            className="p-4 text-xl"
            onClick={() => {
              setBtnLogin("Logout");
            }}
          >
            {/* {btnLogin} */}
            <LoginDrawer />
          </button>
          {/* <li className="p-4 text-xl font-bold"> {loggedUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
