import React from "react";
import "./Card.css"

const Card = ({title, img, description}) => {
  return (
    <div className="card-cont">
      <img src={img} alt="img" className="card-img" />
      <div className="card-content">
        <div className="title">{title}</div>
        <div className="description">{description} </div>
        <div className="btn-cont">

        <button className="card-btn"> Let's go</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
