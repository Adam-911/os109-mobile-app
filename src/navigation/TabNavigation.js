import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../screens/Home';
import Tasks from '../screens/Tasks';
import { FirstScreenNavigator } from './CustomNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen 
        name="Главная" 
        component={Home} 
      />
      <Tab.Screen 
        name="Задачи" 
        component={FirstScreenNavigator} 
      />
    </Tab.Navigator>
  );
}