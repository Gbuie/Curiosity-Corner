import headerLong from "../assets/images/headerLong.png"
import Nav from '../features/Nav/Nav';
import './About.css'; // Optional: Import a CSS file for styling
import Footer from '../features/Footer/Footer'; // Ensure this import is present

const About = () => {
  return (
    <header className="about-header">
    <img src={headerLong} alt="Header Image" className="header-long" />
    <div className="nav-wrapper">
        <Nav showLogo={false} />
      </div>
    <div className="about-container">
      <h1> Welcome to Curiosity Corner!</h1>
      <p>
      At Curiosity Corner, we believe in the magic of stories and the power of imagination. Our virtual childrens library is a vibrant and engaging space where young readers can explore a world of books, videos, and resources designed to inspire curiosity, creativity, and a lifelong love for learning.
      </p>
      <h2>Our Mission</h2>
      <p>
      Our mission is to make reading fun and accessible for children of all ages. Whether it is diving into fantastical adventures, discovering fascinating facts, or exploring diverse cultures, Curiosity Corner is here to spark joy and wonder through the written word.
      </p>
      <h2>What We Offer</h2>
      <p>
      Books for Every Reader: From picture books to chapter books, our carefully curated collection is tailored to meet the interests and reading levels of young minds.

Interactive Learning: Explore videos, activities, and resources that bring stories to life and encourage critical thinking.

Community Connection: Join us for events, challenges, and discussions that foster a love for storytelling and collaboration.

Thank you for joining us on this journey. Let the adventure begin!
      </p>
      
    </div>
    <Footer />
    </header>
   
  );
};

export default About; 