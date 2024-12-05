import { useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./BookDetails.css";
import "../../Shared/styles/global.css";
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch book details: ${response.status}`);
        }
        const data = await response.json();

        setBook({
          title: data.volumeInfo?.title || "No title available",
          authors: data.volumeInfo?.authors || ["Unknown author"],
          description:
            data.volumeInfo?.description || "No description available.",
          image:
            data.volumeInfo?.imageLinks?.thumbnail ||
            "/placeholder-image.jpg",
          category: data.volumeInfo?.categories?.[0] || "Uncategorized",
          publisher: data.volumeInfo?.publisher || "Unknown publisher",
          publishedDate: data.volumeInfo?.publishedDate || "Unknown date",
          pageCount: data.volumeInfo?.pageCount || "N/A",
          infoLink: data.volumeInfo?.infoLink || "#",
        });
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <>
      <Nav />

       
        <Hero />
     

      <main className="book-detail-container">
        {/* Book Details Content */}
        <img
          src={book.image}
          alt={book.title || "Book cover"}
          className="book-detail-image"
        />
        <div className="book-detail-content">
          <h1 className="book-detail-title">{book.title}</h1>
          <h3 className="book-detail-author">By: {book.authors.join(", ")}</h3>
          <p className="book-detail-description">{book.description}</p>
          <p className="book-detail-category">
            <strong>Category:</strong> {book.category}
          </p>
          <p className="book-detail-publisher">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p className="book-detail-published-date">
            <strong>Published Date:</strong> {book.publishedDate}
          </p>
          <p className="book-detail-page-count">
            <strong>Page Count:</strong> {book.pageCount}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookDetail;
