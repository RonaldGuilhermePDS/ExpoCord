import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

/* Criar Stack do Navigator */
const Stack = createStackNavigator();

export default function MainRoute({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
