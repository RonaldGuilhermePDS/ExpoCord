import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import LeftDrawerCustom from '../components/LeftDrawerCustom';
import MainRoute from './MainRoute';

/* Criar Drawer */
const Drawer = createDrawerNavigator();

export default function LeftDrawer() {
  return (
    <Drawer.Navigator
      /* Abertura do Drawer da Esquerda */
      drawerStyle={{
        width: 305,
      }}
      drawerContent={(props) => <LeftDrawerCustom {...props} />}>
      <Drawer.Screen name="MainRoute" component={MainRoute} />
    </Drawer.Navigator>
  );
}
