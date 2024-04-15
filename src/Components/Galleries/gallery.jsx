import React from "react";
import "./gallery.css";
import Port1 from "../../assets/dish1.jpg";
import Port2 from "../../assets/dish2.jpg";
import Port3 from "../../assets/dish3.jpg";
import Port4 from "../../assets/menu1.webp";
import Port5 from "../../assets/vertical1.jpg";
import Port6 from "../../assets/menu2.webp";
import Port7 from "../../assets/menu3.webp";
import Port8 from "../../assets/dish1.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <h2 className="gallerytitle">Our Gallery</h2>
      <span className="galleryDesc">
        We take our time to cook very tasty and delicious food, we don't only
        there we also make sure it looks presentable and royalty and serve it
        diligently to our beloved customers and make them feel honored and
        remarkable.
      </span>
      <div className="galleryImgs">
        <img src={Port1} alt="" className="galleryImg" />
        <img src={Port2} alt="" className="galleryImg" />
        <img src={Port3} alt="" className="galleryImg" />
        <img src={Port4} alt="" className="galleryImg" />
        <img src={Port5} alt="" className="galleryImg" />
        <img src={Port6} alt="" className="galleryImg" />
        <img src={Port7} alt="" className="galleryImg" />
        <img src={Port8} alt="" className="galleryImg" />
      </div>
    </section>
  );
};

export default Gallery;
