import React from 'react';
import { useState } from 'react';
function Books(props) {
    const [data, setdata] = useState(props.data);
    const bookShelf = data.filter((book) => book.shelf === props.shelf);
    console.log('data', bookShelf)
    return (
        <div>
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{props.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {bookShelf.map((book) => {
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
                                                            <select defaultValue={props.shelf} onChange={(e) => { props.update(book, e.target.value) }}>
                                                                <option value="none" disabled>
                                                                    Move to...
                                                                </option>
                                                                <option value="currentlyReading">
                                                                    Currently Reading
                                                                </option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors[0]}</div>
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Books