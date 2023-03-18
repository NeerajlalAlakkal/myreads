import React from 'react';
import Book from "./Book"
export default function BookComponent({updateBooks, bookShelfName, books}) {
  let booksToRender = (!books)? '': books.map(book => <Book key={book.id} book={book} updateBooks={updateBooks}/>)
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfName}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">        
            {booksToRender}
        </ol>
        </div>
    </div>
  )
}
