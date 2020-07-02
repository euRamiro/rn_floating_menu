import React from 'react';
import {View, Text} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icones from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  const nagevarPara = useNavigation();
  function handleNavegarOutraPagina() {
    nagevarPara.navigate('OutraPagina');
  }

  const actions = [
    {
      text: 'Salvar',
      icon: <Icones name="floppy-o" size={18} color="#FFF" />,
      name: 'bt_salvar',
      position: 2,
    },
    {
      text: 'página 2',
      icon: <Icones name="paper-plane" size={18} color="#FFF" />,
      name: 'bt_pagina2',
      position: 1,
    },
    {
      text: 'remover',
      icon: <Icones name="trash" size={18} color="#FFF" />,
      name: 'bt_remover',
      position: 3,
    },
    {
      text: 'Video talvez',
      icon: <Icones name="video-camera" size={18} color="#FFF" />,
      name: 'bt_video',
      position: 4,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tituloHeader}>home rodando...</Text>
        </View>
      </View>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
          if (name === 'bt_pagina2') {
            handleNavegarOutraPagina();
          }
        }}
        animated={false}
        floatingIcon={<Icones name="home" size={18} color="#FFF" />}
      />
    </>
  );
};

export default Home;
