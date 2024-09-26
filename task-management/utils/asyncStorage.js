import { AsyncStorage } from 'react-native';

const asyncStorage = {
  async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.error(error);
    }
  },

  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
};

export default asyncStorage;