import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Auth from './src/screens/Auth';
import { AuthProvider } from './src/providers/AuthContext';
import Routes from './src/router';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}