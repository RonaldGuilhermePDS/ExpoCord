import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Channel({ name, selected }) {
  return (
    <View
      style={[
        styles.channel_info,
        { backgroundColor: selected ? '#383D42' : 'transparent' },
      ]}>
      <View style={styles.title_channel}>
        <FontAwesome5 name="hashtag" size={20} color="grey" />
        <Text style={styles.name_channel}>{name}</Text>
      </View>

      <View style={styles.icons_channel}>
        <MaterialIcons name="person-add" size={20} color="grey" />
        <View style={{ margin: 2 }} />
        <MaterialIcons name="settings" size={20} color="grey" />
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  channel_info: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 8,
    paddingRight: 5,
  },
  title_channel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name_channel: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    textTransform: 'uppercase',
  },
  icons_channel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
