import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const Cards = ({ title }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <Link to={`/player/${index}`} className="card" key={index}>
              <img src={card.image} index={index} alt="card" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
