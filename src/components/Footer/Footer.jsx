import React from "react";
import "./Footer.css";
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
        <li>Նկարագրություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
        <li>Օգնություն</li>
      </ul>
      <p className="copyright-text">© 2025 Graflix ™, Inc.</p>
    </div>
  );
};

export default Footer;
