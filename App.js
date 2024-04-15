import React from "react";
import ReactDOM from "react-dom/client";

//React Components

const HeadingComponent = () => {
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          width="60px"
          height="60px"
        />
      </div>
      <div className="search">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-icon">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="user-icon">
        <i className="fa fa-user"></i>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
console.log(HeadingComponent); //object
