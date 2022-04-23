import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/service";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, []);
  return (
    <div id="services" className="container mt-5">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
