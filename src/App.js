import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import RoomPage from './RoomPage';
import Login from './Login';
import choresData from './chores.json';
import usersData from './users.json';
import './App.css';

function App() {
  const [chores, setChores] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setChores(choresData);
  }, []);

  const toggleChore = (id) => {
    if (user) {
      setChores(chores.map(chore => 
        chore.id === id && chore.assignedTo === user.username
          ? { ...chore, completed: !chore.completed }
          : chore
      ));
    }
  };

  const handleLogin = (username) => {
    const loggedInUser = usersData.find(u => u.username === username);
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      alert('User not found');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Household Chores</h1>
          {user && <p>Welcome, {user.name}!</p>}
          {user && <button onClick={handleLogout}>Logout</button>}
        </header>
        <main>
          <Routes>
            <Route path="/login" element={
              user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/" element={
              user ? <MainPage chores={chores} /> : <Navigate to="/login" replace />
            } />
            <Route path="/room/:roomName" element={
              user ? <RoomPage chores={chores} user={user} toggleChore={toggleChore} /> : <Navigate to="/login" replace />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;