import PropTypes from "prop-types";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, subText, additionalText }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue.trim()) {
      onSearch(inputValue); // Trigger search only if input is non-empty
    }
  };

  return (
    <div className="search-bar-container">
      {/* Display the optional subText */}
      {subText && <p className="search-bar-subtext">{subText}</p>}

      {/* Search bar form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search books..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Additional optional text */}
      {additionalText && <p className="additional-text">{additionalText}</p>}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensure onSearch is provided
  subText: PropTypes.string, // Optional subtitle text
  additionalText: PropTypes.string, // Optional additional text
};

export default SearchBar;
