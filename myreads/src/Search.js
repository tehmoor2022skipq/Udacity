import React from 'react';
import { useState, useEffect } from "react";
import { search } from './BooksAPI';
function Search(props) {
    const [searchQuery, setsearchQuery] = useState('');
    const [books, setbooks] = useState([]);
    async function handleSearch() {
        if (searchQuery.length > 0) {
            search(searchQuery.trim()).then(data_books => {
                if (data_books.error) {
                    console.log('Error in retreiving data while searching : ', data_books.error)
                }
                else {
                    data_books.forEach(data => {
                        let found = false
                        books.forEach(book => {
                            if (data.id === book.id) {
                                data.shelf = book.shelf
                                found = true
                            }
                        })
                        if (!found) data.shelf = 'none'
                    })
                    setbooks(data_books)
                }
            }).catch(error => console.log('Error in searching : ', error))
        }
    }

    useEffect(() => {
        if (searchQuery === '') setbooks([]);
        else
            handleSearch();
    }, [searchQuery])


    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <a
                        className="close-search"
                        onClick={() => props.handler(!props.showSearchPage)}
                    >
                        Close
                    </a>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchQuery}
                            onChange={(event) => { setsearchQuery(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <li key={book.title + book.authors[0]}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage:
                                                        `url(${book.imageLinks.thumbnail})`,
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={(e) => { props.update(book, e.target.value) }} defaultValue={book.shelf} >
                                                    <option value="none" disabled>
                                                        Move to...
                                                    </option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors[0]}</div>
                                    </div>
                                </li>)
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Search