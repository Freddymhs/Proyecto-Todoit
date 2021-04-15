import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { marginBottom, justifySelf, backgroundColor } from 'styled-system';
import {
  styles, styleImages, styleText, styleBtn, ButtonContainer, ButtonText,
} from './aplicationStyles';

export default function App() {
  return (

    <View style={styles.body}>

      <View style={styleImages.logowithShadow}>
        <Image source={require('./assets/logoBox.png')} style={styleImages.logowithShadow}>
        </Image>
      </View>

      <View>
        <Text style={styleText.title} >
          TO DO IT
          </Text>

        <Text style={styleText.subtitle}>
          makers
          </Text>
      </View>

      <View >
        <TouchableOpacity style={styleBtn.btn}>
          <Text style={styleBtn.textBtn}>COMENZAR</Text>
        </TouchableOpacity>

        <Text style={styleText.readme}>
          Tiene un cuenta?
           <Text style={styleText.readmenow}>Iniciar session</Text>
        </Text>

      </View>

      <StatusBar style="auto" />
    </View >
  );
}
