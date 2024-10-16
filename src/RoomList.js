import React from 'react';

function RoomList({ rooms, onSelect }) {
  return (
    <ul>
      {rooms.map(room => (
        <li key={room.id} onClick={() => onSelect(room)}>
          {room.name}
        </li>
      ))}
    </ul>
  );
}

export default RoomList;
