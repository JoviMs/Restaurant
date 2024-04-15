import React from "react";
import "./introduce.css";
import bg from "../../assets/Spices2.png";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="introContent">
        <span className="hello">Sziastok!</span>
        <span className="introText">
          Welcome to our <span className="introName">Restaurant's</span>
          <br /> Village.
        </span>
        <p className="introPara">
          This is one of the best restaurant you will ever come across in
          <br />
          the beautiful city of Kecskemet.
        </p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Introduction;
