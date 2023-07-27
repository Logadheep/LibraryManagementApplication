import React from 'react'

//on clicking search button this page should show up in front with max zindex and as a search option list
const Search = () => {
  return (
    <div className="search">
        <div className="search-container">
            <h1>Search</h1>
            <p> Please fill in the form below to search for a book. </p>
            <label htmlFor="book">Book:</label><br/>
            <input required type="text" id="book" name="book" placeholder="Book name.."/><br/>
            <label htmlFor="author">Author:</label><br/>
            <input type="text" id="author" name="author" placeholder="Author name.."/><br/>
            <label htmlFor="publisher">Publisher:</label><br/>
            <input type="text" id="publisher" name="publisher" placeholder="Publisher name.."/><br/>
            <label htmlFor="year">Year:</label><br/>
            <input type="text" id="year" name="year" placeholder="Year of publication.."/><br/>
            <label htmlFor="isbn">ISBN:</label><br/>
            <input type="text" id="isbn" name="isbn" placeholder="ISBN number.."/><br/>
            <label htmlFor="description">Description:</label><br/>
            <textarea id="description" name="description" placeholder="Write something.." style={{height:"200px"}}></textarea><br/>
            <button type="submit"> Submit </button>
        </div>            
    </div>
  )
}

export default Search