import { useNavigate } from "react-router-dom";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import search_icon from "../../assets/search_icon.svg";

const BookNav = () => {
	const navigate = useNavigate();

	return (
		<div className="player_nav">
			<img
				data-aos="fade-right"
				data-aos-delay="100"
				data-aos-offset="0"
				className="player_arrow"
				src={back_arrow_icon}
				alt="icon"
				onClick={() => {
					navigate(`/`);
				}}
			/>

			<div
				data-aos="fade-left"
				data-aos-delay="100"
				data-aos-offset="0"
				className="player_input"
			>
				<input type="text" placeholder="Գտնել" />

				<img className="search_icons" src={search_icon} alt="icons" />
			</div>
		</div>
	);
};

export default BookNav;
