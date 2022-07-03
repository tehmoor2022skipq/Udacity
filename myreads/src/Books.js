import React from 'react';
import { useState } from 'react';
import Book from './Book';
function Books(props) {
    const [data, setdata] = useState(props.data);
    const bookShelf = data.filter((book) => book.shelf === props.shelf);
    return (
        <div>
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{props.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {bookShelf.map((book) => (
                                        <li key={book.id}>
                                            <Book book={book} updateBookShelf={props.update} />
                                        </li>
                                    )
                                    )}

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