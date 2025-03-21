import hero_bannerpavel from "../../assets/sevan.jpg";

const Hero = () => {
	return (
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
	);
};

export default Hero;
