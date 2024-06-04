import React, { useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', first_name: '', last_name: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/users/', {
        params: { username, password }
      });
      setUser(response.data);
      setError('');
    } catch (error) {
      setError(error.response?.data.error || 'An error occurred');
      setUser(null);
    }
  };

  const handleCreateUser = async () => {
    try {
      const response = await axios.post('http://ec2-13-60-104-98.eu-north-1.compute.amazonaws.com/api/v1/users/', newUser);
      setNewUser({ username: '', first_name: '', last_name: '', password: '' });
      setError('');
      alert('User created successfully!');
    } catch (error) {
      setError(error.response?.data.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
          <div>
            <h3>Logged in as:</h3>
            <p>Username: {user.username}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Create New User</h2>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={newUser.first_name}
          onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.last_name}
          onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
    </div>
  );
};

export default UserList;
