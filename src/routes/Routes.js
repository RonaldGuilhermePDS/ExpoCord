import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/* Screens */ }
import Home from '../screens/Home';

{/* Drawner da Direita */ }
import RightDrawer from './RightDrawer';

{/* Criar Stack do Navigator */ }
const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen name="RightDrawer" component={RightDrawer} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
