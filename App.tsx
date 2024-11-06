import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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