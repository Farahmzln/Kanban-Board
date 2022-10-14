import Dexie from 'dexie';

// Database
const db = new Dexie('TaskDB');

// Table
// 1. toDo
// 2. InProgress
// 3. completed
db.version(1).stores({
  toDo: '++id, title, desc, dueDate',
  inProgress: '++id, title, desc, dueDate',
  completed: '++id, title, desc, dueDate'
});

export default db;