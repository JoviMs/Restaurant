import React from "react";
import "./menu.css";
import pic from "../../assets/pic.jpg";
const Menu = () => {
  return (
    <section id="menu">
      <span className="menuTitle">Our Menu</span>
      <div className="menuBar">
        <img src={pic} alt="Menu" className="MenuImg"></img>
      </div>
    </section>
  );
};

export default Menu;
