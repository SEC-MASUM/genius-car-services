import React from "react";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div>
        <img src={img} alt="" srcset="" />
      <h1>{name}</h1>
    </div>
  );
};

export default Service;
