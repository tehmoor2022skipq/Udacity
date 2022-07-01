import React from 'react';
import { useState } from 'react';
function Books(props) {
    const [data, setdata] = useState(props.data);
    const bookShelf = data.filter((book) => book.shelf === props.shelf);
    console.log('data', bookShelf)
    return (
        <div>
            {/* {console.log('props', (bookShelf))} */}
            <div className='grid-container'>
                {bookShelf.map((book) => <div className='grid-item'>{
                    <img src={book.imageLinks.thumbnail} />
                }
                    <div class="dropdown">
                        <button class="dropbtn">^</button>
                        <div class="dropdown-content">
                            <a href="#">Read</a>
                            <a href="#">Want to Read</a>
                            <a href="#">Currently Reading</a>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Books