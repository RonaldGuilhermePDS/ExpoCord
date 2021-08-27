import React from 'react';
import { StatusBar } from 'react-native';

import Route from './src/routes/Routes';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="#2F3136" />

      <Route />
    </>
  );
}
