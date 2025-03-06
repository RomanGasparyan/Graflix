import { Link } from "react-router-dom";

const ChapterBtn = ({slug, index}) => {
	return (
		<Link to={`/book/${slug}/chapter/${index}`} className="btn">
			<button type="button">
				{index + 1}
			</button>
		</Link>
	);
};

export default ChapterBtn;
