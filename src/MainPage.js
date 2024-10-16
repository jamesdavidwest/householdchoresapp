import React from 'react';
import { Link } from 'react-router-dom';

function MainPage({ chores }) {
  const rooms = [...new Set(chores.map(chore => chore.room))];

  return (
    <div className="main-page">
      <h2>Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room}>
            <Link to={`/room/${room}`}>{room}</Link>
            <ul>
              {chores
                .filter(chore => chore.room === room)
                .map(chore => (
                  <li key={chore.id}>{chore.assignedTo}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;