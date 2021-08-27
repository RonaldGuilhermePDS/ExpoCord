import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Server({ isNew, imagem }) {
  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.box} />
      {isNew && <View style={styles.isnew} />}
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    position: 'relative',
    zIndex: 100,
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#36393f',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  isnew: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 7,
    left: -15,
    position: 'absolute',
    top: '45%',
    width: 7,
  },
});
