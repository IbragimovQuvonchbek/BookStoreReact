import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetail({ match }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-detail/${match.params.id}/`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching the book details:', error);
      });
  }, [match.params.id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
}

export default BookDetail;
