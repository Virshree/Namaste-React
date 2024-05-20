import React from "react";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);

  return (
    <div>
      <Header />
      <div className="error">
        <h2>This is Error page </h2>
        <br/>
        <br/>
        <h3>
          {err.status} : {err.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;
