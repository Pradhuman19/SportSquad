import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../context/UserContext';

const Navbar = () => {
  const { user, isAuth, logout } = UserData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">SportSquad</Link>
      {isAuth && (
        <div className="flex items-center">
          <span className="text-white mr-4">{user.name}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;