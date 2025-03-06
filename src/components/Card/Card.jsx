import { Link } from "react-router-dom";

const Card = ({data, index}) => {
	return (
		<Link to={`/book/${data.slug}`} className="card">
			<img src={data.cover} alt={data.title} />
		</Link>
	);
};

export default Card;