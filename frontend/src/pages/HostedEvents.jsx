import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';

const HostedEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchHostedEvents = async () => {
      try {
        const { data } = await axios.get('/api/events/hosted', { withCredentials: true });
        setEvents(data);
      } catch (error) {
        console.error('Error fetching hosted events:', error);
      }
    };

    fetchHostedEvents();
  }, []);

  const handleAdminControl = (id) => {
    // Navigate to an admin control page (for example, to edit the event)
    navigate(`/admin/events/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hosted Events</h1>
      <div className="space-y-4">
        {events.length ? (
          events.map(event => (
            <div key={event._id} className="space-y-2">
              <EventCard event={event} />
              <button
                onClick={() => handleAdminControl(event._id)}
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
              >
                Admin Control
              </button>
            </div>
          ))
        ) : (
          <p>No hosted events found.</p>
        )}
      </div>
    </div>
  );
};

export default HostedEvents;