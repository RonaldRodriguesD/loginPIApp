import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import Styles from './components/Styles'


export default function App() {
  return (
    <ImageBackground
    source={require('./assets/BoloseDocesFundo.jpg')}
    style={Styles.fundoLogin}
    >
      <Image 
        source={require('./assets/CasaBolosLogo.png')}
        style={Styles.logoLogin}
      />
      <View style={Styles.mainLogin}>
        <Text style={Styles.tituloLogin}>Login</Text>
        <Text style={Styles.textoLogin}>Usuário</Text>
        <TextInput style={Styles.inputLogin} />
        <Text style={Styles.textoLogin}>Senha</Text>
        <TextInput style={Styles.inputLogin} />
        <TouchableHighlight
          activeOpacity = {0.1}
          underlayColor= '#f2adb9'
          onPress = {()=>{alert('Entrando...')}}
          style={Styles.buttonLogin}
        >
          <Text style={Styles.textoButton}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}


