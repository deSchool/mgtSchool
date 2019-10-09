import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Container} from 'native-base';
import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Form,
  Input,
  Label,
  Item,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-elements';

export default class EditAccountScreen extends Component {
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
              <Icon name="check" size={25} style={{color: '#fff'}} />
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
                <View style={styles.iconText}>
                  <Icon
                    name="bell-ring"
                    size={responsiveFontSize(2)}
                    style={{color: '#00CED1', marginTop: responsiveHeight(0.2)}}
                  />
                  <Text style={styles.title}>Post</Text>
                </View>
                <Text style={styles.count}>20</Text>
              </View>
              <View style={styles.detailContent}>
                <View style={styles.iconText}>
                  <Icon
                    name="account-supervisor"
                    size={responsiveFontSize(2.66)}
                    style={{color: '#00CED1'}}
                  />
                  <Text style={styles.title}>Friends</Text>
                </View>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <View style={styles.iconText}>
                  <Icon
                    name="star"
                    size={responsiveFontSize(2)}
                    style={{color: '#00CED1', marginTop: responsiveHeight(0.2)}}
                  />
                  <Text style={styles.title}>Points</Text>
                </View>
                <Text style={styles.count}>200</Text>
              </View>
            </View>
            <View style={styles.bodyContent}>
              <View>
                <Text style={styles.profileText}>Profile Siswa</Text>
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>Nama</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>Kelas</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>TTL</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>Nomor Induk</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>Alamat</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
              </View>
              <View style={styles.profileFlex}>
                <Text style={styles.textStack}>Mapel Favorit</Text>
                <Input style={styles.editStack} />
                <Divider style={styles.divider} />
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
    padding: 30,
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
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
    fontSize: responsiveFontSize(2),
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
    flex: 1,
    marginLeft: responsiveWidth(5.33),
  },
  profileData: {
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5.33),
    flex: 1,
  },
  divider: {
    color: '#888888',
    width: responsiveWidth(98.5),
    alignSelf: 'center',
    marginTop: responsiveHeight(-1.6),
    marginLeft: responsiveWidth(5.33),
  },

  editInput: {
    width: responsiveWidth(92),
    fontSize: responsiveFontSize(1.2),
    color: 'red',
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(9),
  },
  textStack: {
    fontSize: responsiveFontSize(1.2),
    marginTop: responsiveHeight(2.66),
    marginLeft: responsiveWidth(1.66),
  },
});
