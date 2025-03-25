import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

const JoinedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchJoinedEvents = async () => {
      try {
        const { data } = await axios.get('/api/events/joined', { withCredentials: true });
        setEvents(data);
      } catch (error) {
        console.error('Error fetching joined events:', error);
      }
    };

    fetchJoinedEvents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Joined Events</h1>
      <div className="space-y-4">
        {events.length ? (
          events.map(event => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p>No joined events found.</p>
        )}
      </div>
    </div>
  );
};

export default JoinedEvents;