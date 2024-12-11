import { useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./BookDetails.css";
import "../../Shared/styles/global.css";
import HeaderLong from "../../assets/images/headerLong.png"
import Nav from "../Nav/Nav.jsx";

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
      <header className="book-detail-header">
        <img src={HeaderLong} alt="Header Image" className="header-long" />
      
      </header>
      <Nav showLogo={false} />

      <main className="book-detail-container">
        <img
          src={book.image}
          alt={book.title || "Book cover"}
          className="book-detail-image"
        />

        {/* First Box: Title, Author, Summary */}
        <div className="info-box-1">
          <h1 className="book-detail-title">{book.title}</h1>
          <h3 className="book-detail-author">By: {book.authors.join(", ")}</h3>
          <p className="book-detail-description">{book.description}</p>
        </div>

        {/* Second Box: YouTube Read-Along Link */}
        <div className="info-box-2">
          <h2>Watch Read-Along</h2>
          <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(book.title + " read along")}`} target="_blank" rel="noopener noreferrer">
            Click here for a read-along on YouTube
          </a>
        </div>

        {/* Third Box: Reader Reviews */}
        <div className="info-box-3">
          <h2>Reader Reviews</h2>
         <div className="review">🌟🌟🌟🌟🌟
My kids absolutely love Curiosity Corner! The vibrant layout and easy navigation keep them engaged, and the book recommendations are spot-on for their reading levels. It a joy to see them so excited about reading!
– Sarah L., Parent of Two</div>
<div className="review 2">🌟🌟🌟🌟🌟
Curiosity Corner is a game-changer for young readers! My 8-year-old found her new favorite series here, and the videos add a fun, interactive element to the experience. Highly recommend for curious minds!
– David M., Educator</div>
<div className="review 3">🌟🌟🌟🌟🌟
This virtual library is AMAZING! The selection of books is diverse, and the design is so kid-friendly. As a homeschooling mom, I appreciate the mix of entertainment and educational resources. My kids adore it!
– Jessica R., Homeschooling Parent</div>

      
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookDetail;
