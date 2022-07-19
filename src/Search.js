import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import * as BooksAPI from "./BooksAPI";
import { useState } from "react";

const Search = ({ onUpdate, books }) => {
  const [newArray, setNewArray] = useState([]);
  const handleSearch = (value) => {
    const getSearch = async () => {
      if (value.target.value) {
        const res = await BooksAPI.search(value.target.value);
        if (!res.error) {
          res.map((book) => {
            books.map((b) => {
              if (book.id === b.id) {
                book.shelf = b.shelf;
              }
              return "";
            });
            return "";
          });
          setNewArray(res.filter((r) => r.imageLinks && r.title && r.authors));
        } else {
          setNewArray([]);
        }
      } else {
        setNewArray([]);
      }
    };

    getSearch();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <SearchList res={newArray} onUpdate={onUpdate} />
      </div>
    </div>
  );
};

export default Search;
