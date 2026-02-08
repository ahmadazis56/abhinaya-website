"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Calendar, 
  Images, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock,
  Eye,
  Plus,
  MoreHorizontal
} from "lucide-react";

interface Stats {
  totalEvents: number;
  totalGallery: number;
  totalFlyers: number;
  totalViews: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalEvents: 0,
    totalGallery: 0,
    totalFlyers: 0,
    totalViews: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching stats
    const fetchStats = async () => {
      try {
        // In real app, fetch from API
        setStats({
          totalEvents: 12,
          totalGallery: 48,
          totalFlyers: 8,
          totalViews: 1250
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Events",
      value: stats.totalEvents,
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "+2 this week",
      trend: "up"
    },
    {
      title: "Gallery Items",
      value: stats.totalGallery,
      icon: Images,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      change: "+8 this week",
      trend: "up"
    },
    {
      title: "Active Flyers",
      value: stats.totalFlyers,
      icon: FileText,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      change: "+1 this week",
      trend: "up"
    },
    {
      title: "Total Views",
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      change: "+125 this week",
      trend: "up"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "event",
      title: "Created new event: Tech Workshop 2024",
      time: "2 hours ago",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "gallery",
      title: "Added 3 photos to gallery",
      time: "5 hours ago",
      icon: Images,
      color: "text-purple-600"
    },
    {
      id: 3,
      type: "flyer",
      title: "Updated flyer: Special Promotion",
      time: "1 day ago",
      icon: FileText,
      color: "text-green-600"
    },
    {
      id: 4,
      type: "event",
      title: "Deleted event: Old Workshop",
      time: "2 days ago",
      icon: Calendar,
      color: "text-blue-600"
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your content today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/events"
            className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Create Event</h3>
              <p className="text-sm text-gray-600 mt-1">Add new event</p>
            </div>
          </Link>

          <Link
            href="/admin/gallery"
            className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <Plus className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Upload Photo</h3>
              <p className="text-sm text-gray-600 mt-1">Add to gallery</p>
            </div>
          </Link>

          <Link
            href="/admin/flyers"
            className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                <Plus className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Upload Flyer</h3>
              <p className="text-sm text-gray-600 mt-1">Add new flyer</p>
            </div>
          </Link>

          <div className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">View Analytics</h3>
              <p className="text-sm text-gray-600 mt-1">Coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-50`}>
                      <activity.icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded-lg">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Content Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Events</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{stats.totalEvents}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                    <Images className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Gallery</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{stats.totalGallery}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Flyers</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{stats.totalFlyers}</span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Total Content</span>
                  <span className="text-lg font-bold text-gray-900">
                    {stats.totalEvents + stats.totalGallery + stats.totalFlyers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
