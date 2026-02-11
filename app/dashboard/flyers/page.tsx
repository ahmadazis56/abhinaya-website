"use client";

import { useState, useEffect } from "react";

interface Flyer {
  id: number;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function FlyersPage() {
  const [flyers, setFlyers] = useState<Flyer[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ 
    title: "", 
    description: "", 
    image: null as File | null
  });

  useEffect(() => {
    fetchFlyers();
  }, []);

  const fetchFlyers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/dashboard/flyers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setFlyers(data);
      }
    } catch (error) {
      console.error('Error fetching flyers:', error);
    }
  };

  const handleCreateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', newItem.title);
      formData.append('description', newItem.description);
      formData.append('image', newItem.image);

      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/dashboard/flyers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        setNewItem({ title: "", description: "", image: null });
        await fetchFlyers();
      } else {
        alert('Failed to create flyer');
      }
    } catch (error) {
      console.error('Error creating flyer:', error);
      alert('Error creating flyer');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: number) => {
    if (!confirm('Are you sure you want to delete this flyer?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/dashboard/flyers?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        await fetchFlyers();
      } else {
        alert('Failed to delete flyer');
      }
    } catch (error) {
      console.error('Error deleting flyer:', error);
      alert('Error deleting flyer');
    }
  };

  const handleToggleActive = async (id: number, isActive: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/dashboard/flyers?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isActive }),
      });

      if (response.ok) {
        await fetchFlyers();
      } else {
        alert('Failed to update flyer status');
      }
    } catch (error) {
      console.error('Error updating flyer status:', error);
      alert('Error updating flyer status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Flyers Management</h1>
            <a
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </a>
          </div>

          {/* Create Flyer Form */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Add New Flyer
              </h3>
              <form onSubmit={handleCreateItem} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.files?.[0] || null })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400"
                  >
                    {loading ? 'Adding...' : 'Add Flyer'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Flyers List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Flyers ({flyers.length})
              </h3>
            </div>
            <div className="border-t border-gray-200">
              {flyers.length === 0 ? (
                <div className="px-4 py-5 text-center text-gray-500">
                  No flyers found. Add your first flyer above!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {flyers.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <button
                            onClick={() => handleToggleActive(item.id, !item.isActive)}
                            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                              item.isActive
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-500 text-white hover:bg-gray-600'
                            }`}
                            title={item.isActive ? 'Click to unpublish' : 'Click to publish'}
                          >
                            {item.isActive ? '✓ Published' : '○ Draft'}
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                        )}
                        <p className="text-xs text-gray-400 mb-3">
                          Added: {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                        <button 
                          onClick={() => handleDeleteItem(item.id)} 
                          className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
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
        </div>
      </div>
    </div>
  );
}
