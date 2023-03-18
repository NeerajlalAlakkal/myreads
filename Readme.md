MyReads Project
This is the final assessment project for Udacity's React Fundamentals course. The goal of this project is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. 

To get started developing right away:

install all project dependencies with npm install
start the development server with npm start 

In this project I made three components 
-BookComponent
-SearchBook
-Book.

Backend Server
This is a backend server for you to develop against. The provided file BooksAPI.js contains the methods that will need to perform necessary operations on the backend:

getAll
update
search
getAll
Method Signature:

getAll();
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.
update
Method Signature:

update(book, shelf);
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
search
Method Signature:

search(query);
query: <String>
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only.
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend.

Create React App
This project was bootstrapped with Create React App.
