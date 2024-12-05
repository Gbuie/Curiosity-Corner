import { useState, useEffect } from "react";
import Hero from "../Hero/Hero.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeaturedCarousel from "../FeaturedCarousel/FeaturedCarousel.jsx";
import { fetchChildrenBooks } from "../../api/googleBooks.js";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx"


function HomePage() {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [fiveAndUnderBooks, setFiveAndUnderBooks] = useState([]);
  const [agesSixToEightBooks, setAgesSixToEightBooks] = useState([]);
  const [agesNineToTwelveBooks, setAgesNineToTwelveBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const featured = await fetchChildrenBooks("animated+children", 5);
        const fiveAndUnder = await fetchChildrenBooks("toddlers+books", 5);
        const agesSixToEight = await fetchChildrenBooks("kids+books", 5);
        const agesNineToTwelve = await fetchChildrenBooks("junior+books", 5);

        setFeaturedBooks(featured);
        setFiveAndUnderBooks(fiveAndUnder);
        setAgesSixToEightBooks(agesSixToEight);
        setAgesNineToTwelveBooks(agesNineToTwelve);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const results = await fetchChildrenBooks(query, 10);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
    <Nav />
      <Hero />
      <SearchBar onSearch={handleSearch} />
      {searchQuery ? (
        <FeaturedCarousel
          categoryName={`Search Results for "${searchQuery}"`}
          books={searchResults}
        />
      ) : (
        <>
          <FeaturedCarousel
            categoryName="Curious Corner Most Loved"
            books={featuredBooks}
          />
          <FeaturedCarousel
            categoryName="Newly Discovered"
            books={fiveAndUnderBooks}
          />
          <FeaturedCarousel
            categoryName="The Listening Shelf"
            books={agesSixToEightBooks}
          />
          <FeaturedCarousel
            categoryName="Courageous Tales"
            books={agesNineToTwelveBooks}
          />
        </>
      )}
      <Footer />
    </>
  );
}

export default HomePage;