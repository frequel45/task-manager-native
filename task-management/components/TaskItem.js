import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';

const TaskItem = ({ task }) => {
  const navigation = useNavigation();

  const handleDeleteTask = async () => {
    try {
      await api.deleteTask(task.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTask}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  deleteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
  },
});

export default TaskItem;