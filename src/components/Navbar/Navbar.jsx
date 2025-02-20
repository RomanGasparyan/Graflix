import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo7.png";
import search_icon from "../../assets/search_icon.svg";
import cross_icon from "../../assets/cross_icon.svg";

import profile_img from "../../assets/profile_img.png";

const Navbar = () => {
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
        <img className="logo" src={logo} alt="" />

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
          <img
            onClick={() => setShowMobileMenu(true)}
            className="profile"
            src={profile_img}
            alt="icons"
          />

          {/* mobile menu */}

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
              <a
                onClick={() => setShowMobileMenu(false)}
                href="#Header"
                className="px-4 py2 rounded-full inline-block"
              >
                Երգարան
              </a>
              <a
                onClick={() => setShowMobileMenu(false)}
                href="#About"
                className="px-4 py2 rounded-full inline-block"
              >
                Հայոց հայրեր
              </a>
              <a
                onClick={() => setShowMobileMenu(false)}
                href="#Projects"
                className="px-4 py2 rounded-full inline-block"
              >
                Եկեղեցու պատմությունը
              </a>
              <a
                onClick={() => setShowMobileMenu(false)}
                href="#Testimonails"
                className="px-4 py2 rounded-full inline-block"
              >
                Նոր Կտակարան
              </a>
              <a
                onClick={() => setShowMobileMenu(false)}
                href="#Testimonails"
                className="px-4 py2 rounded-full inline-block"
              >
                Հին Կտակարան
              </a>

              <a
                onClick={() => setShowMobileMenu(false)}
                href="#Testimonails"
                className="px-4 py2 rounded-full inline-block"
              >
                Լսել Աստվածաշունչը
              </a>
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
