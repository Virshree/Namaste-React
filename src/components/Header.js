import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin,setBtnLogin]=useState("Login");


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" style={{textDecoration:"none",color:"black",listStyle:"none",margin:"20px"}}><li>Home</li></Link>
         <Link to="/about" style={{textDecoration:"none",color:"black",listStyle:"none",margin:"20px"}}> <li>About us</li></Link>
        <Link to="/contact" style={{textDecoration:"none",color:"black",listStyle:"none",margin:"20px"}}> <li>Contact us</li></Link>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{setBtnLogin("Logout")}}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
