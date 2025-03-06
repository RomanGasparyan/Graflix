import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import BookNav from "../../components/BookNav/BookNav";
import ChapterBtn from "../../components/ChapterBtn/ChapterBtn";

import booksData from "./../../books";
import "./Book.css";

const Book = () => {
	// Состояние для контента главы книги
	const [content, setContent] = useState("");

	// Получить псевдоним книги
	const { slug, index = 0 } = useParams();

	// Найти книгу по псевдониму
	const book = booksData.filter((book) => book.slug == slug)[0];
	console.log("book", book);

	// Сгенерировать разметку кнопок по главам
	const getChaptersBtns = () => {
		return book.chapters.map((item, index) => {
			return <ChapterBtn slug={book.slug} index={index} key={index} />;
		});
	};
	const chaptersBtns = getChaptersBtns();

	// Получить имя файла с главой книги
	const chapterFileName = book.chapters[index];
	console.log("chapterFileName", chapterFileName);

	// Получить текст главы из файла
	useEffect(() => {
		fetch(chapterFileName)
			.then((res) => res.text())
			.then((text) => setContent(text));
	}, [slug, index]);

	return (
		<div className="player">
			<BookNav />

			<h1 className="player_title">{book.title}</h1>

			<div className="container">
				<div className="button_i">{chaptersBtns}</div>
				<div className="content_i">
					<ReactMarkdown>{content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Book;
