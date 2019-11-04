import {
  responsiveFontSize
} from 'react-native-responsive-dimensions'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: '#00B0FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  titleHeader: {
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2.2),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Open Sans'
  }
})
