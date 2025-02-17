import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo7.png";
import search_icon from "../../assets/search_icon.svg";
import profile_img from "../../assets/profile_img.png";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />

        <ul>
          <li>Երգարան</li>
          <li>Հայոց հայրեր</li>
          <li>Եկեղեցու պատմությունը</li>
          <li>Նոր Կտակարան</li>
          <li>Հին Կտակարան</li>
          <li>Լսել</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="box">
          <input type="text" placeholder="Գտնել..." />
          <img className="icons" src={search_icon} alt="icons" />
        </div>

        <div className="navbar-profile">
          <img className="profile" src={profile_img} alt="icons" />

          <div className="dropdown">
            <p>Երգարան</p>
            <p>Հայոց հայրեր </p>
            <p>Եկեղեցու պատմությունը </p>
            <p>Նոր Կտակարան </p>
            <p>Հին Կտակարան</p>
            <p>Լսել </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
