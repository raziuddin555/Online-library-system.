import { Link } from "react-router-dom";
import books from "../data/books";
import BookCard from "../components/BookCard";

// Home page component
function Home() {
  // Book categories
  const categories = [
    "Fiction",
    "Finance",
    "Self-Help",
    "Productivity",
  ];

  return (
    <div className="page">
      <h1>Welcome to the Online Library</h1>

      <p>
        Discover books from different categories and
        improve your knowledge.
      </p>

      {/* Categories Section */}
      <div className="categories">
        <h2>Book Categories</h2>

        <div className="category-list">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/books/${category}`}
              className="category-btn"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books */}
      <div>
        <h2>Popular Books</h2>

        <div className="books-grid">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;