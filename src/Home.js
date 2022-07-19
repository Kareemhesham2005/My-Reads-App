import BookShelf from "./bookShelf";
import { Link } from "react-router-dom";

const Home = ({ books, onUpdate }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelf="currentlyReading"
            books={books}
            onUpdate={onUpdate}
          />
          <BookShelf shelf="wantToRead" books={books} onUpdate={onUpdate} />
          <BookShelf shelf="read" books={books} onUpdate={onUpdate} />

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
