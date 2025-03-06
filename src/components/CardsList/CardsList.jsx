import React, { useEffect, useRef } from "react";
import "./CardsList.css";

const CardsList = ({ title, booksMarkup }) => {
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
				{booksMarkup}
			</div>
		</div>
	);
};

export default CardsList;
