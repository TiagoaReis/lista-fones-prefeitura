import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/icon.png'

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
    // <View style={styles.container}>
    //    {/* <Image source={logo} style={styles.logo} /> */}
    //   <Text style={styles.titulo}>Lista Telefones</Text>
    //   <Text style={styles.texto}>Prefeitura Municipal de Passos - MG</Text>
    // </View>
  );
}

