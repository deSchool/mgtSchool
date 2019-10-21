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
import HeaderContent from '../../commons/HeaderContent';

export default class Absen extends Component {
  render() {
    return (
      <Container>
        {/* <Header style={styles.headerProfile} androidStatusBarColor="#4285F4">
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
        </Header> */}
        <HeaderContent>ABSENSI</HeaderContent>
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
                  <View style={styles.columArea}>
                    <View style={styles.columnSubArea}>
                      <Text style={styles.textCheck}>Check In</Text>
                      <Text style={styles.textCheckTime}>11: 11 AM</Text>
                    </View>
                    <View style={styles.columnSubArea}>
                      <Text style={styles.textCheck}>Check Out</Text>
                      <Text style={styles.textCheckTime}>-</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.areaViewButton}>
                      <View style={styles.viewButton1}>
                        <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={() =>
                            this.props.navigation.navigate('Home')
                          }>
                          <LinearGradient
                            colors={['#50D79B', '#53D995', '#50D79B']}
                            style={styles.viewButtonMedium}>
                            <Text style={styles.textLogin}>Check In</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.viewButton2}>
                        <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={() =>
                            this.props.navigation.navigate('Home')
                          }>
                          <LinearGradient
                            colors={['#50D79B', '#53D995', '#50D79B']}
                            style={styles.viewButtonMedium}>
                            <Text style={styles.textLogin}>Check Out</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.viewContent}>
                <View style={styles.viewTextContent}>
                  <Text style={styles.textTitle}>Jadwal Hari Ini</Text>
                  <Text style={styles.textActivity}>Lihat Aktivitas</Text>
                </View>
                <View style={styles.viewDataContent}>
                  <Icon
                    name="clock-outline"
                    size={responsiveFontSize(2)}
                    style={{color: '#000000', marginTop: responsiveHeight(0.5)}}
                  />
                  <Text style={styles.textSchedule}>11: 11 AM - 08:11 PM</Text>
                  <Icon
                    name="arrow-expand-right"
                    size={responsiveFontSize(2)}
                    style={{
                      color: '#000000',
                      marginLeft: responsiveWidth(40),
                      marginTop: responsiveHeight(0.5),
                    }}
                  />
                </View>
              </View>
              <Divider style={styles.divider} />
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
    height: responsiveHeight(28),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#EEEEEE',
    marginTop: responsiveHeight(2.33),
  },
  blockArea: {
    width: responsiveWidth(87),
    height: responsiveHeight(6),
    backgroundColor: '#47E5E7',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textAbsenArea: {
    fontSize: responsiveFontSize(3),
    color: '#FFFFFF',
  },
  columArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(2),
  },
  columnSubArea: {
    alignItems: 'center',
  },
  textCheck: {
    fontSize: responsiveFontSize(1.6),
    color: 'grey',
  },
  textCheckTime: {
    fontSize: responsiveFontSize(1.8),
    color: 'black',
    marginTop: responsiveHeight(1.6),
  },
  viewButtonMedium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(6.33),
    width: responsiveWidth(25),
    marginTop: responsiveHeight(3.66),
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
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  areaViewButton: {
    flexDirection: 'row',
  },
  viewButton1: {
    alignSelf: 'center',
    marginRight: responsiveWidth(2.2),
    marginLeft: responsiveWidth(1.2),
  },
  viewButton2: {
    alignSelf: 'center',
    marginLeft: responsiveWidth(3.2),
  },
  viewTextContent: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.66),
  },
  textTitle: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(1.2),
  },
  viewDataContent: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2.2),
    marginLeft: responsiveWidth(5.33),
  },
  textSchedule: {
    marginLeft: responsiveWidth(2.33),
  },
  divider: {
    marginTop: responsiveHeight(2.33),
    marginLeft: responsiveWidth(5.33),
  },
  textActivity: {
    marginLeft: responsiveWidth(40),
    fontSize: responsiveFontSize(1.4),
    color: 'grey',
  },
});
