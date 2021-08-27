import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

/* Aqui estão todas as configurações dos Avatares */
export default function Avatar({ isOnline, alertOnline, imagem }) {
  return (
    <View style={styles.avatar}>
      <Image
        source={imagem}
        style={{
          width: 36,
          height: 36,
          borderWidth: 0.1,
          borderColor: '#36393F',
          borderRadius: 18,
          backgroundColor: '#36393F',
        }}
      />
      {alertOnline && (
        <View
          style={[styles.ball, { backgroundColor: isOnline ? 'green' : 'red' }]}
        />
      )}
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderColor: '#36393F',
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    width: 40,
  },
  ball: {
    borderColor: '#2F3136',
    borderRadius: 10,
    borderWidth: 1,
    bottom: -2,
    height: 14,
    position: 'absolute',
    right: -2,
    width: 14,
  },
});
