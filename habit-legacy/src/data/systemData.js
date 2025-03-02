// Initial data
const quotes = [
  "Believe you can and you're halfway there.",
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  'Do what you can, with what you have, where you are.',
  'Your only limit is your mind.',
  'The way to get started is to quit talking and begin doing.',
  'Difficulties in life are intended to make us better, not bitter.',
  'Dream big, work hard, stay focused, and surround yourself with good people.',
  'Act as if what you do makes a difference. It does.',
  'You don’t have to be great to start, but you have to start to be great.',
  'Every day may not be good, but there is something good in every day.',
];

const initialUsers = {
  user1: {
    name: 'Min',
    profilePic: 'icon/chicken.png',
    currentXp: 500,
    level: 2,
    streak: 2,
  },
  user2: {
    name: 'Jane',
    profilePic: 'icon/eagle.jpeg',
    currentXp: 990,
    level: 32,
    streak: 12,
  },

  user3: {
    name: 'Ben D',
    profilePic: 'icon/Behemoth.jpg',
    currentXp: 1100,
    level: 40,
    streak: 12,
  },

  user4: {
    name: 'Mac B',
    profilePic: 'icon/Toire.jpeg',
    currentXp: 1600,
    level: 55,
    streak: 30,
  },

  user5: {
    name: 'Jack',
    profilePic: 'icon/robot.jpeg',
    currentXp: 2000,
    level: 60,
    streak: 30,
  },

  user6: {
    name: 'Jill',
    profilePic: 'icon/shark.jpeg',
    currentXp: 5000,
    level: 100,
    streak: 50,
  },
  user7: {
    name: 'Beck',
    profilePic: 'icon/sword&shield.jpeg',
    currentXp: 5000,
    level: 100,
    streak: 50,
  },
  user8: {
    name: 'Buck',
    profilePic: 'icon/wolf.jpeg',
    currentXp: 5000,
    level: 100,
    streak: 50,
  },
};

// Simulated delay for async operations (ms)
const DELAY = 300;

// LocalStorage keys
const USERS_KEY = 'habit_tracker_users';

// Helper to simulate async operations
const asyncOperation = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DELAY);
  });
};

// Initialize data from localStorage or use defaults
const initializeData = () => {
  try {
    // Load users
    const storedUsers = localStorage.getItem(USERS_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : initialUsers;
    
    return { users };
  } catch (error) {
    console.error('Error initializing data:', error);
    return { users: initialUsers };
  }
};

// Database state
let { users } = initializeData();

// Save data to localStorage
const persistData = () => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error persisting data:', error);
  }
};

// User CRUD operations
const UserDB = {
  // Get all users
  getAll: () => asyncOperation({ ...users }),
  
  // Get user by ID
  getById: (userId) => {
    if (!users[userId]) {
      return asyncOperation({ error: 'User not found' });
    }
    return asyncOperation({ ...users[userId] });
  },
  
  // Create new user
  create: (userData) => {
    const userId = `user${Date.now()}`;
    users[userId] = { ...userData };
    persistData();
    return asyncOperation({ id: userId, ...userData });
  },
  
  // Update user
  update: (userId, userData) => {
    if (!users[userId]) {
      return asyncOperation({ error: 'User not found' });
    }
    
    users[userId] = { ...users[userId], ...userData };
    persistData();
    return asyncOperation({ ...users[userId] });
  },
  
  // Delete user
  delete: (userId) => {
    if (!users[userId]) {
      return asyncOperation({ error: 'User not found' });
    }
    
    const deletedUser = { ...users[userId] };
    delete users[userId];
    persistData();
    return asyncOperation({ success: true, deletedUser });
  },
  
  // Update user streak
  updateStreak: (userId, increment = 1) => {
    if (!users[userId]) {
      return asyncOperation({ error: 'User not found' });
    }
    
    users[userId].streak += increment;
    persistData();
    return asyncOperation({ streak: users[userId].streak });
  },
  
  // Add XP to user
  addXP: (userId, xp) => {
    if (!users[userId]) {
      return asyncOperation({ error: 'User not found' });
    }
    
    users[userId].currentXp += xp;
    
    // Level up logic (simple example)
    const newLevel = Math.floor(users[userId].currentXp / 500) + 1;
    if (newLevel > users[userId].level) {
      users[userId].level = newLevel;
    }
    
    persistData();
    return asyncOperation({ 
      currentXp: users[userId].currentXp,
      level: users[userId].level,
      levelUp: newLevel > users[userId].level
    });
  },
  
  // Reset database to initial state
  reset: () => {
    users = { ...initialUsers };
    persistData();
    return asyncOperation({ success: true });
  }
};

// Export databases and quotes directly
export { UserDB, quotes };
