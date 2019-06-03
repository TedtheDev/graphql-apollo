import React from 'react';

const Book = ({ title, author }) => {
    return (
        <div>
            <div>{title}</div>
            <div>{author}</div>
        </div>
    )
}

export default Book;