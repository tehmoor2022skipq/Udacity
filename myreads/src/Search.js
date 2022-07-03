import React from 'react';
import { useState, useEffect } from "react";
import { search } from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';
function Search({ books, update }) {
    const [searchQuery, setsearchQuery] = useState('');
    const [result, setresult] = useState([]);

    useEffect(() => {
        const handleSearch = () => {
            if (searchQuery.length > 0) {
                search(searchQuery.trim()).then(data => {
                    if (data.error) {
                        setresult([])
                    }
                    else {
                        data.forEach(data_ => {
                            let found = false
                            books.forEach(book => {
                                if (data_.id === book.id) {
                                    data_.shelf = book.shelf
                                    found = true
                                }
                            })
                            if (!found) data_.shelf = 'none'
                        })
                        setresult(data)
                    }
                }).catch(e => console.log('Error while searching', e))
            }
        }
        searchQuery === '' ? setresult([]) : handleSearch()
    }, [searchQuery, books])

    return (
        <div>
            {result && <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'
                        className="close-search"
                    >
                        Close
                    </Link>
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
                        {result.map((book) => {
                            return (
                                <li key={book.title + book.id}>
                                    <Book book={book} updateBookShelf={update} />
                                </li>)
                        })}
                    </ol>
                </div>
            </div>
            }
        </div>

    )

}

export default Search