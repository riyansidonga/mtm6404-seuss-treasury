import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>

      {books.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id}>
          <img
            src={book.image}
            alt={book.title}
            width="150"
            style={{ margin: "10px" }}
          />
        </Link>
      ))}
    </div>
  );
}

export default Books;