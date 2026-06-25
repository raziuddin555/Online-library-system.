// Filter books based on search input
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

// Browse books page
function BrowseBooks() {
  const { category } = useParams();

  // Search state
  const [search, setSearch] = useState("");

  // Redux books data
  const books = useSelector((state) => state.books.books);

  // Filter books by category
  const filteredBooks =
    category === "all"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() ===
            category.toLowerCase()
        );

  // Search filter
  const searchedBooks = filteredBooks.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Browse Books</h1>

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="books-grid">
        {searchedBooks.length > 0 ? (
          searchedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <h3>No books found</h3>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;