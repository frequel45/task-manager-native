import { AsyncStorage } from 'react-native';

const api = {
  async login(email, password) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const users = await AsyncStorage.getItem('users');
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      return { success: true, user };
    } else {
      return { success: false };
    }
  },

  async register(name, email, password) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const users = await AsyncStorage.getItem('users');
    users.push({ name, email, password });
    await AsyncStorage.setItem('users', users);
    return { success: true };
  },

  async getTasks() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tasks = await AsyncStorage.getItem('tasks');
    return { data: tasks };
  },

  async addTask(task) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tasks = await AsyncStorage.getItem('tasks');
    tasks.push(task);
    await AsyncStorage.setItem('tasks', tasks);
    return { success: true };
  },

  async deleteTask(id) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tasks = await AsyncStorage.getItem('tasks');
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      await AsyncStorage.setItem('tasks', tasks);
    }
  },
};

export default api;