import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_bannerpavel from "../../assets/pavel.jpg";

import Cards from "../Cards/Cards";
import Cards2 from "../Cards2/Cards2";
import Cards3 from "../Cards3/Cards3";
import Cards4 from "../Cards4/Cards4";

import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_bannerpavel} alt="pavel" className="banner-img" />

        <div className="hero-caption">
          <p
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-offset="0"
            className="hero-p"
          >
            Լավագույն հոգեւոր նյութերի հավաքածու Հայ Քրիստոնիայի համար:
          </p>
          <p>Проверка связи</p>
        </div>
      </div>

      <div className="more-cards">
        <Cards title={"Հիմնականը Graflix-ում"} />
        <Cards4 title={"Նոր  Կտակարան"} />
        <Cards3 title={"Հավատքի հայրեր"} />
        <Cards2 title={"Հին Կտակարան"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
