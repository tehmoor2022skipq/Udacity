import React from 'react';
import { useState, useEffect } from "react";
function Search(props) {
    const [search, setsearch] = useState('');
    const [books, setbooks] = useState([]);
    const handleSearch = (e) => {
        setsearch(e.target.value);
    }
    useEffect(() => {
        search === '' ? setbooks([]) : setbooks(props.data.filter(book => book.title.toLowerCase().includes(search.toLowerCase())))
    }, [search])

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
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <li key={book.title}>
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