import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default class ComponentRecord extends Component {
  render() {
    let dimensions = Dimensions.get('window');
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardRecord}>
            <Text style={styles.textData}>Data</Text>
          </View>
          <View style={styles.cardRecord}>
            <Text style={styles.textData}>Data</Text>
          </View>
          <View style={styles.cardRecord}>
            <Text style={styles.textData}>Data</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardRecord: {
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    borderRadius: 10,
    marginRight: responsiveWidth(2.33),
    // borderWidth: 2,
    backgroundColor: '#00B1FF',
    marginTop: responsiveHeight(2.33),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textData: {
    fontSize: responsiveFontSize(2.3),
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
