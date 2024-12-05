import './Categories.css';

function Categories() {
  return (
    <section className="categories">
      <h2>Browse by Age Group</h2>
      <div className="category-list">
        <button>5 & Under</button>
        <button>Ages 6-8</button>
        <button>Ages 9-12</button>
        <button>Audio Books</button>
        <button>Award Winners</button>
      </div>
    </section>
  );
}

export default Categories;
