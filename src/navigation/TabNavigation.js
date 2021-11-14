import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Report from '../screens/Report';
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
      <Tab.Screen 
        name="Отчет" 
        component={Report} 
      />
      <Tab.Screen 
        name="Профиль" 
        component={Profile} 
      />
    </Tab.Navigator>
  );
}