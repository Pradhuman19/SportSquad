import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/register-team/${event._id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex mb-4">
      <img src={event.image.url} alt={event.title} className="w-1/4 object-cover" />
      <div className="p-4 flex-1">
        <h2 className="text-lg font-bold">{event.title}</h2>
        <p className="text-gray-600">{event.location}</p>
        <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
        <button onClick={handleRegister} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </div>
    </div>
  );
};

export default EventCard;