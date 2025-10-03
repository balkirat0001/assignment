import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Plus, Search, Filter, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: ''
  });
  const [, setPagination] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Fetch tasks
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      
      if (filters.status !== 'all') queryParams.append('status', filters.status);
      if (filters.priority !== 'all') queryParams.append('priority', filters.priority);
      if (filters.search) queryParams.append('search', filters.search);

      const response = await axios.get(`/api/tasks?${queryParams.toString()}`);
      setTasks(response.data.tasks);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Create or update task
  const onSubmit = async (data) => {
    try {
      console.log('📝 Form submitted with data:', data);
      console.log('🔄 Editing task:', editingTask);
      
      if (editingTask) {
        console.log('📤 Updating task with ID:', editingTask._id);
        await axios.put(`/api/tasks/${editingTask._id}`, data);
        toast.success('Task updated successfully');
      } else {
        console.log('📤 Creating new task...');
        const response = await axios.post('/api/tasks', data);
        console.log('✅ Task created:', response.data);
        toast.success('Task created successfully');
      }
      
      fetchTasks();
      setShowCreateModal(false);
      setEditingTask(null);
      reset();
    } catch (error) {
      console.error('❌ Error saving task:', error);
      console.error('❌ Error response:', error.response?.data);
      console.error('❌ Error status:', error.response?.status);
      toast.error('Failed to save task');
    }
  };

  // Delete task
  const deleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      toast.success('Task deleted successfully');
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  // Toggle task status
  const toggleTaskStatus = async (task) => {
    try {
      const newStatus = task.status === 'completed' ? 'pending' : 'completed';
      await axios.put(`/api/tasks/${task._id}`, { status: newStatus });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
      toast.error('Failed to update task status');
    }
  };

  // Start editing
  const startEdit = (task) => {
    setEditingTask(task);
    reset({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate ? format(new Date(task.dueDate), 'yyyy-MM-dd') : '',
      tags: task.tags.join(', ')
    });
    setShowCreateModal(true);
  };

  const getStatusBadge = (status) => {
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
  };

  const getPriorityBadge = (priority) => {
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
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">Manage your tasks and stay productive</p>
        </div>
        <button
          onClick={() => {
            setEditingTask(null);
            reset();
            setShowCreateModal(true);
          }}
          className="btn-primary btn-md"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="input pl-10"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            <select
              className="input"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <select
              className="input"
              value={filters.priority}
              onChange={(e) => setFilters({...filters, priority: e.target.value})}
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => setFilters({ status: 'all', priority: 'all', search: '' })}
              className="btn-outline btn-md"
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="card">
        <div className="card-content">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          ) : tasks.length > 0 ? (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task._id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleTaskStatus(task)}
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            task.status === 'completed'
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {task.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                        </button>
                        <div className="flex-1">
                          <h3 className={`text-sm font-medium ${
                            task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'
                          }`}>
                            {task.title}
                          </h3>
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
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => startEdit(task)}
                        className="p-2 text-gray-400 hover:text-blue-600"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="p-2 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Plus className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
              <p className="text-gray-500 mb-6">Get started by creating your first task.</p>
              <button
                onClick={() => {
                  setEditingTask(null);
                  reset();
                  setShowCreateModal(true);
                }}
                className="btn-primary btn-md"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Task
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {editingTask ? 'Edit Task' : 'Create New Task'}
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="label">Title</label>
                  <input
                    {...register('title', { required: 'Title is required' })}
                    type="text"
                    className="input mt-1"
                    placeholder="Enter task title"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Description</label>
                  <textarea
                    {...register('description')}
                    className="input mt-1 min-h-[80px]"
                    placeholder="Enter task description (optional)"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Priority</label>
                    <select {...register('priority')} className="input mt-1">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">Status</label>
                    <select {...register('status')} className="input mt-1">
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">Due Date</label>
                  <input
                    {...register('dueDate')}
                    type="date"
                    className="input mt-1"
                  />
                </div>

                <div>
                  <label className="label">Tags</label>
                  <input
                    {...register('tags')}
                    type="text"
                    className="input mt-1"
                    placeholder="Enter tags separated by commas"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate multiple tags with commas
                  </p>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingTask(null);
                      reset();
                    }}
                    className="btn-outline btn-md"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary btn-md">
                    {editingTask ? 'Update Task' : 'Create Task'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;