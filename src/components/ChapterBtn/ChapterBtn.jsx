import { Link } from "react-router-dom";

const ChapterBtn = ({ slug, index }) => {
	const scrollToContent = (content) => {
		const element = document.getElementById(content);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Link to={`/book/${slug}/chapter/${index}/#content`} className="btn">
			<button onClick={() => scrollToContent("content")} type="button">
				{index + 1}
			</button>
		</Link>
	);
};

export default ChapterBtn;
