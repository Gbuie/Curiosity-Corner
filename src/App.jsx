import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage.jsx";
import BookDetails from "./features/Books/BookDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import Nav from './features/Nav/Nav';
import "./Shared/styles/global.css";
import Library from "./pages/Library.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<NotFound />} /> {/*Catch-all route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;