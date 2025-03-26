"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { File, Image as ImageIcon, ArrowRight, Pencil, Eye, PlusCircle } from 'lucide-react';

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
      {/* Header */}
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

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      {/* Quick Access Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse bg-white rounded-lg p-6 shadow-sm h-40">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : (
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
      )}

      {/* Recent Blog Posts Table */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Blog Posts</h2>
            <Link
              href="/admin/blog/new"
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <PlusCircle size={16} className="mr-1" />
              New Post
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4">
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-1/3"></div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-20 ml-auto"></div>
                    </td>
                  </tr>
                ))
              ) : stats?.recentBlogPosts && stats.recentBlogPosts.length > 0 ? (
                stats.recentBlogPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                    <td className="px-6 py-4 text-gray-500">{post.date}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link
                        href={`/admin/blog/edit/${post.id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Pencil size={14} className="mr-1" />
                        Edit
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Eye size={14} className="mr-1" />
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    No blog posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t text-right">
          <Link
            href="/admin/blog"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Posts
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}