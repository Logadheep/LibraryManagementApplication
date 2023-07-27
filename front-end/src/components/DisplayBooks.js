// displau bppks with rafce

import axios from 'axios'
import React from 'react'

//get book list for books from api
var books = [
    {
        id: 1,
        title: 'The Hunger Games',
    },
]

const getbooks = () => {
    axios.get('http://localhost:8080/api/books')
        .then((response) => {
            console.log(response.data)
            books = response.data
        })
}

const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/api/books/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}
getbooks()
const DisplayBooks = () => {
    return (
        <div className='books-container'>
            <h2>Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td> <button onClick={() => deleteBook(book.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayBooks
