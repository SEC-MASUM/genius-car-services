import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="service rounded">
      <img className="w-100 rounded-top" src={img} alt="" srcSet="" />
      <div className="p-2">
        <h5>{name}</h5>
        <p>Price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button className="btn btn-primary">Book : {name}</button>
      </div>
    </div>
  );
};

export default Service;
