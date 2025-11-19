import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import HomePage from '../pages/home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false, animation: 'none' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
