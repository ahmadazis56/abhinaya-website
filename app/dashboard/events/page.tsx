"use client";

import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function EventsPage() {
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
      const response = await fetch('/api/dashboard/events');
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
    if (!newEvent.title) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', newEvent.title);
      formData.append('description', newEvent.description);
      formData.append('date', newEvent.date);
      if (newEvent.image) {
        formData.append('image', newEvent.image);
      }

      const response = await fetch('/api/dashboard/events', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setNewEvent({ title: "", description: "", date: "", image: null });
        await fetchEvents();
      } else {
        alert('Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id: number) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const response = await fetch(`/api/dashboard/events?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchEvents();
      } else {
        alert('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  const handleToggleActive = async (id: number, isActive: boolean) => {
    try {
      const response = await fetch(`/api/dashboard/events?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive }),
      });

      if (response.ok) {
        await fetchEvents();
      } else {
        alert('Failed to update event status');
      }
    } catch (error) {
      console.error('Error updating event status:', error);
      alert('Error updating event status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
            <a
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </a>
          </div>

          {/* Create Event Form */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Create New Event
              </h3>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Event Title
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Event Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => setNewEvent({ ...newEvent, image: e.target.files?.[0] || null })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                  >
                    {loading ? 'Creating...' : 'Create Event'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Events List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Existing Events ({events.length})
              </h3>
            </div>
            <div className="border-t border-gray-200">
              {events.length === 0 ? (
                <div className="px-4 py-5 text-center text-gray-500">
                  No events found. Create your first event above!
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {events.map((event) => (
                    <li key={event.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="text-lg font-medium text-gray-900">
                              {event.title}
                            </h4>
                            <button
                              onClick={() => handleToggleActive(event.id, !event.isActive)}
                              className={`ml-3 px-2 py-1 text-xs rounded-full font-medium ${
                                event.isActive
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {event.isActive ? 'Published' : 'Draft'}
                            </button>
                          </div>
                          {event.date && (
                            <p className="text-sm text-gray-500">
                              Date: {new Date(event.date).toLocaleDateString()}
                            </p>
                          )}
                          {event.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {event.description}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="ml-4 text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
