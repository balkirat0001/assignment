// Demo mode for testing without database
let demoUsers = [];  
let demoTasksArray = [];
let userIdCounter = 1;
let taskIdCounter = 1;

const bcrypt = require('bcryptjs');

const demoAuth = {
  // Register demo user
  registerUser: async (userData) => {
    const { name, email, password } = userData;
    
    // Check if user exists
    const existingUser = demoUsers.find(user => user.email === email);
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = {
      _id: userIdCounter++,
      name,
      email,
      password: hashedPassword,
      role: 'user',
      isActive: true,
      createdAt: new Date(),
      lastLogin: null
    };

    demoUsers.push(user);
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  // Login demo user
  loginUser: async (email, password) => {
    const user = demoUsers.find(user => user.email === email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    if (!user.isActive) {
      throw new Error('Account is deactivated');
    }

    // Update last login
    user.lastLogin = new Date();

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  // Get user by ID
  getUserById: (userId) => {
    const user = demoUsers.find(user => user._id == userId);
    if (!user) return null;
    
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  // Update user profile
  updateUserProfile: (userId, updateData) => {
    const userIndex = demoUsers.findIndex(user => user._id == userId);
    if (userIndex === -1) throw new Error('User not found');

    const user = demoUsers[userIndex];
    Object.assign(user, updateData);
    
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  // Change password
  changePassword: async (userId, currentPassword, newPassword) => {
    const user = demoUsers.find(user => user._id == userId);
    if (!user) throw new Error('User not found');

    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      throw new Error('Current password is incorrect');
    }

    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(newPassword, salt);
  }
};

const demoTasks = {
  // Get tasks for user
  getTasksForUser: (userId, filters = {}) => {
    let userTasks = demoTasksArray.filter(task => task.user == userId);
    
    // Apply filters
    if (filters.status && filters.status !== 'all') {
      userTasks = userTasks.filter(task => task.status === filters.status);
    }
    
    if (filters.priority && filters.priority !== 'all') {
      userTasks = userTasks.filter(task => task.priority === filters.priority);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      userTasks = userTasks.filter(task => 
        task.title.toLowerCase().includes(searchLower) ||
        (task.description && task.description.toLowerCase().includes(searchLower))
      );
    }
    
    return userTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  // Create task
  createTask: (userId, taskData) => {
    const task = {
      _id: taskIdCounter++,
      ...taskData,
      user: userId,
      tags: taskData.tags || [],
      completed: false,
      completedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (task.status === 'completed') {
      task.completed = true;
      task.completedAt = new Date();
    }

    demoTasksArray.push(task);
    return task;
  },

  // Get task by ID
  getTaskById: (taskId, userId) => {
    return demoTasksArray.find(task => task._id == taskId && task.user == userId);
  },

  // Update task
  updateTask: (userId, taskId, updateData) => {
    const taskIndex = demoTasksArray.findIndex(task => task._id == taskId && task.user == userId);
    if (taskIndex === -1) return null;

    const task = demoTasksArray[taskIndex];
    Object.assign(task, updateData, { updatedAt: new Date() });

    // Handle status changes
    if (updateData.status === 'completed' && !task.completedAt) {
      task.completed = true;
      task.completedAt = new Date();
    } else if (updateData.status !== 'completed') {
      task.completed = false;
      task.completedAt = null;
    }

    return task;
  },

  // Delete task
  deleteTask: (userId, taskId) => {
    const taskIndex = demoTasksArray.findIndex(task => task._id == taskId && task.user == userId);
    if (taskIndex === -1) return false;

    demoTasksArray.splice(taskIndex, 1);
    return true;
  },

  // Get task statistics
  getTaskStats: (userId) => {
    const userTasks = demoTasksArray.filter(task => task.user == userId);
    const totalTasks = userTasks.length;
    
    const statusCounts = {
      pending: 0,
      'in-progress': 0,
      completed: 0
    };

    userTasks.forEach(task => {
      statusCounts[task.status] = (statusCounts[task.status] || 0) + 1;
    });

    const overdueTasks = userTasks.filter(task => 
      task.dueDate && 
      new Date(task.dueDate) < new Date() && 
      task.status !== 'completed'
    ).length;

    const completionRate = totalTasks > 0 ? Math.round((statusCounts.completed / totalTasks) * 100) : 0;

    return {
      totalTasks,
      overdueTasks,
      statusCounts,
      completionRate
    };
  }
};

module.exports = { demoAuth, demoTasks };