import React from "react";

const Footer = () => {
  const date = new Date();
//   date.getFullYear();
  return (
    <div>
      <footer>
        <p>
          <small>copyright &copy; {date.getFullYear()}</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
