"use client";

import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export default function ManageEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [newEvent, setNewEvent] = useState({ 
    title: "", 
    description: "", 
    date: "",
    image: null as File | null
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Ambil token dari cookies
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };
      
      const token = getCookie('adminToken');
      const response = await fetch('/api/admin/events', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title) {
      alert('Title is required');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', newEvent.title);
      formData.append('description', newEvent.description);
      formData.append('date', newEvent.date);
      if (newEvent.image) {
        formData.append('image', newEvent.image);
      }

      // Ambil token dari cookies
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };
      
      const token = getCookie('adminToken');
      if (!token) {
        alert('Please login first');
        window.location.href = '/admin/login';
        return;
      }

      const response = await fetch('/api/admin/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        setNewEvent({ title: "", description: "", date: "", image: null });
        await fetchEvents();
        alert('Event created successfully!');
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || 'Failed to create event';
        console.error('Server error:', errorData);
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id: number) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      // Ambil token dari cookies
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };
      
      const token = getCookie('adminToken');
      if (!token) {
        alert('Please login first');
        window.location.href = '/admin/login';
        return;
      }

      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        await fetchEvents();
        alert('Event deleted successfully!');
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || 'Failed to delete event';
        console.error('Server error:', errorData);
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Manage Events</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Create New Event</h2>
        <form onSubmit={handleCreateEvent}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="eventTitle">Event Title *</label>
              <input
                id="eventTitle"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="eventDate">Event Date</label>
              <input
                id="eventDate"
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="eventDescription">Event Description</label>
            <textarea
              id="eventDescription"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Event Description"
              rows={4}
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="eventImage">Event Image</label>
            <input
              id="eventImage"
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setNewEvent({ ...newEvent, image: e.target.files?.[0] || null })}
            />
            {newEvent.image && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {newEvent.image.name}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Existing Events ({events.length})</h2>
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No events found. Create your first event above!</p>
        ) : (
          <div className="space-y-4">
            {events.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    {event.date && (
                      <p className="text-sm text-gray-600 mb-2">
                        Date: {new Date(event.date).toLocaleDateString()}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-gray-700 mb-2">{event.description}</p>
                    )}
                    {event.image && (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="mt-2 h-32 w-32 object-cover rounded-md border"
                      />
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Created: {new Date(event.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleDeleteEvent(event.id)} 
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
