import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_bannerpavel from "../../assets/pavel.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_bannerpavel} alt="pavel" className="banner-img" />
        <div className="hero-caption">
          <p>
            Հոգևոր նյութերի հավաքածու՝
            Երգարան,Աստվածաշունչ,կենսագրություններ,պատմական տվյալներ եւ ուրիշ
            շատ բաներ:
          </p>
          {/* <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="play_icon" />
              More Info
            </button>
          </div> */}
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Նոր Կտակարան"} />
        <TitleCards title={"Հին Կտակարան"} />
        <TitleCards title={"Հավատքի հայրեր"} />
        <TitleCards title={"Եկեղեցու պատմություն"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
