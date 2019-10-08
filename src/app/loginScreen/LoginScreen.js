import React, {Component} from 'react';
//import react in our code.

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

//import all the components we are going to use.

export default class LoginScreen extends Component<{}> {
  render() {
    return (
      <LinearGradient
        colors={['#00BFFF', '#64D5E6', '#47E5E7']}
        style={styles.container}>
        <StatusBar backgroundColor="#00BFFF" barStyle="light-content" />
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Icon
              name={'shield-account'}
              size={responsiveFontSize(10.66)}
              color={'#FFF'}
              style={styles.iconLogo}
            />
            <Text style={styles.textTitleLogin}>Log In</Text>
          </View>
          <View style={styles.SectionStyle}>
            <View style={styles.viewField}>
              <Icon
                name={'cellphone'}
                size={responsiveFontSize(2.66)}
                color={'#FFF'}
                style={styles.ImageStyle}
              />
            </View>

            <TextInput
              style={{flex: 1}}
              placeholder="Masukan alamat amail atau telepon"
              underlineColorAndroid="transparent"
              placeholderTextColor="#64D5E6"
            />
          </View>
          <View style={styles.viewHelp}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.6),
                color: '#EEEEEE',
              }}>
              {' '}
              Mengalami masalah saat masuk, kunjungi
            </Text>
            <Text style={styles.textHelp2}> pusat bantuan.</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Home')}>
            <LinearGradient
              colors={['#50D79B', '#53D995', '#50D79B']}
              style={styles.viewButton}>
              <Text style={styles.textLogin}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  iconLogo: {
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(10),
  },
  textTitleLogin: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(3.33),
    marginBottom: responsiveFontSize(2.33),
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: responsiveHeight(7.33),
    width: responsiveWidth(92),
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ImageStyle: {
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
  },
  viewField: {
    backgroundColor: '#39D39F',
    width: responsiveWidth(12.9),
    height: responsiveHeight(7.33),
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#64D5E6',
    marginLeft: responsiveWidth(-0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(7.33),
    width: responsiveWidth(92),
    marginTop: responsiveHeight(8.66),
    bottom: 0,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textLogin: {
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  viewHelp: {
    width: responsiveWidth(92),
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textHelp: {
    fontSize: responsiveFontSize(1.3),
    color: '#FFFFFF',
  },
  textHelp2: {
    fontSize: responsiveFontSize(1.6),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
