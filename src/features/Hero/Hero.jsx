import './Hero.css';
import heroImage from "../../assets/images/heroImages.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="" className="heroImg" />
        <button className="hero-button">Explore Now</button>
      </div>
    </section>
  );
};

export default Hero;
