import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

const HostedEvents = () => {
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hosted Events</h1>
      <div className="space-y-4">
        {events.length ? (
          events.map(event => <EventCard key={event._id} event={event} />)
        ) : (
          <p>No hosted events found.</p>
        )}
      </div>
    </div>
  );
};

export default HostedEvents;