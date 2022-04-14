import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service rounded">
      <img className="w-100 rounded-top" src={img} alt="" srcSet="" />
      <div className="p-2">
        <h5>{name}</h5>
        <p>Price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          Book : {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
