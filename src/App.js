import "./App.css";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./Home";
import Search from "./Search";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const handleUpdateBooks = (book, shelf) => {
    const getUpdatedBooks = async () => {
      await BooksAPI.update(book, shelf);
      const res = await BooksAPI.get(book.id);
      const newArray = books.filter((b) => b.id !== res.id);
      setBooks(newArray.concat(res));
    };

    getUpdatedBooks();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/search"
          element={<Search onUpdate={handleUpdateBooks} books={books} />}
        />

        <Route
          exact
          path="/"
          element={<Home books={books} onUpdate={handleUpdateBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
