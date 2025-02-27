import React from "react";
import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { himnacanner } from "../../assets/himnacanList";
//import { FaSearch } from "react-icons/fa";
import search_icon from "../../assets/search_icon.svg";

const Player = () => {
  const navigate = useNavigate();
  const { id, number } = useParams();

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
      <h1 className="player_title">{himnacan.title}</h1>

      <div className="container">
        <div className="button_inner">
          {himnacan.desc.map((item, index) => {
            return (
              <Link
                to={`/player/${id}/chapter/${index}`}
                className="btn"
                key={index}
              >
                <button type="button" index={index}>
                  {index + 1}
                </button>
              </Link>
            );
          })}
        </div>

        <div className="desc">{himnacan.desc[number]}</div>
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
