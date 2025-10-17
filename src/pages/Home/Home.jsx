import React from "react";

import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardsList from "../../components/CardsList/CardsList";
import Card from "../../components/Card/Card";

import booksData from "./../../books";
import "./Home.css";

const Home = () => {
	/* Function to get Books by category */
	const getBooks = (booksData, category, title) => {
		let booksByCategory = booksData.filter(
			(book) => book.category == category
		);

		const booksMarkup = booksByCategory.map((book, index) => {
			return <Card data={book} key={index} />;
		});

		return <CardsList title={title} booksMarkup={booksMarkup} />;
	};

	/* Books by category */
	const gospelBooks = getBooks(
		booksData,
		"Հիմնականը",
		"Հիմնականը Graflix-ում:"
	);

	const tutorialsBooks = getBooks(booksData, "tutorials", "Նոր Կտակարան ");

	const tasksBooks = getBooks(booksData, "tasks", "Հավատքի Հայրեր");

	const tasksBook = getBooks(booksData, "taskBook", "Հին Կտակարան");

	const kids = getBooks(booksData, "kids", "Երեխաների Համար");

	const films = getBooks(booksData, "films", "Ֆիլմեր");

	const books = getBooks(booksData, "books", "Գրքեր");

	return (
		<div className="home">
			<Navbar />
			<Hero />

			<div className="more-cards">
				{gospelBooks}
				{films}
				{tasksBooks}
				{kids}
				{books}
				{tutorialsBooks}
				{tasksBook}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
