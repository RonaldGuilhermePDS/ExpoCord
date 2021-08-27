import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import RightDrawerCustom from '../components/RightDrawerCustom';
import LeftDrawer from './LeftDrawer';

/* Criar Drawer */
const Drawer = createDrawerNavigator();

export default function RightDrawer() {
  return (
    <Drawer.Navigator
      /* Abertura do Drawer da Direita */
      drawerStyle={{
        width: 305,
      }}
      drawerPosition="right"
      drawerContent={(props) => <RightDrawerCustom {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
}
