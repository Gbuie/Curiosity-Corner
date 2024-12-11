import './Hero.css';
import heroImage from "../../assets/images/heroImge.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="" className="heroImg" />
        
      </div>
    </section>
  );
};

export default Hero;
