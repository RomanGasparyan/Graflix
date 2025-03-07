import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Fuse from "fuse.js";
import ReactMarkdown from "react-markdown";

import BookNav from "../../components/BookNav/BookNav";

import booksData from "../../books";
import "./Search.css";

const Search = () => {
	// Состояние в которое будет записана информация со всеми главами для поиска
	const [chaptersData, setChaptersData] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	// 1. Получить поисковую фразу из адреса
	const { searchPhrase = "" } = useParams();

	// 2. Получить данные по книге по которой происходит поиск
	const sourceBook = booksData.filter(
		(book) => book.slug === "GospelofMatthew"
	)[0];

	// 3. Загружаем все файлы
	useEffect(() => {
		const fetchChapters = async () => {
			const files = await Promise.all(
				sourceBook.chapters.map(async (path, index) => {
					const response = await fetch(path);
					const text = await response.text();
					return { path, text, index };
				})
			);
			setChaptersData(files);
		};

		fetchChapters();
	}, []);

	// 4. Выполнить поиск по данным из chaptersData
	useEffect(() => {
		const result = chaptersData.filter((item) =>
			item.text.toLowerCase().includes(searchPhrase.toLocaleLowerCase())
		);
		setSearchResult(result);
	}, [chaptersData, searchPhrase]);

	return (
		<div className="player">
			<BookNav />

			<h1 className="player_title">Search results for: {searchPhrase}</h1>
			<div className="container">
				<div id="content">{}</div>
				<div id="results">
					{searchResult &&
						searchResult.map((item, index) => {
							return (
								<div className="searchResult" key={index}>
									<h3>Book title: {sourceBook.title}</h3>
									<p>Chapter number: {item.index + 1}</p>
									<h3>Chapter text:</h3>
									<ReactMarkdown>{item.text}</ReactMarkdown>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Search;
