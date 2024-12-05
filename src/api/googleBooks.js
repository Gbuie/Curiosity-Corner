export const fetchChildrenBooks = async (query, maxResults = 5) => {
  const API_KEY = "AIzaSyDnclXbN-6a4MXmtqVVAf5ImdexftZ-Jrg"; // Replace with your Google Books API key
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query
  )}&langRestrict=en&printType=books&maxResults=${maxResults}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) {
      console.warn("No books found for query:", query);
      return [];
    }

    return data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo?.title || "No title available",
      authors: item.volumeInfo?.authors || ["Unknown author"],
      description: item.volumeInfo?.description || "No description available.",
      thumbnail: item.volumeInfo?.imageLinks?.thumbnail || "",
      link: item.volumeInfo?.infoLink || "",
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
