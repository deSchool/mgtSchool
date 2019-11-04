import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  ScrollView
} from 'react-native'
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'

export default class COmponentInfo extends Component {
  render() {

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50544/s-392-392/Banner_4.jpg'
            }}
          />

          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50544/s-392-392/Banner_4.jpg'
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50544/s-392-392/Banner_4.jpg'
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50544/s-392-392/Banner_4.jpg'
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  banner: {
    height: responsiveHeight(30),
    width: responsiveWidth(30),
    borderRadius: 10,
    marginTop: responsiveHeight(-3.33),
    marginRight: responsiveWidth(2.33),
    marginBottom: responsiveHeight(-3.33)
  }
})
