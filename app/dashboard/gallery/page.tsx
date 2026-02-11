"use client";

import { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ 
    title: "", 
    description: "", 
    category: "",
    image: null as File | null
  });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/dashboard/gallery', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setGallery(data);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
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
      formData.append('category', newItem.category);
      formData.append('image', newItem.image);

      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/dashboard/gallery', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        setNewItem({ title: "", description: "", category: "", image: null });
        await fetchGallery();
      } else {
        alert('Failed to create gallery item');
      }
    } catch (error) {
      console.error('Error creating gallery item:', error);
      alert('Error creating gallery item');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: number) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/dashboard/gallery?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        await fetchGallery();
      } else {
        alert('Failed to delete gallery item');
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      alert('Error deleting gallery item');
    }
  };

  const handleToggleActive = async (id: number, isActive: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/dashboard/gallery?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isActive }),
      });

      if (response.ok) {
        await fetchGallery();
      } else {
        alert('Failed to update gallery status');
      }
    } catch (error) {
      console.error('Error updating gallery status:', error);
      alert('Error updating gallery status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
            <a
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </a>
          </div>

          {/* Create Gallery Item Form */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Add New Gallery Item
              </h3>
              <form onSubmit={handleCreateItem} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      value={newItem.title}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    >
                      <option value="">Select Category</option>
                      <option value="Technology">Technology</option>
                      <option value="Creative">Creative</option>
                      <option value="Publisher">Publisher</option>
                      <option value="Events">Events</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
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
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.files?.[0] || null })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-400"
                  >
                    {loading ? 'Adding...' : 'Add to Gallery'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Gallery Items List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Gallery Items ({gallery.length})
              </h3>
            </div>
            <div className="border-t border-gray-200">
              {gallery.length === 0 ? (
                <div className="px-4 py-5 text-center text-gray-500">
                  No gallery items found. Add your first item above!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {gallery.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-square relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          {item.category && (
                            <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                              {item.category}
                            </span>
                          )}
                          <button
                            onClick={() => handleToggleActive(item.id, !item.isActive)}
                            className={`px-3 py-1 text-xs rounded-full font-medium ${
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
