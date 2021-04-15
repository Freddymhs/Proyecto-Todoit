import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />

      <Image
        style={{ height: 100, width: 100 }}
        source={require('./assets/logo.png')}
      />


      <View style={styles.testeando}>
        <Text> 1231</Text>
      </View>

      <Text style={{
        fontSize: 65, color: colors.secondary, fontFamily: 'monospace', fontWeight: 'bold',
        textShadowColor: colors.normal,
        textShadowOffset: { width: -3, height: 1 },
        textShadowRadius: 10
      }}  >
        TO DO IT
      </Text>

      <TouchableOpacity style={{
        backgroundColor: colors.space, width: '55%', height: '13%', borderRadius: 45, justifyContent: 'center', alignItems: 'center', overflow: 'visible', // la sombra funciona <3
        shadowColor: colors.normal,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}>
        <Text style={{ color: colors.normal, fontSize: 22, fontFamily: 'monospace', fontWeight: 'bold' }}>COMENZAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View >
  );
}

var colors = {
  space: "#FAFAFA",
  primary: "#E91E63",
  secondary: "#62EFFF",
  normal: "#323333",
};
var dimensionw = Dimensions.get('window').width
var dimensionh = Dimensions.get('window').height

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '11%',
    paddingRight: '11%',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    overflow: 'visible', // la sombra funciona <3
    shadowColor: colors.normal,
    shadowOffset: {
      width: -3, height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  testeando: {

    elevation: 11,
  }

  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center"
  // },

  // container_btn: {
  //   backgroundColor: '#ecf0f7',

  // },
  // btn_color_yes: {
  //   color: "#E91E63",
  //   padding: 10,
  // }
},



);
