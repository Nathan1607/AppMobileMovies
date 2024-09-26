import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import CounterProvider from '../providers/CounterContext';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Auth from '../screens/Auth';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CounterProvider>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName: IconDefinition = faHome;

              if (route.name === 'HomeStack') {
                iconName = faHome;
              } else if (route.name === 'SettingsStack') {
                iconName = faCog;
              }

              return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
            },
          })}>
            <Tab.Screen name="Auth" component={Auth} />
            <Tab.Screen  name="HomeStack" component={Home} />
            <Tab.Screen name="SettingsStack" component={Setting} />
        </Tab.Navigator>
      </CounterProvider>
    </NavigationContainer>
  );
}