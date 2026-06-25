import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

// Add book page
function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux books
  const books = useSelector((state) => state.books.books);

  // Form states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] =
    useState("");
  const [rating, setRating] = useState("");

  // Error state
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !title ||
      !author ||
      !category ||
      !description ||
      !rating
    ) {
      setError("Please fill all fields");
      return;
    }

    // New book object
    const newBook = {
      id: books.length + 1,
      title,
      author,
      category,
      description,
      rating,
    };

    // Add book to Redux
    dispatch(addBook(newBook));

    // Redirect 
    navigate("/books/all");
  };

  return (
    <div className="page">
      <h1>Add New Book</h1>

      {/* Error Message */}
      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <form
        className="book-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        ></textarea>

        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;