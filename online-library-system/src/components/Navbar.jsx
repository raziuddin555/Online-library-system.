import { Link } from "react-router-dom";

// Navigation bar component
function Navbar() {
  return (
    <nav className="navbar">
      <h2>Online Library</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/books/all">
          Browse Books
        </Link>

        <Link to="/add-book">
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;