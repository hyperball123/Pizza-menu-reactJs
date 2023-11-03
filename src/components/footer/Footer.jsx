import React from "react";
import "../../index.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if(!isOpen) return <p>We r happ to welcome </p>

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us order Online</p>
          <button className="btn">Order</button>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
    </footer>
  );
}

export default Footer;
