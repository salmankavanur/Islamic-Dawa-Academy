"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  caption: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

export default function GalleryManagementPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin/gallery');
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery items');
        }
        
        const data = await response.json();
        setGalleryItems(data.items || []);
      } catch (err) {
        console.error('Error fetching gallery items:', err);
        setError('Failed to load gallery items. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/gallery?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete gallery item');
      }

      // Remove the deleted item from the state
      setGalleryItems(galleryItems.filter(item => item._id !== id));
    } catch (err) {
      console.error('Error deleting gallery item:', err);
      setError('Failed to delete gallery item. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
        <Link
          href="/admin/gallery/new"
          className="flex items-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
        >
          <Plus size={18} className="mr-1" />
          Add Image
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="animate-pulse bg-gray-200 h-48 w-full"></div>
              <div className="p-4">
                <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="animate-pulse h-3 bg-gray-200 rounded w-full mb-4"></div>
                <div className="animate-pulse h-8 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : galleryItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 w-full bg-gray-100">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.caption}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                  <div className="space-x-2">
                    <Link
                      href={`/admin/gallery/edit/${item._id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Pencil size={14} className="mr-1" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500 mb-4">No gallery items found.</p>
          <Link
            href="/admin/gallery/new"
            className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            <Plus size={18} className="mr-1" />
            Add Your First Image
          </Link>
        </div>
      )}
    </div>
  );
}