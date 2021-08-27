import React from 'react';
import {
  View,
  Text,
  SectionList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Avatar from './Avatar';

/* Constante para Estruturar a StatusBar */
const statusHeight = StatusBar.currentHeight;

const sectionListData = [
  {
    id: 1,
    topic: 'PRINCESA - 1',
    data: [
      {
        id: 1,
        name: 'LUCI',
        isOnline: true,
      },
    ],
  },
  {
    id: 2,
    topic: 'DEVELOPER - 1',
    data: [
      {
        id: 1,
        name: 'Cruella Devel',
        isOnline: true,
      },
    ],
  },
  {
    id: 3,
    topic: 'DEVELOPER - 2',
    data: [
      {
        id: 1,
        name: 'Árgon',
        isOnline: true,
      },
    ],
  },
];

export default function RightDrawerCustom() {
  return (
    <View style={styles.container}>
      <View style={styles.topic}>
        <Text style={styles.channel_topic}># 📖│chat</Text>
      </View>

      <View
        style={{
          backgroundColor: '#2F3136',
          marginTop: 2,
        }}>
        <View
          style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
          <TouchableOpacity style={styles.icons}>
            <MaterialIcons name="search" size={26} color="white" />
            <Text style={styles.text}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
            <MaterialIcons name="list" size={26} color="white" />
            <Text style={styles.text}>Fixadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
            <MaterialIcons name="notifications" size={26} color="white" />
            <Text style={styles.text}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
            <MaterialIcons name="settings" size={26} color="white" />
            <Text style={styles.text}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SectionList
        style={styles.container_topics}
        sections={sectionListData}
        renderItem={({ item, index }) => (
          <View key={item.id} style={styles.container_item}>
            <View style={styles.box_avatar}>
              <Avatar
                imagem={require('../assets/Profile.png')}
                alertOnline
                isOnline={item.isOnline}
              />
            </View>

            <Text style={{ color: 'white' }}>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.topic_name}>
            <Text style={{ color: 'grey', fontSize: 14, fontWeight: 'bold' }}>
              {section.topic}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36393F',
    flex: 1,
    paddingTop: statusHeight,
  },
  topic: {
    backgroundColor: '#2F3136',
    padding: 14,
  },
  channel_topic: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textTransform: 'uppercase',
  },
  container_topics: {
    paddingHorizontal: 10,
  },
  topic_name: {
    height: 50,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  container_item: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 8,
  },
  box_avatar: {
    width: 50,
  },
  icons: {
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 4,
  },
  text: {
    color: '#fff',
    fontSize: 13,
  },
});
