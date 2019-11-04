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

export default class ComponentBanner extends Component {
  render() {

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50444/s-824-392/Banner_1_Maudikode_Revisi3__MaudiKode__Banner_1.jpg'
            }}
          />

          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50444/s-824-392/Banner_1_Maudikode_Revisi3__MaudiKode__Banner_1.jpg'
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50444/s-824-392/Banner_1_Maudikode_Revisi3__MaudiKode__Banner_1.jpg'
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.banner}
            source={{
              uri:
                'https://s0.bukalapak.com/uploads/flash_banner/50444/s-824-392/Banner_1_Maudikode_Revisi3__MaudiKode__Banner_1.jpg'
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
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    borderRadius: 10,
    marginTop: responsiveHeight(30),
    marginRight: responsiveWidth(2.33),
    marginBottom: responsiveHeight(2.33)
  }
})
