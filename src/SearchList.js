import Book from "./Book";

const SearchList = ({ res, onUpdate }) => {
  return (
    <ol className="books-grid">
      {res.map((book) => {
        if (book) {
          return <Book book={book} key={book.id} onUpdate={onUpdate} />;
        }

        return "";
      })}
    </ol>
  );
};

export default SearchList;
