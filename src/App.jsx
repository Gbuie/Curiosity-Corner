import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage.jsx";
import BookDetails from "./features/Books/BookDetails.jsx";
import "./Shared/styles/global.css";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;