import React from 'react'

// Add a new Book with these details

const AddBookForm = () => {
  return (
    <div>
        <h1>Add Book</h1>
        <form>
            <label>Book Name</label>
            <input type="text" name="bookname" placeholder="Enter Book Name" />
            <label>Author</label>
            <input type="text" name="author" placeholder="Enter Author Name" />
            <label>Rating</label>
            <input type="text" name="pages" placeholder="Enter Pages" />
            <label>ISBN</label>
            <input type="text" name="isbn" placeholder="Enter ISBN" />
            <button>Add Book</button>
        </form>
    </div>
  )
}

export default AddBookForm