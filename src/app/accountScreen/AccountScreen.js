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

export default class AccountScreen extends Component {
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
            <Title style={styles.titleHeader}>Profile</Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditAccount')}>
              <Icon name="pencil" size={25} style={{color: '#fff'}} />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <LinearGradient
              colors={['#00BFFF', '#64D5E6', '#47E5E7']}
              style={styles.header}>
              <View style={styles.headerContent}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                      'http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg',
                  }}
                />
                <Text style={styles.name}>John Doe</Text>
              </View>
            </LinearGradient>
            <View style={styles.profileDetail}>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Post</Text>
                <Text style={styles.count}>20</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Friends</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Points</Text>
                <Text style={styles.count}>200</Text>
              </View>
            </View>
            <View style={styles.bodyContent}>
              <View>
                <Text style={styles.profileText}>Profile Siswa</Text>
              </View>
              <View style={styles.profileFlex}>
                <Icon
                  name="account"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>Nama </Text>
                <Text style={styles.profileDataBold}>John Doe</Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.profileFlex}>
                <Icon
                  name="account-group"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>Kelas </Text>
                <Text style={styles.profileDataBold}>XI IPA 2</Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.profileFlex}>
                <Icon
                  name="account-group"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>TTL </Text>
                <Text style={styles.profileDataBold}>
                  Jakarta, 02 Februari 2002{' '}
                </Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.profileFlex}>
                <Icon
                  name="counter"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>Nomor Induk </Text>
                <Text style={styles.profileDataBold}>3039303930393030</Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.profileFlex}>
                <Icon
                  name="map-marker"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>Alamat </Text>
                <Text style={styles.profileDataBold}>
                  Sunter Agung Papanggo, Rt 02 Rw 07, jakarta,
                </Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.profileFlex}>
                <Icon
                  name="book"
                  size={responsiveFontSize(3.8)}
                  style={styles.iconProfile}
                />
                <Text style={styles.profileData}>Mapel Favorit</Text>
                <Text style={styles.profileDataBold}>
                  IPA, IPS, Bahasa Inggris
                </Text>
              </View>
              <View style={{marginBottom: responsiveHeight(2.33)}} />
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
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
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
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00CED1',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
  },
  profileText: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(7.33),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(5.33),
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00CED1',
  },
  description: {
    fontSize: 20,
    color: '#00CED1',
    marginTop: 10,
    textAlign: 'center',
  },
  titleHeader: {
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.8),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  profileFlex: {
    marginLeft: responsiveWidth(5.33),
    flexDirection: 'row',
    flex: 1,
  },
  iconProfile: {
    color: '#64D5E6',
    marginTop: responsiveHeight(0.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  profileData: {
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
    flex: 1,
  },
  profileDataBold: {
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
    fontWeight: 'bold',
    flex: 1,
  },
  divider: {
    color: '#888888',
    width: responsiveWidth(93.5),
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(1.6),
  },
});
