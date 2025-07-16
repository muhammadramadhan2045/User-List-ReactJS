import React, { useEffect, useState } from 'react';
import './App.css';
import UserModal from './UserModal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(result);
  }, [search, users]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <h1 className="title">📋 Daftar Pengguna</h1>

      <input
        type="text"
        placeholder="Cari berdasarkan nama..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

{loading ? (
  <div className="loading-wrapper">
    <img src="/loader.gif" alt="Loading..." className="loading-gif" />
    <p>Memuat data pengguna...</p>
  </div>
) : (
  <>
    {filteredUsers.length === 0 ? (
      <p className="no-data">❌ Data tidak ditemukan</p>
    ) : (
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="user-item"
            onClick={() => handleUserClick(user)}
          >
            <strong>{user.name}</strong><br />
            <small>{user.email}</small>
          </li>
        ))}
      </ul>
    )}
  </>
)}



      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />

    </div>
  );
};

export default App;
