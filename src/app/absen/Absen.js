import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container} from 'native-base';
import {Header, Left, Right, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, ListItem} from 'react-native-elements';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-elements';

export default class Absen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerProfile} androidStatusBarColor="#4285F4">
          <Left style={{flex: 1, marginLeft: responsiveWidth(2)}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" size={25} style={{color: '#fff'}} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 3, justifyContent: 'center'}}>
            <Title style={styles.titleHeader}>ABSENSI</Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditAccount')}>
              <Icon name="forum" size={25} style={{color: '#fff'}} />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <LinearGradient
              colors={['#00BFFF', '#64D5E6', '#47E5E7']}
              style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.time}>11 : 11 AM</Text>
                <Text style={styles.textDate}>Mon, 21 Oct 2019</Text>
              </View>
            </LinearGradient>
            <View style={styles.bodyContent}>
              <View style={styles.absenArea}>
                <View style={styles.blockArea}>
                  <Text style={styles.textAbsenArea}> Absen Sekarang</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
  },
  headerProfile: {
    backgroundColor: '#00B1FF',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  headerContent: {
    alignItems: 'center',
    height: responsiveHeight(22),
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  time: {
    fontSize: responsiveFontSize(7),
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: responsiveHeight(2),
  },
  textDate: {
    fontSize: responsiveFontSize(1.8),
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  absenArea: {
    width: responsiveWidth(88),
    height: responsiveHeight(30),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#EEEEEE',
    marginTop: responsiveHeight(2.33),
  },
  blockArea: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    backgroundColor: '#47E5E7',
    alignItems: 'center',
  },
  textAbsenArea: {
    fontSize: responsiveFontSize(2),
    color: '#FFFFFF',
  },
});
