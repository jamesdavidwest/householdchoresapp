import React from 'react';
import Chore from './Chore';

function ChoreList({ chores, toggleChore, userRole }) {
  return (
    <div className="chore-list">
      {chores.map(chore => (
        <Chore 
          key={chore.id} 
          chore={chore} 
          toggleChore={toggleChore} 
          userRole={userRole} 
        />
      ))}
    </div>
  );
}

export default ChoreList;