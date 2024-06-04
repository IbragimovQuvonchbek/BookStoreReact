import React, { useState } from 'react';
import axios from 'axios';

function DeleteBook() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-delete/`, {
      data: { id, username }
    })
      .then(response => {
        console.log('Book deleted:', response.data);
      })
      .catch(error => {
        console.error('Error deleting the book:', error);
      });
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Book ID"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteBook;
