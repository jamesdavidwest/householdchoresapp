import React, { useState, useEffect } from 'react';
import RoomList from './RoomList';
import UserList from './UserList';
import ChoreList from './ChoreList';

function UserDashboard() {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

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

  return (
    <div>
      <h1>User Dashboard</h1>
      <RoomList rooms={rooms} onSelect={handleRoomSelect} />
      <UserList users={users} />
      {selectedRoom && (
        <ChoreList roomId={selectedRoom.id} /> 
      )}
    </div>
  );
}

export default UserDashboard;
