import React from "react";
import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { himnacanner } from "../../assets/himnacanList";
import { FaSearch } from "react-icons/fa";
import search_icon from "../../assets/search_icon.svg";

import { button_Data } from "../../assets/buttonData";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const himnacan = himnacanner[id];

  return (
    <div className="player">
      <div className="player_nav">
        <img
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-offset="0"
          className="player_arrow"
          src={back_arrow_icon}
          alt="icon"
          onClick={() => {
            navigate(-1);
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
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-offset="0"
        className="player_title"
      >
        {himnacan.title}
      </h1>

      <div className="container">
        <div className="button_inner">
          {button_Data.map((item) => (
            <button type="button" className="btn btn1">
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/YQQD67N5pi0&t=8s"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default Player;
