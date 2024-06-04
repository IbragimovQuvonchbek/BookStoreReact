import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [pages, setPages] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookData = {
            title,
            description,
            author,
            year: parseInt(year),
            pages: parseInt(pages),
            username
        };
        try {
            const response = await axios.post('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/create-book/', bookData);
            console.log('Book added successfully:', response.data);
        } catch (error) {
            setError('Error adding the book: ' + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
                <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Pages" required />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <button type="submit">Add Book</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default AddBook;
