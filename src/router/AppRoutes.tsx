import React from 'react';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Wishlist from '../screens/Wishlist';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FFC107',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ color, size }) => {
          let iconName: IconDefinition = faHome;

          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Search') {
            iconName = faSearch;
          } else if (route.name === 'Wishlist') {
            iconName = faHeart;
          } else if (route.name === 'Profile') {
            iconName = faUser;
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
