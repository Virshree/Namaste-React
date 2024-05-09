import resObj from "../utils/resData";
import Resto from "./Resto";


const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your search"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="resto-container">
         
          {resObj.map((restaurant,index) => (
            <Resto key={index} resName={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;