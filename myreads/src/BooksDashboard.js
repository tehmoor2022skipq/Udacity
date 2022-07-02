import React from 'react'
import Books from './Books';
import { Link } from 'react-router-dom';
function BooksDashboard({ data, update }) {
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div>
                {data && <Books data={data} shelf='currentlyReading' title="Currently Reading" update={update} />}
                {data && <Books data={data} shelf='wantToRead' title="Want to Read" update={update} />}
                {data && <Books data={data} shelf='read' title="Read" update={update} />}
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

export default BooksDashboard