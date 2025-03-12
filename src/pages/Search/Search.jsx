import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import BookNav from "../../components/BookNav/BookNav";

import booksData from "../../books";
import "./Search.css";

const Search = () => {
	// Состояния для всех книг с текстом и для результатов поиска
	const [chaptersData, setChaptersData] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	// 1. Получить поисковую фразу из адреса
	const { searchPhrase = "" } = useParams();

	// 2. Загружаем все книги и все главы. Результат записываем в chaptersData
	useEffect(() => {
		const fetchBooksWithContent = async () => {
			const booksWithContent = await Promise.all(
				booksData.map(async (book) => {
					// Загружаем все файлы главы параллельно
					const chaptersContent = await Promise.all(
						book.chapters.map(async (chapterPath) => {
							const response = await fetch(chapterPath);
							const text = await response.text();
							return { path: chapterPath, content: text }; // Сохраняем путь + содержимое
						})
					);

					// Возвращаем обновленный объект книги с загруженными главами
					return {
						...book,
						chapters: chaptersContent,
					};
				})
			);

			return booksWithContent;
		};

		// Вызываем функцию и логируем результат
		fetchBooksWithContent().then((data) => {
			setChaptersData(data);
		});
	}, []);

	// 3. Функция поиска по всем книгам
	const searchBooks = (books, query) => {
		if (!query.trim()) return []; // Если пустой запрос - пустой массив результатов

		const lowerQuery = query.toLowerCase(); // Приводим запрос к нижнему регистру

		let results = [];

		books.forEach((book) => {
			// Поиск в названии книги
			if (book.title.toLowerCase().includes(lowerQuery)) {
				results.push({
					title: book.title,
					slug: book.slug,
					chapterNumber: "Вся книга",
					category: book.category,
				});
			}

			// Поиск в главах книги
			book.chapters.forEach((chapter, index) => {
				if (chapter.content.toLowerCase().includes(lowerQuery)) {
					results.push({
						title: book.title,
						slug: book.slug,
						chapterNumber: index + 1, // Индексация с 1
						category: book.category,
						content: chapter.content,
					});
				}
			});
		});

		return results;
	};

	// 4. Поиск по данным из chaptersData
	useEffect(() => {
		const result = searchBooks(chaptersData, searchPhrase);
		setSearchResult(result);
	}, [chaptersData, searchPhrase]);

	return (
		<div className="player">
			<BookNav />

			<h1 className="player_title">
				Որոնման արդյունքները: {searchPhrase}
			</h1>
			<div className="container">
				<div id="content">{}</div>
				<div id="results">
					{searchResult &&
						searchResult.map((item, index) => {
							return (
								<div className="searchResult" key={index}>
									<h3>Գրքի վերնագիր: {item.title}</h3>
									<p>Գլխի համարը: {item.chapterNumber}</p>
									{item.content && <h3>Գտնված տեքստ:</h3>}
									<ReactMarkdown>
										{item.content && item.content}
									</ReactMarkdown>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Search;
