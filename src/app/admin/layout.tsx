"use client";

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Menu, 
  LogOut, 
  Home, 
  Newspaper, 
  Image, 
  Settings,
  ChevronRight,
  User,
  X
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // If path is /admin/login, just render the children without the admin layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }
  
  // Menu items for the sidebar
  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { name: 'Blog Posts', href: '/admin/blog', icon: Newspaper },
    { name: 'Gallery', href: '/admin/gallery', icon: Image },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <Link href="/admin/dashboard" className="font-bold text-xl text-green-800">
          Admin Panel
        </Link>
        <button 
          onClick={toggleSidebar} 
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:h-screen`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/admin/dashboard" className="font-bold text-xl text-green-800">
              Admin Panel
            </Link>
            <button 
              onClick={toggleSidebar} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* User Info */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-green-100 p-2">
                <User size={24} className="text-green-700" />
              </div>
              <div>
                <div className="font-medium">{session?.user?.name || 'Admin'}</div>
                <div className="text-sm text-gray-500">{session?.user?.email}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-green-50 text-green-800' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span className="flex-1">{item.name}</span>
                  {isActive && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>
          
          {/* Sign Out Button */}
          <div className="pt-6 border-t">
            <button 
              onClick={handleSignOut}
              className="flex items-center px-4 py-3 w-full text-left rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}