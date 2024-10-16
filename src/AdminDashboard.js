import React, { useState, useEffect } from 'react';
import RoomList from './RoomList';
import UserList from './UserList';
import ChoreList from './ChoreList';

function AdminDashboard() {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch rooms and users from data sources (e.g., JSON files or API)
    fetch('/rooms.json')
      .then(response => response.json())
      .then(data => setRooms(data));

    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleRoomAssign = () => {
    if (selectedRoom && selectedUser) {
      // Implement logic to assign the room to the user (e.g., update JSON file or API)
      console.log(`Assigning room ${selectedRoom.name} to user ${selectedUser.name}`);
      // ... (code to assign room to user)
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <RoomList rooms={rooms} onSelect={handleRoomSelect} />
      <UserList users={users} onSelect={handleUserSelect} />
      {selectedRoom && (
        <ChoreList roomId={selectedRoom.id} /> 
      )}
      {selectedRoom && selectedUser && (
        <button onClick={handleRoomAssign}>Assign Room</button>
      )}
    </div>
  );
}

export default AdminDashboard;
