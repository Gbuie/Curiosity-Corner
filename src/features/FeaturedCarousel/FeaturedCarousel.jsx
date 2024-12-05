import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FeaturedCarousel.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedCarousel = ({ categoryName, books }) => {
  return (
    <div className="featured-carousel-container">
      <h2 className="category-title">{categoryName}</h2>
      <Swiper
        spaceBetween={20} // Spacing between slides
        slidesPerView={5} // Show 5 books per row
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for smaller screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // 3 slides for tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5, // 5 slides for desktops
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="book-carousel"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id} className="book-slide">
            <Link to={`/book/${book.id}`} className="book-link">
              <img
                src={book.thumbnail || "/path-to-placeholder-image.jpg"}
                alt={book.title || "Book cover"}
                className="book-image"
              />
              <div className="book-info">
                {/* <h3 className="book-title">{book.title}</h3>
                <p className="book-author">
                  {book.authors?.join(", ") || "Unknown Author"}
                </p> */}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

FeaturedCarousel.propTypes = {
  categoryName: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      thumbnail: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedCarousel;
