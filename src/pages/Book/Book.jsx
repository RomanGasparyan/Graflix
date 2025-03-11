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
	const { slug, index = null } = useParams();

	// Найти книгу по псевдониму
	const book = booksData.filter((book) => book.slug == slug)[0];

	// Сгенерировать разметку кнопок по главам
	const getChaptersBtns = () => {
		return book.chapters.map((item, index) => {
			return <ChapterBtn slug={book.slug} index={index} key={index} />;
		});
	};
	const chaptersBtns = getChaptersBtns();

	// Получить имя файла с главой книги
	let chapterFileName;
	if (index !== null) {
		chapterFileName = book.chapters[index];
	}

	// Получить текст главы из файла
	useEffect(() => {
		if (chapterFileName !== undefined) {
			fetch(chapterFileName)
				.then((res) => res.text())
				.then((text) => setContent(text));
		}
	}, [slug, index]);

	return (
		<div className="player">
			<BookNav />

			<h1 className="player_title">{book.title}</h1>

			<div className="container">
				<div className="button_i">{chaptersBtns}</div>
				<div id="content" className="content_i">
					<ReactMarkdown>{content && content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Book;
