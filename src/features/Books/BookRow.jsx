import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
import { fetchBooksByCategory } from "../../api/googleBooks";
import "./BookRow.css";

const BookRow = ({ category, searchQuery }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const fetchedBooks = await fetchBooksByCategory(searchQuery, 5);
        setBooks(fetchedBooks);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to fetch books.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  return (
    <div className="book-row">
      <h3>{category}</h3>
      <div className="book-row-content">
        {isLoading && <p>Loading books...</p>}
        {error && <p>{error}</p>}
        {!isLoading &&
          !error &&
          books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              authors={book.authors}
              thumbnail={book.thumbnail}
              link={book.link}
            />
          ))}
      </div>
    </div>
  );
};

BookRow.propTypes = {
  category: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  
};

export default BookRow;
