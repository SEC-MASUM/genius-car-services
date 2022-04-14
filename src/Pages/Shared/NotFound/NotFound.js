import React from "react";
import sleeping from "../../../Assets/images/sleeping.jpg";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">Mechanic is sleeping</h1>
      <img className="w-100" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
