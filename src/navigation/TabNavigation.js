import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import TabBarItem from '../components/TabBarItem';
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
        keyboardHidesTabBar: true,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({focused}) => (
                <TabBarItem
                  label="Главная"
                  focused={focused}
                  iconSrc={require("../../assets/home-icon.png")}
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Tasks" 
        component={FirstScreenNavigator} 
        options={{
          tabBarIcon: ({focused}) => (
              <TabBarItem
                label="Задачи"
                focused={focused}
                iconSrc={require("../../assets/tasks-icon.png")}
              />
          )
        }} 
      />
      <Tab.Screen 
        name="Report" 
        component={Report}
        options={{
          tabBarIcon: ({focused}) => (
              <TabBarItem
                label="Отчет"
                focused={focused}
                iconSrc={require("../../assets/report-icon.png")}
              />
          )
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({focused}) => (
              <TabBarItem
                label="Профиль"
                focused={focused}
                iconSrc={require("../../assets/profile-icon.png")}
              />
          )
        }}
      />
    </Tab.Navigator>
  );
}