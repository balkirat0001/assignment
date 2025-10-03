import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { CheckSquare, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

// Memoized Stats Card Component
const StatsCard = React.memo(({ icon: Icon, title, value, color }) => (
  <div className="card">
    <div className="card-content">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className={`h-8 w-8 ${color}`} />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  </div>
));

StatsCard.displayName = 'StatsCard';

// Memoized Task Card Component
const TaskCard = React.memo(({ task, getStatusBadge, getPriorityBadge }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
    <div className="flex-1">
      <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
      {task.description && (
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      )}
      <div className="flex items-center space-x-2 mt-2">
        {getStatusBadge(task.status)}
        {getPriorityBadge(task.priority)}
        {task.dueDate && (
          <span className="text-xs text-gray-500">
            Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
          </span>
        )}
      </div>
    </div>
  </div>
));

TaskCard.displayName = 'TaskCard';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [recentTasks, setRecentTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch both in parallel for better performance
        const [statsResponse, tasksResponse] = await Promise.all([
          api.get('/api/tasks/stats/overview'),
          api.get('/api/tasks?limit=5')
        ]);

        setStats(statsResponse.data);
        setRecentTasks(tasksResponse.data.tasks);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Memoize badge functions to prevent recreation
  const getStatusBadge = useMemo(() => (status) => {
    switch (status) {
      case 'completed':
        return <span className="badge-success">Completed</span>;
      case 'in-progress':
        return <span className="badge-warning">In Progress</span>;
      case 'pending':
        return <span className="badge-info">Pending</span>;
      default:
        return <span className="badge-secondary">{status}</span>;
    }
  }, []);

  const getPriorityBadge = useMemo(() => (priority) => {
    switch (priority) {
      case 'high':
        return <span className="badge-danger">High</span>;
      case 'medium':
        return <span className="badge-warning">Medium</span>;
      case 'low':
        return <span className="badge-success">Low</span>;
      default:
        return <span className="badge-secondary">{priority}</span>;
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}! 
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your tasks today.
        </p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            icon={CheckSquare}
            title="Total Tasks"
            value={stats.totalTasks}
            color="text-blue-600"
          />
          <StatsCard 
            icon={Clock}
            title="Completed"
            value={stats.statusCounts.completed}
            color="text-green-600"
          />
          <StatsCard 
            icon={AlertCircle}
            title="Overdue"
            value={stats.overdueTasks}
            color="text-red-600"
          />
          <StatsCard 
            icon={TrendingUp}
            title="Completion Rate"
            value={`${stats.completionRate}%`}
            color="text-purple-600"
          />
        </div>
      )}

      {/* Recent Tasks */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Tasks</h3>
          <p className="card-description">Your latest task activities</p>
        </div>
        <div className="card-content">
          {recentTasks.length > 0 ? (
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  getStatusBadge={getStatusBadge}
                  getPriorityBadge={getPriorityBadge}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <CheckSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating your first task.</p>
              <div className="mt-6">
                <a
                  href="/tasks"
                  className="btn-primary btn-md"
                >
                  Create Task
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;