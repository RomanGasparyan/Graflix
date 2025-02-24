import React, { useEffect, useRef } from "react";
import "./TitleCards.css";

import cards_data3 from "../../assets/card3/Cards_data3";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
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
        {cards_data3.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={card.image} alt="card" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
