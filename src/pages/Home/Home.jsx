import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_bannerpavel from "../../assets/pavel.jpg";

import TitleCards from "../../components/TitleCards/TitleCards";
import TitleCards2 from "../../components/TitleCards2/TitleCards";
import TitleCards3 from "../../components/TitleCards3/TitleCards";

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
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Հիմնականը Graflix-ում"} />
        <TitleCards2 title={"Հին Կտակարան"} />
        <TitleCards3 title={"Հավատքի հայրեր"} />

        {/* <TitleCards title={"Նոր Կտակարան"} />
        <TitleCards title={"Հին Կտակարան"} />
        <TitleCards title={"Հավատքի հայրեր"} />
        <TitleCards title={"Եկեղեցու պատմություն"} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
