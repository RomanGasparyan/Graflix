import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/logo10.png";
import search_icon from "../../assets/search_icon.svg";
import cross_icon from "../../assets/cross_icon.svg";
import profile_img from "../../assets/profile_img.png";

const Navbar = () => {
	const navigate = useNavigate();

	const [showMobileMenu, setShowMobileMenu] = useState();

	useEffect(() => {
		if (showMobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showMobileMenu]);

	const navRef = useRef();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			// console.log(navRef.current.classList);
			if (window.scrollY >= 80) {
				navRef.current && navRef.current.classList.add("nav-dark");
			} else {
				navRef.current && navRef.current.classList.remove("nav-dark");
			}
		});
	}, []);

	const searchHandler = (formData) => {
		const searchPhrase = formData.get("searchPhrase");
		navigate(`/search/${searchPhrase}`);
	};

	return (
		<div
			// data-aos="fade-down"
			// data-aos-delay="600"
			// data-aos-offset="0"
			// className="navbar absolute bottom-0 left-0 w-full"
			ref={navRef}
			className="navbar"
		>
			<div className="navbar-left">
				<img
					data-aos="fade-down"
					data-aos-delay="600"
					data-aos-offset="0"
					className="logo"
					src={logo}
					alt=""
				/>

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
				</ul>
			</div>
			<div className="navbar-right">
				<form
					data-aos="fade-down"
					data-aos-delay="600"
					data-aos-offset="0"
					className="box"
					action={searchHandler}
				>
					<input
						name="searchPhrase"
						type="text"
						placeholder="Գտնել..."
					/>
					<button className="search_icon">
						<img className="icons" src={search_icon} alt="icons" />
					</button>
				</form>

				<div className="navbar-profile">
					<img
						onClick={() => setShowMobileMenu(true)}
						className="profile"
						src={profile_img}
						alt="icons"
					/>

					{/* mobile menu ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

					<div
						className={`md:hidden  ${
							showMobileMenu ? "fixed w-full" : "h-0 w-0"
						}  right-0 top-0 bottom-0 overflow-hidden bg-white text-black transition-all`}
					>
						<div className=" flex justify-end p-6 ">
							<img
								onClick={() => setShowMobileMenu(false)}
								src={cross_icon}
								className="close"
								alt="icon"
							/>
						</div>

						<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
							<Link
								to="/book/Song"
								onClick={() => setShowMobileMenu(false)}
								className="px-4 py2 rounded-full inline-block"
							>
								<li>Երգարան</li>
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
								to="/book/Lsel"
								className="px-4 py2 rounded-full inline-block"
							>
								Լսել Աստվածաշունչը
							</Link>
							<Link
								to="/book/Kidsbible"
								onClick={() => setShowMobileMenu(false)}
								className="px-4 py2 rounded-full inline-block"
							>
								Երեխաների Համար
							</Link>
							<Link
								to="/book/Lusavorich"
								onClick={() => setShowMobileMenu(false)}
								className="px-4 py2 rounded-full inline-block"
							>
								Հայոց հայրեր
							</Link>

							<Link
								onClick={() => setShowMobileMenu(false)}
								to="/book/Historyworld"
								className="px-4 py2 rounded-full inline-block"
							>
								Եկեղեցու պատմությունը
							</Link>
							<Link
								onClick={() => setShowMobileMenu(false)}
								to="/book/GospelMat"
								className="px-4 py2 rounded-full inline-block"
							>
								Նոր Կտակարան
							</Link>
							<Link
								onClick={() => setShowMobileMenu(false)}
								to="/book/Genesis"
								className="px-4 py2 rounded-full inline-block"
							>
								Հին Կտակարան
							</Link>

							<Link
								to="/book/DavidHouse/chapter/0/#content"
								onClick={() => setShowMobileMenu(false)}
								className="px-4 py2 rounded-full inline-block"
							>
								Ֆիլմեր
							</Link>
						</ul>

						<p className="inc  text-center mt-50px font-bold ">
							© 2025 Graflix ™, Inc.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
