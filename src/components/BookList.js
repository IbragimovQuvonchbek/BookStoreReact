// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// function BookList() {
//   const [books, setBooks] = useState([]);
//
//   useEffect(() => {
//     axios.get('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-list/')
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching the book list:', error);
//       });
//   }, []);
//
//   return (
//     <div>
//       <h2>Book List</h2>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// export default BookList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-list/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching the book list:', error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {/* Use an anchor tag to navigate to the detail page */}
            <a href={`http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/book-detail/${book.id}/`}>
              {book.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
