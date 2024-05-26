import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between p-4 bg-pink-100 shadow-lg">
      <img className="w-36" src={LOGO_URL} />

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
          <li className="p-4 text-xl">Cart</li>
          <button
            className="p-4 text-xl"
            onClick={() => {
              setBtnLogin("Logout");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
