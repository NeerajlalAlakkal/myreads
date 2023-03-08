import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import BookComponent from "./components/Book/BookComponent";
import SearchBook from "./components/SearchBook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [currentlyReading, seCurrentlyReading] = useState([]);
  const [read, setRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);

  const loadUserList = async () => {
    try {
      const allB = await getAll();
      setAllBooks(allB);
    } catch (error) {
      // handle any error state, rejected promises, etc..
    }
  };

  useEffect(() => {
    loadUserList();
  }, []);

  useEffect(() => {
    if (allBooks) {
      seCurrentlyReading(
        allBooks.filter((book) => book.shelf === "currentlyReading")
      );
      setRead(allBooks.filter((book) => book.shelf === "read"));
      setWantToRead(allBooks.filter((book) => book.shelf === "wantToRead"));
    }
  }, [allBooks]);

  const updateBooks = (book, shelf) => {
    console.log("updateBooks", book);
    update(book, shelf).then((res) => {
      console.log(res);
      loadUserList();
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook
          updateBooks={updateBooks}
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookComponent
                bookShelf="currentlyReading"
                updateBooks={updateBooks}
                books={currentlyReading}
              />
              <BookComponent
                bookShelf="read"
                updateBooks={updateBooks}
                books={read}
              />
              <BookComponent
                bookShelf="wantToRead"
                updateBooks={updateBooks}
                books={wantToRead}
              />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
