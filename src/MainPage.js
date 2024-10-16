import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard'; // Assuming you have a UserDashboard component

function MainPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin (e.g., from local storage or API)
    const isUserAdmin = localStorage.getItem('isAdmin');
    if (isUserAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      {isAdmin ? <AdminDashboard /> : <UserDashboard />} 
    </div>
  );
}

export default MainPage;
