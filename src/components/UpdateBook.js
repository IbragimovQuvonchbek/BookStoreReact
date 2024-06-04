import React, { useState } from 'react';
import axios from 'axios';

function UpdateBook() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-update/', {
      id, title, description, author, year, pages, username
    })
      .then(response => {
        console.log('Book updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating the book:', error);
      });
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Book ID"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        <input
          type="text"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateBook;
