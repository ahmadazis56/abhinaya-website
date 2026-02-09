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

export default function ManageFlyersPage() {
  const [flyers, setFlyers] = useState<Flyer[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ 
    title: "", 
    description: "", 
    image: null as File | null
  });
  const [editingItem, setEditingItem] = useState<Flyer | null>(null);
  const [editForm, setEditForm] = useState({
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
      const response = await fetch('/api/admin/flyers', {
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

      console.log('Creating flyer with data:', {
        title: newItem.title,
        description: newItem.description,
        image: newItem.image.name,
        size: newItem.image.size
      });

      const token = localStorage.getItem('adminToken');
      console.log('Using token:', token ? 'exists' : 'missing');

      const response = await fetch('/api/admin/flyers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        setNewItem({ title: "", description: "", image: null });
        await fetchFlyers();
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        alert(`Failed to create flyer: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error creating flyer:', error);
      alert(`Error creating flyer: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id: number) => {
    if (!confirm('Are you sure you want to delete this flyer?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/flyers/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
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

  const handleEditItem = (item: Flyer) => {
    setEditingItem(item);
    setEditForm({
      title: item.title,
      description: item.description || "",
      image: null
    });
  };

  const handleUpdateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem || !editForm.title) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('id', editingItem.id.toString());
      formData.append('title', editForm.title);
      formData.append('description', editForm.description);
      if (editForm.image) {
        formData.append('image', editForm.image);
      }

      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/flyers/${editingItem.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        setEditingItem(null);
        setEditForm({ title: "", description: "", image: null });
        await fetchFlyers();
      } else {
        alert('Failed to update flyer');
      }
    } catch (error) {
      console.error('Error updating flyer:', error);
      alert('Error updating flyer');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (id: number, isActive: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/flyers/${id}`, {
        method: 'PUT',
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

  const activeFlyers = flyers.filter(f => f.isActive).length;
  const inactiveFlyers = flyers.length - activeFlyers;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Flyers</h1>
          <p className="text-gray-600">Upload and manage promotional flyers</p>
          <div className="flex gap-4 mt-2">
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              {activeFlyers} Published
            </span>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
              {inactiveFlyers} Draft
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Add New Flyer</h2>
        <form onSubmit={handleCreateItem}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="itemTitle">Title *</label>
            <input
              id="itemTitle"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Flyer Title"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="itemDescription">Description</label>
            <textarea
              id="itemDescription"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Flyer Description"
              rows={4}
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="itemImage">Image *</label>
            <input
              id="itemImage"
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setNewItem({ ...newItem, image: e.target.files?.[0] || null })}
              required
            />
            {newItem.image && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {newItem.image.name}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Adding...' : 'Add Flyer'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Flyers ({flyers.length})</h2>
        {flyers.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No flyers found. Add your first flyer above!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flyers.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
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
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                  )}
                  <p className="text-xs text-gray-400 mb-3">
                    Added: {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditItem(item)} 
                      className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteItem(item.id)} 
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Flyer</h2>
            <form onSubmit={handleUpdateItem}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editTitle">Title *</label>
                <input
                  id="editTitle"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Flyer Title"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editDescription">Description</label>
                <textarea
                  id="editDescription"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Flyer Description"
                  rows={4}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editImage">New Image (optional)</label>
                <input
                  id="editImage"
                  type="file"
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setEditForm({ ...editForm, image: e.target.files?.[0] || null })}
                />
                {editForm.image && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {editForm.image.name}
                  </p>
                )}
                {!editForm.image && editingItem.image && (
                  <p className="mt-2 text-sm text-gray-600">
                    Current image: {editingItem.image}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="flex-1 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Updating...' : 'Update Flyer'}
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setEditForm({ title: "", description: "", image: null });
                  }}
                  className="flex-1 bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
