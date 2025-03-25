import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserData } from '../context/UserContext';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = UserData();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(`/api/events/${id}`, { withCredentials: true });
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!event) {
    return <div className="p-4">Event not found</div>;
  }

  // Determine if the user is already registered for this event
  const isRegistered =
    user.joinedEvents && user.joinedEvents.some((eid) => eid.toString() === event._id);

  const handleRegister = () => {
    // Navigate to register-team page for team registration
    navigate(`/register-team/${event._id}`);
  };

  const handleUnregister = async () => {
    try {
      await axios.post(`/api/events/unregister/${event._id}`, {}, { withCredentials: true });
      // Remove the event id from the user's joinedEvents array
      const updatedJoinedEvents = user.joinedEvents.filter(
        (eid) => eid.toString() !== event._id
      );
      setUser({ ...user, joinedEvents: updatedJoinedEvents });
    } catch (error) {
      console.error('Error unregistering from event:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <img
        src={event.image.url}
        alt={event.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="mb-4">{event.description}</p>
      <div className="mb-2">
        <span className="font-semibold">Date: </span>
        {new Date(event.date).toLocaleDateString()}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Address: </span>
        {event.address || event.Address}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Category: </span>
        {event.category}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Difficulty: </span>
        {event.difficulty}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Team Size: </span>
        {event.teamSize}
      </div>
      <div className="mt-4">
        {isRegistered ? (
          <button
            onClick={handleUnregister}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-2"
          >
            Unregister
          </button>
        ) : (
          <button
            onClick={handleRegister}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2"
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDetail;