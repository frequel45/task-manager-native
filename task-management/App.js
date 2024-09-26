import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;