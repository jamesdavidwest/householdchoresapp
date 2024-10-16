import React, { useState, useEffect } from 'react';

function ChoreList({ roomId }) {
  const [chores, setChores] = useState([]);
  const [users, setUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState({}); // Store assigned users for each chore

  useEffect(() => {
    // Fetch chores for the selected room from data sources (e.g., JSON files or API)
    fetch(`/chores.json?roomId=${roomId}`)
      .then(response => response.json())
      .then(data => setChores(data));

    // Fetch users from data sources (e.g., JSON files or API)
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [roomId]);

  const handleUserChange = (choreId, userId) => {
    setAssignedUsers(prevAssignedUsers => ({
      ...prevAssignedUsers,
      [choreId]: userId,
    }));
  };

  const handleSave = () => {
    // Implement logic to save assigned users to data sources (e.g., API or update JSON file)
    console.log('Saving assigned users:', assignedUsers);
    // ... (code to save assigned users)
  };

  const handleCancel = () => {
    // Reset assignedUsers to initial state
    setAssignedUsers({});
  };

  return (
    <div>
      <ul>
        {chores.map(chore => (
          <li key={chore.id}>
            {chore.name}
            <select value={assignedUsers[chore.id] || ''} onChange={(e) => handleUserChange(chore.id, e.target.value)}>
              <option value="">Assign User</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default ChoreList;
