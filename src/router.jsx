import { Routes, Route } from 'react-router-dom';
import Hero from './features/Hero/Hero.jsx';
import Categories from './features/Categories/Categories.jsx';
import Carousel from './features/Carousel/Carousel.jsx';

function RouterConfig() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Hero />
            <Categories />
            <Carousel />
          </div>
        }
      />
      {/* Additional routes can be added here */}
    </Routes>
  );
}

export default RouterConfig;
