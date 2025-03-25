import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

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
    </div>
  );
};

export default EventDetail;