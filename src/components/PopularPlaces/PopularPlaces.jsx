import React from "react";
import "./PopularPlaces.css";
import Card from "../Card/Card";
import land from "../../assets/land.jpeg";

const PopularPlaces = () => {
  const places = [
    {
      title: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      img: land,
    },
    {
      title: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      img: land,
    },
    {
      title: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      img: land,
    },
    {
      title: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      img: land,
    },
  ];

  return (
    <section className="places-cont">
      <h2>Some popular places</h2>
      <div className="places-card">
        {places.map((place, index) => {
          return (
            <Card
              title={place.title}
              description={place.description}
              img={place.img}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularPlaces;
