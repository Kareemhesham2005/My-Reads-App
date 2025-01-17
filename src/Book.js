import { useState } from "react";

const Book = ({ book, onUpdate }) => {
  const [state, setState] = useState(book.shelf ? book.shelf : "none");
  const handleChangeState = (e) => {
    const value = e.target.value;
    setState(value);

    onUpdate(book, value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks.thumbnail && book.imageLinks.thumbnail
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChangeState} value={state}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && [...book.authors]}</div>
      </div>
    </li>
  );
};

export default Book;
