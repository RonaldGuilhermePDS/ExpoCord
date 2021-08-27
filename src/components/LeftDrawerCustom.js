import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Avatar from './Avatar';
import Channel from './Channel';
import Server from './Server';

/* Constante para Estruturar a StatusBar */
const statusHeight = StatusBar.currentHeight;

export default function DrawerCustom(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.servers}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scroll}>
            <View style={styles.servers_icons}>
              <MaterialIcons name="message" size={26} color="white" />
            </View>
            <View style={styles.divider} />
            <Server isNew imagem={require('../assets/Perfis/LUCI.png')} />
            <Server imagem={require('../assets/Servidores/Blue-Phoenix.png')} />
            <Server
              isNew
              imagem={require('../assets/Servidores/Br-Community.png')}
            />
            <Server
              imagem={require('../assets/Servidores/BurnOut-Brasil.png')}
            />
            <Server
              isNew
              imagem={require('../assets/Servidores/Data-Science-ML-AI.png')}
            />
            <Server imagem={require('../assets/Servidores/EngennyS.png')} />
            <Server isNew imagem={require('../assets/Servidores/OneUX.png')} />
            <View style={styles.servers_icons}>
              <MaterialIcons name="add" size={26} color="white" />
            </View>
          </ScrollView>
        </View>

        <View style={styles.channels}>
          <View style={styles.channels_header}>
            <Text style={styles.server_tittle}>🍀LUCI Irish Pub🍀</Text>
            <MaterialIcons name="more-vert" size={24} color="white" />
          </View>

          <View style={styles.channels_body}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.channels_category}>
                <Text style={styles.category_title}>GLOBAL</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="📎│bem-vindo" />
                <Channel name="📎│regras" />
                <Channel name="📎│avisos" />
                <Channel name="📎│sugestões" />
                <Channel name="📎│parceiros" />
                <Channel name="🛠│cargos" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>GERAIS</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="📖│chat" selected />
                <Channel name="🦍│memes" />
                <Channel name="🖥│desktop" />
                <Channel name="📢│divulgações" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>IA e Computação</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="❓│duvidas-programação" />
                <Channel name="🔱│challenges" />
                <Channel name="❕│solutions" />
                <Channel name="📜│show_your_code" />
                <Channel name="📁│material-de-estudo" />
                <Channel name="🗄│github" />
                <Channel name="👾│bots" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>LUCI</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="🖇│diagramas" />
                <Channel name="🕹│comandos" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>ORIUS</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="🎖│pvp" />
                <Channel name="💹│exp-grind" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>LOGS</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="⚙│gitlog" />
              </View>

              <View style={styles.channels_category}>
                <Text style={styles.category_title}>VOICE</Text>
                <MaterialIcons name="add" size={22} color="grey" />
              </View>

              <View style={styles.list_channels}>
                <Channel name="🖱│music" />
                <Channel name="🖱│mudos" />
                <Channel name="🖱│play" />
                <Channel name="㊙ │ privado" />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.userInfo}>
          <View style={{ width: 75, alignItems: 'center' }}>
            <Avatar
              imagem={require('../assets/Perfis/Perfil-Pessoal.png')}
              alertOnline
              isOnline
            />
          </View>

          <View>
            <Text style={{ color: 'white' }}>Árgon</Text>
            <Text style={{ color: 'grey', fontSize: 14 }}>#1544</Text>
          </View>
        </View>

        <View style={styles.footer_icons}>
          <MaterialIcons name="mic" size={24} color="grey" />
          <MaterialIcons name="headset" size={20} color="grey" />
          <MaterialIcons name="settings" size={20} color="grey" />
        </View>
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  servers: {
    backgroundColor: '#202225',
    padding: 0,
    paddingTop: statusHeight,
    width: 75,
  },
  servers_icons: {
    alignItems: 'center',
    backgroundColor: '#36393f',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 8,
    width: 50,
  },
  scroll: {
    alignItems: 'center',
    padding: 0,
    width: 75,
  },
  divider: {
    backgroundColor: '#292B2F',
    height: 4,
    width: '60%',
  },
  server_tittle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  channels: {
    backgroundColor: '#292B2F',
    flex: 1,
    paddingTop: statusHeight,
    width: 150,
  },
  channels_header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  channels_body: {
    backgroundColor: '#2f3136',
    flex: 1,
    padding: 10,
  },
  channels_category: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 12,
  },
  category_title: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#292b2f',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer_icons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
});
