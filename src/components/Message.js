import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Avatar from './Avatar';

export default function Message({ name, text, data, color }) {
  return (
    <View style={styles.message}>
      <View style={styles.avatar_box}>
        <Avatar imagem={require('../assets/Profile.png')} alertOnline={false} />
      </View>

      <View style={styles.container}>
        <View style={styles.user_info}>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.hour}>{data}</Text>
        </View>

        <Text style={styles.message_body}>{text}</Text>
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingRight: 10,
  },
  avatar_box: {
    alignItems: 'center',
    marginTop: 2,
    padding: 6,
    width: 65,
  },
  user_info: {
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  username: {
    color: '#ff4444',
    fontSize: 16,
    marginRight: 8,
  },
  hour: {
    color: 'grey',
    fontSize: 12,
  },
  message_body: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
});
