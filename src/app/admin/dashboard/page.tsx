"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { File, ImageIcon, ArrowRight, Pencil, Eye, PlusCircle } from 'lucide-react';

interface DashboardStats {
  totalBlogPosts: number;
  totalGalleryItems: number;
  recentBlogPosts: Array<{
    id: string;
    title: string;
    date: string;
    slug: string;
  }>;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const blogResponse = await fetch('/api/admin/blog?limit=3&published=true');
        const blogData = await blogResponse.json();
        const galleryResponse = await fetch('/api/admin/gallery?limit=1');
        const galleryData = await galleryResponse.json();

        setStats({
          totalBlogPosts: blogData.pagination?.total || 0,
          totalGalleryItems: galleryData.pagination?.total || 0,
          recentBlogPosts: blogData.posts?.slice(0, 3).map((post: any) => ({
            id: post._id,
            title: post.title,
            date: post.date,
            slug: post.slug
          })) || []
        });
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Dashboard cards for quick access
  const quickAccessCards = [
    {
      title: 'Blog Posts',
      description: 'Manage blog posts and articles',
      icon: File,
      href: '/admin/blog',
      count: stats?.totalBlogPosts || 0,
      color: 'bg-blue-50 text-blue-600',
      buttonLabel: 'Manage Posts',
    },
    {
      title: 'Gallery',
      description: 'Manage gallery images and collections',
      icon: ImageIcon,
      href: '/admin/gallery',
      count: stats?.totalGalleryItems || 0,
      color: 'bg-purple-50 text-purple-600',
      buttonLabel: 'Manage Gallery',
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {quickAccessCards.map((card) => (
          <div key={card.title} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.color}`}>
                <card.icon size={24} />
              </div>
              <div className="text-2xl font-bold">{card.count}</div>
            </div>
            <h2 className="text-lg font-semibold mb-1">{card.title}</h2>
            <p className="text-gray-500 mb-4">{card.description}</p>
            <Link
              href={card.href}
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {card.buttonLabel}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}