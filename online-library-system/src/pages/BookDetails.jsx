// Find selected book using route parameter
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Book details page
function BookDetails() {
  const { id } = useParams();

  // Get books from Redux
  const books = useSelector((state) => state.books.books);

  // Find selected book
  const book = books.find(
    (book) => book.id === Number(id)
  );

  // If book not found
  if (!book) {
    return (
      <div className="page">
        <h2>Book Not Found</h2>

        <Link to="/books/all">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <h1>{book.title}</h1>

        <p>
          <strong>Author:</strong> {book.author}
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {book.category}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {book.description}
        </p>

        <p>
          <strong>Rating:</strong> {book.rating}
        </p>

        <Link to="/books/all" className="back-btn">
          Back to Browse
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;
