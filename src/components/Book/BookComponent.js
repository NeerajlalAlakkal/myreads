import React, { useEffect, useState } from 'react'

export default function BookComponent({updateBooks, bookShelf, books}) {

  const [bookShelfName, setBookShelfName] = useState('');

  useEffect(() => {
    setBookShelfName(bookShelf === 'currentlyReading'? 'Currently Reading': bookShelf === 'read'? 'Read': 'Want to read')
  }, [bookShelf])  

  let booksToRender = (!books)? '': books.map(book =>  
        <li key={book.id}>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    'url("'+book.imageLinks.smallThumbnail+'")',
                }}
                ></div>
                <div className="book-shelf-changer">
                <select onChange={ (e) => updateBooks(book, e.target.value)}>
                    <option value="none" disabled selected>
                    Move to...
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
            </div>
      </li>)
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
