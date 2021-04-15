// import styled from 'styled-components';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {
  justifySelf, justifyItems, border, margin,
} from 'styled-system';
import { colors } from './guiaEstilo';

/// /////////////////////////////// pantalla welcome
export const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export const styleImages = StyleSheet.create({
  logowithShadow: {
    backgroundColor: colors.normal,
    height: 144,
    width: 144,
    borderRadius: 34,
    // sombras
    shadowColor: colors.normal,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    // sombras
  },
});

export const styleText = StyleSheet.create({
  title: {
    fontSize: 65,
    color: colors.secondary,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textShadowColor: colors.normal,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 21,
    color: colors.secondary,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textShadowColor: colors.normal,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    alignSelf: 'flex-end',
  },
  readme: {
    fontSize: 18, fontFamily: 'monospace',
  },
  readmenow: {
    color: colors.primary,
  },
});

export const styleBtn = StyleSheet.create({
  btn: {
    backgroundColor: colors.normal,
    width: 193.31,
    height: 59.33,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible', // la sombra funciona <3
    shadowColor: colors.normal,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 21,
    alignSelf: 'center',
  },
  textBtn: {
    color: colors.space, fontSize: 22, fontFamily: 'monospace', fontWeight: 'bold',
  },
});
