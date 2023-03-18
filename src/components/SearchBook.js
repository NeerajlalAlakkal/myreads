import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import Book from "./Book/Book";

export default function SearchBook({ updateBooks, setShowSearchpage, showSearchPage, allBooks }) {

  const [searchResult, setSearchResult] = useState([]);
  const [formattedSearchResult, setformattedSearchResult] = useState("");

  useEffect(() => {    
      console.log(searchResult)
      let formSearcList  = searchResult.map((searchBook) => {

        //Changing the shelf value of search result book
      let mappedBook = allBooks.find(allbook => allbook.id === searchBook.id)
      searchBook.shelf = (mappedBook)? mappedBook.shelf: "none";

      return ( <Book key={searchBook.id} book={searchBook} updateBooks={updateBooks}/> )
    });
    setformattedSearchResult(formSearcList);
  }, [searchResult]);

  const handleOnChangeOfSearchText = (e) => {
    let searchQuery = e.target.value;

    console.log('Search text change', e.target.value)

    if (searchQuery)
      search(searchQuery)
      .then((searchResult) => {
        // success - searchResult = [{book}, {}]
        // fail - searchResult =  {error: true, ...}
        
        if(searchResult.error)
          setSearchResult([]);
        else
          setSearchResult(searchResult)
          
      })
      .catch(e => console.log("erro", e));
    else
    setSearchResult([]);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => setShowSearchpage(!showSearchPage)}> Close </a>
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
