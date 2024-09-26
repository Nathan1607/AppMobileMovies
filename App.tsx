import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Auth from './src/screens/Auth';
import { AuthProvider } from './src/providers/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

/*
Création d'un dossier Router
Créer un fichier index.tsx dans le dossier Router
Créer plein de fichier pour chaque Stack de Route
Voir ce site : https://reactnavigation.org/docs/auth-flow
*/