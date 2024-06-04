import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [route, setRoute] = useState('/');

  const renderComponent = () => {
    switch (route) {
      case '/':
        return <BookList />;
      case '/add-book':
        return <AddBook />;
      case '/update-book':
        return <UpdateBook />;
      case '/delete-book':
        return <DeleteBook />;
      case '/users':
        return <UserList />;
      default:
        return <BookList />;
    }
  };

  return (
    <div className="App">
      <h1>Book Management App</h1>
      <nav>
        <button onClick={() => setRoute('/')}>Book List</button>
        <button onClick={() => setRoute('/add-book')}>Add Book</button>
        <button onClick={() => setRoute('/update-book')}>Update Book</button>
        <button onClick={() => setRoute('/delete-book')}>Delete Book</button>
        <button onClick={() => setRoute('/users')}>User List</button>
      </nav>
      {renderComponent()}
    </div>
  );
}

export default App;
