import { useEffect, useState } from "react";
import { search } from "../BooksAPI";

export default function SearchBook({
  updateBooks,
  setShowSearchpage,
  showSearchPage,
}) {
  const [searchResult, setSearchResult] = useState([]);
  const [formattedSearchResult, setformattedSearchResult] = useState("");
  useEffect(() => {
    let formSearcList = "";
    if (searchResult)
      formSearcList = searchResult.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    'url("' + book.imageLinks.smallThumbnail + '")',
                }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={(e) => updateBooks(book, e.target.value)}>
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
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
      ));
    else formSearcList = "No books available";
    setformattedSearchResult(formSearcList);
  }, [searchResult]);

  const handleOnChangeOfSearchText = (e) => {
    let searchQuery = e.target.value;
    if (searchQuery)
      search(searchQuery).then((searchResult) => setSearchResult(searchResult));
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleOnChangeOfSearchText}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{formattedSearchResult}</ol>
      </div>
    </div>
  );
}
