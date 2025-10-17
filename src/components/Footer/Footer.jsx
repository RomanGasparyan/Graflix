import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-icons">
				<img src={facebook_icon} alt="icon" />
				<img src={instagram_icon} alt="icon" />
				<img src={twitter_icon} alt="icon" />
				<img src={youtube_icon} alt="icon" />
			</div>

			<ul>
				<Link to="/book/Song">
					<li>Երգարան</li>
				</Link>
				<Link to="/book/Lusavorich">
					<li>Հայոց Հայրեր</li>
				</Link>
				<Link to="/book/Historyarm">
					<li>Պատմության էջ</li>
				</Link>
				<Link to="/book/GospelMat">
					<li>Նոր Կտակարան</li>
				</Link>
				<Link to="/book/Genesis">
					{" "}
					<li>Հին Կտակարան</li>
				</Link>
				<Link to="/book/Kidsbible">
					{" "}
					<li>Երեխաների Համար</li>
				</Link>
				<Link to="/book/Lsel">
					{" "}
					<li>Լսել</li>
				</Link>
				<Link to="/book/DavidHouse/chapter/0/#content">
					<li> Ֆիլմեր</li>
				</Link>
				<Link
					onClick={() => setShowMobileMenu(false)}
					to="/book/Songarm"
					className="px-4 py2 rounded-full inline-block"
				>
					Ձեռագիր Երգարան
				</Link>

				<Link
					onClick={() => setShowMobileMenu(false)}
					to="/book/JesusNeZnal/chapter/0/#content"
					className="px-4 py2 rounded-full inline-block"
				>
					Գրքեր
				</Link>
			</ul>
			<p className="copyright-text">© 2025 Graflix ™, Inc.</p>
		</div>
	);
};

export default Footer;
