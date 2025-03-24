import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-white">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/events" className="text-white">Events</Link>
        </li>
        <li className="mb-4">
          <Link to="/hosted" className="text-white">Hosted Events</Link>
        </li>
        <li className="mb-4">
          <Link to="/joined" className="text-white">Joined Events</Link>
        </li>
        <li className="mb-4">
          <Link to="/createevent" className="text-white">Create Event</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;