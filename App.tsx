import * as React from 'react';
import { AuthProvider } from './src/providers/AuthContext';
import Routes from './src/router';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}