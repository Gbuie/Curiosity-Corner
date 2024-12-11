import { useState, useEffect } from 'react';
import { fetchChildrenBooks } from '../api/googleBooks.js'; // Adjust the import based on your API function
import './Library.css'; // Create a CSS file for styling
import Footer from '../features/Footer/Footer.jsx';
import Nav from '../features/Nav/Nav.jsx';
// import HeaderLong from '../assets/images/headerLong.png';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [languages] = useState(['English', 'Spanish', 'French', 'German', 'Chinese']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [categories] = useState(['Fiction', 'Non-Fiction', 'Science', 'History']);
  const [features] = useState(['Bestseller', 'Award Winner', 'New Release']);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await fetchChildrenBooks('children', 20); // Fetch 20 children's books
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Nav />
      <div className="library-container">
        {/* <img src={HeaderLong} alt="Library Header" className="header-image" /> */}
        <h1>Welcome To Curiosity Corner Library!</h1>
        <div className="dropdowns">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select onChange={(e) => setSelectedFeature(e.target.value)} value={selectedFeature}>
            <option value="">Select Feature</option>
            {features.map((feature) => (
              <option key={feature} value={feature}>{feature}</option>
            ))}
          </select>
          <select onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
            {languages.map((language) => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="books-list">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <img
                src={book.thumbnail || 'https://via.placeholder.com/150'}
                alt={book.title || 'No title available'}
                className="book-thumbnail"
              />
              <h2>{book.title}</h2>
              <p>By: {book.authors?.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
