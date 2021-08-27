import React, { useState, useRef } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import Message from '../components/Message';

const messagesText = [
  {
    id: 1,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 16:32',
  },
  {
    id: 2,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 16:32',
  },
  {
    id: 3,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 16:34',
  },
  {
    id: 4,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 16:34',
  },
  {
    id: 5,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:00',
  },
  {
    id: 6,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:00',
  },
  {
    id: 7,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:02',
  },
  {
    id: 8,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:02',
  },
  {
    id: 9,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:06',
  },
  {
    id: 10,
    text: 'Hello World!',
    name: 'Árgon',
    data: 'Hoje 17:06',
  },
];

/* Constante para estruturar a Status Bar */
const statusHeight = StatusBar.currentHeight;

export default function Home({ navigation }) {
  /* Chat */
  const [chat, setChat] = useState(messagesText);

  /* Length das Mensagens */
  const [length, setLength] = useState(messagesText.length);

  /* REF do Flatlist */
  const flatListRef = useRef(null);

  /* Função - Adicionar nova Mensagem */
  function addNewMessage(input) {
    const newMess = chat;
    const newMessage = {
      id: chat.length + 1,
      text: input,
    };

    newMess.push(newMessage);

    setChat(newMess);

    setLength(chat.length);
  }

  /* Renderizar o Item na Tela */
  const renderItem = ({ item }) => (
    <Message name={item.name} data={item.data} text={item.text} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title_header}>
          <TouchableHighlight
            underlayColor="grey"
            style={styles.button_menu}
            onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={26} color="white" />
          </TouchableHighlight>

          <FontAwesome5 name="hashtag" size={22} color="white" />
          <Text style={styles.title_name}>GERAL</Text>
        </View>

        <View style={styles.icons_header}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="group" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.messages}>
        <FlatList
          ref={flatListRef}
          data={chat}
          extraData={length}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
        />
      </View>

      <Input addNewMessage={addNewMessage} />
    </View>
  );
}

/* 
      Cores do Discord(APP):
      Primária: #2F3136
      Secundária:#36393F
      Obs: As cores principais não são as mesmas do Discord(WEB)!
    */

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3136',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: statusHeight,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#2F3136',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  title_header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button_menu: {
    alignItems: 'center',
    backgroundColor: '#2F3136',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 40,
  },
  title_name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  icons_header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
  },
  messages: {
    backgroundColor: '#36393F',
    flex: 1,
  },
});
