import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../Hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  // const [user, setUser] = useState({
  //   name: "Masum Billah",
  //   email: "masum@car.com",
  //   address: "Jashore, Bangladesh",
  //   phone: "01711111111",
  // });

  // const handleAddressChange = (event) => {
  //   console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  //   console.log(newUser);
  // };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order : {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={user.displayName}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="email"
          placeholder="email"
          value={user.email}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          placeholder="service"
          value={service.name}
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          required
          autoComplete="off" // popup suggestion disabled
        />
        <br />
        {/* <input
          onChange={handleAddressChange}
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          value={user.address}
          required
        />
        <br /> */}
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
