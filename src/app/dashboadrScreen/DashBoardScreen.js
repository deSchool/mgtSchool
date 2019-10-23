import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container} from 'native-base';
import HeaderContent from '../../commons/HeaderContent';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Avatar} from 'react-native-paper';
import ComponentRecord from './components/ComponentRecord';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';

export default class DashBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderContent>POST CLASS</HeaderContent>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.textHi}>Hi, How Are You?</Text>
                <Text style={styles.textName}> Jennie B</Text>
                <Text style={styles.textPlace}>
                  Jakarta International Schools
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                style={styles.imageAvatar}
                resizeMode="contain"
              />
            </View>
            <View>
              <ComponentRecord />
            </View>
            <View>
              <View>
                <View style={styles.viewContent}>
                  <View style={styles.viewTextContent}>
                    <Text style={styles.textTitle}>Record</Text>
                    <Text style={styles.textActivity}>Lihat Aktivitas</Text>
                  </View>
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: '#000000',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
                  <View style={styles.viewDataContent}>
                    <Icon
                      name="clock-outline"
                      size={responsiveFontSize(2)}
                      style={{
                        color: 'black',
                        marginTop: responsiveHeight(0.5),
                      }}
                    />
                    <Text style={styles.textSchedule}>
                      11: 11 AM - 08:11 PM
                    </Text>
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
                  <Divider style={styles.divider} />
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
  container: {
    marginLeft: responsiveWidth(5.33),
  },
  flexHi: {
    flexDirection: 'row',
    width: responsiveWidth(100),
  },
  textHi: {
    fontSize: responsiveFontSize(3.3),
    color: '#000000',
    fontWeight: 'bold',
    marginTop: responsiveWidth(2.33),
  },
  textName: {
    fontSize: responsiveFontSize(2.6),
    color: '#000000',
    fontWeight: '600',
    marginLeft: responsiveWidth(-1.66),
  },
  textPlace: {
    color: 'grey',
  },
  imageAvatar: {
    width: 74,
    height: 74,
    borderRadius: 60,
    marginRight: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.33),
  },
  viewTextContent: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.66),
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    marginLeft: responsiveWidth(1.2),
    fontWeight: 'bold',
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
