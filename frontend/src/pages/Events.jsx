import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('/api/events/allEvents', { withCredentials: true });
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Events</h1>
      <div className="space-y-4">
        {events.length ? (
          events.map(event => <EventCard key={event._id} event={event} />)
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default Events;