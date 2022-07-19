import Book from "./Book";

const BookShelf = ({ shelf, books, onUpdate }) => {
  const updatedBooks = [];

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {updatedBooks.concat(books).map((book) => {
            if (shelf === book.shelf) {
              return <Book book={book} key={book.id} onUpdate={onUpdate} />;
            }

            return "";
          })}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
