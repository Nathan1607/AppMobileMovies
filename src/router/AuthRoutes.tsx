import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={Auth}options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
