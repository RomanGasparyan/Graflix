import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Book from "./pages/Book/Book";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: "ease-in-sine",
			offset: 100,
		});
	}, []);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/book/:slug" element={<Book />} />
				<Route path="/book/:slug/chapter/:index" element={<Book />} />
				<Route path="/search/:searchPhrase" element={<Search />} />
			</Routes>
		</div>
	);
};

export default App;
