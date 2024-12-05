import PropTypes from "prop-types";
import "./BookCard.css";

const BookCard = ({ thumbnail, link }) => {
  return (
    <div className="book-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt="Book cover" className="book-thumbnail" />
      </a>
    </div>
  );
};

BookCard.propTypes = {
  thumbnail: PropTypes.string, // Thumbnail URL for the book cover
  link: PropTypes.string, // Link to the book details
};

export default BookCard;
