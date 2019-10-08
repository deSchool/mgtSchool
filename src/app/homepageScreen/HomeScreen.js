import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container} from 'native-base';
import HeaderHome from '../../commons/HeaderHome';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import ComponentBanner from './components/ComponentBanner';
import ComponentNews from './components/ComponentNews';
import COmponentInfo from './components/ComponentInfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderHome>Logo Here</HeaderHome>
        <ScrollView>
          <View style={styles.container}>
            <LinearGradient
              colors={['#00BFFF', '#64D5E6', '#47E5E7']}
              style={styles.header}></LinearGradient>
            <View style={styles.bodyCard}>
              <View style={styles.flexHeader}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <View style={{flexDirection: 'column'}}>
                    <Icon name={'menu'} size={60} color={'#00BFFF'} />
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: responsiveHeight(-2),
                        fontWeight: '600',
                      }}>
                      Helo
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text style={styles.textIcon}>Helo</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Icon name={'menu'} size={60} color={'#00BFFF'} />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: responsiveHeight(-2),
                      fontWeight: '600',
                    }}>
                    Helo
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <ComponentBanner />
            </View>
            <View>
              <ComponentNews />
            </View>
            <View>
              <COmponentInfo />
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
    height: responsiveHeight(25),
  },
  bodyCard: {
    width: responsiveWidth(90),
    height: responsiveHeight(40),
    marginTop: responsiveHeight(10),
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  flexHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: responsiveHeight(30),
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  textIcon: {
    textAlign: 'center',
    marginTop: responsiveHeight(-2),
    fontWeight: '600',
  },
});
