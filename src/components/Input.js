import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Input({ addNewMessage }) {
  const [input, setInput] = useState('');

  function submit() {
    if (!input) return;
    setInput('');
    addNewMessage(input);
  }

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="image" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="gift" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.view_input}>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Conversar em | #GERAL"
            placeholderTextColor="grey"
            value={input}
            onChangeText={(text) => setInput(text)}
          />

          <View style={styles.icons}>
            <TouchableOpacity>
              <MaterialIcons name="insert-emoticon" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity onPress={submit}>
            <MaterialIcons name="send" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36393F',
    flexDirection: 'row',
    padding: 2.5,
  },
  icons: {
    backgroundColor: '#2F3136',
    borderRadius: 24,
    margin: 4,
    padding: 8,
  },
  view_input: {
    backgroundColor: '#2F3136',
    borderRadius: 24,
    flexDirection: 'row',
    marginRight: 4,
  },
  input: {
    color: '#fff',
    margin: 4,
    padding: 6,
  },
});
