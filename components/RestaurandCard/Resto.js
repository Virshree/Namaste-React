import React, { useEffect, useState } from "react";
import "./resto.css";

function Resto(props) {
  const {resName}=props;
  // console.log(resName);
  const {name,avgRating,cuisines,locality,costForTwo,cloudinaryImageId,sla}=resName?.info
  // console.log(name);
 
  return (
    <div className="resto">
      <div className="resto-img">
        <img
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            cloudinaryImageId}
          alt="logo"
          width="200px"
          height="200px"
            className="img"
        />
        <h2>{name}</h2>
  
        <h4>{avgRating} ⭐ </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime ? sla?.deliveryTime :0 } minutes</h4>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
}

export default Resto;
