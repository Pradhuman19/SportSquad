import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserData } from '../context/UserContext';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const { user, setUser } = UserData();

  const handleRegister = () => {
    navigate(`/register-team/${event._id}`);
  };

  const handleViewDetails = () => {
    navigate(`/events/${event._id}`);
  };

  const handleUnregister = async () => {
    try {
      await axios.post(`/api/events/unregister/${event._id}`, {}, { withCredentials: true });
      // Update the user context by removing the event id from joinedEvents
      const updatedJoinedEvents = user.joinedEvents.filter(
        (eid) => eid.toString() !== event._id
      );
      setUser({ ...user, joinedEvents: updatedJoinedEvents });
    } catch (error) {
      console.error('Error unregistering from event:', error);
    }
  };

  // Determine if the user has already registered for this event
  const isRegistered =
    user.joinedEvents && user.joinedEvents.some((eid) => eid.toString() === event._id);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 flex">
      <div className="w-1/3">
        <img
          src={event.image.url}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          <p className="text-gray-700 text-sm mb-2">
            {event.description.length > 100 
              ? `${event.description.slice(0, 100)}...` 
              : event.description}
          </p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-medium">
              {new Date(event.date).toLocaleDateString()}
            </span>
            <span className="text-gray-600 font-medium">{event.address || event.Address}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm">Category: {event.category}</span>
            <span className="text-gray-600 text-sm">Difficulty: {event.difficulty}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {isRegistered ? (
            <button
              onClick={handleUnregister}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Unregister
            </button>
          ) : (
            <button
              onClick={handleRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Register
            </button>
          )}
          <button
            onClick={handleViewDetails}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            View Details
          </button>
          <span className="text-gray-500 text-sm">Team Size: {event.teamSize}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
