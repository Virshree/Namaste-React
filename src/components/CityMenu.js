import React from "react";

const CityMenu = (props) => {
  const { resCity } = props;
  // console.log(resCity);

  return (
    <div className="ml-30 ">
      <a href={resCity?.link}>
        <p
          className="text-xl m-3 p-4 bg-white-400 border border-gray
         text-black  cursor-pointer 
          rounded-xl "
        >
          {resCity?.text}
          
        </p>
      
      </a>
   
    </div>
  );
};

export default CityMenu;
