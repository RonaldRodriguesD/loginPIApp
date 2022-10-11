import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const style = StyleSheet.create({
  fundoLogin:{
    flex: 1
  },

  logoLogin:{
    width: 300,
    height: 270,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 75
  },

  mainLogin:{
    flex: 1,
    backgroundColor: '#f2adb9',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },

  tituloLogin:{
    fontSize: 54,
    fontWeight: 'bold',
    color: '#6b3c2a',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },

  inputLogin:{
    alignSelf: 'center',
    height: 50,
    width: 430,
    borderRadius: 30,
    backgroundColor: '#98572e',
    opacity: 0.5
  },

  textoLogin:{
    fontSize: 26,
    marginLeft: 55,
    marginTop: 35
  },

  buttonLogin:{
    alignSelf: 'center',
    backgroundColor: '#6b3c2a',
    width: '40%',
    height: 50,
    borderRadius: 30,
    marginTop: 50

  },

  textoButton:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2adb9'
  }

});

export default style;