"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Calendar, 
  Images, 
  FileText, 
  Menu, 
  X, 
  LogOut, 
  Settings,
  Bell,
  Search,
  User
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: activePath === "/admin",
    },
    {
      name: "Events",
      href: "/admin/events",
      icon: Calendar,
      current: activePath === "/admin/events",
    },
    {
      name: "Gallery",
      href: "/admin/gallery",
      icon: Images,
      current: activePath === "/admin/gallery",
    },
    {
      name: "Flyers",
      href: "/admin/flyers",
      icon: FileText,
      current: activePath === "/admin/flyers",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Logo and Menu */}
            <div className="flex items-center">
              <button
                type="button"
                className="lg:hidden -m-2.5 p-2.5 text-gray-700 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <Link href="/admin" className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="hidden lg:block">
                  <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
                  <p className="text-xs text-gray-500">Abhinaya Indo Group</p>
                </div>
              </Link>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-64 rounded-lg border-0 bg-gray-100 py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Notifications */}
              <button
                type="button"
                className="relative rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <User className="h-5 w-5" />
                </button>
              </div>

              {/* Back to Site */}
              <Link
                href="/"
                className="hidden sm:flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Visit Site</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-gray-900/80" 
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="relative flex w-64 max-w-xs flex-1 flex-col bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 pt-5">
              <div className="flex h-16 shrink-0 items-center">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="ml-3 text-lg font-semibold text-gray-900">Admin</span>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors ${
                          item.current
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-gray-200 px-6 pb-4 pt-5">
          <div className="flex h-16 shrink-0 items-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
              <p className="text-xs text-gray-500">Management System</p>
            </div>
          </div>
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group flex gap-x-3 rounded-xl p-3 text-sm font-semibold leading-7 transition-all ${
                      item.current
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <button className="flex w-full items-center gap-x-3 rounded-lg p-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                <Settings className="h-5 w-5" />
                Settings
              </button>
              <Link
                href="/admin/login"
                className="flex w-full items-center gap-x-3 rounded-lg p-3 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
