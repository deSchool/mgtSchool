import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderContent from '../../commons/HeaderContent';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

export default class ClassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderContent>POST CLASS</HeaderContent>
        <Content>
          <LinearGradient
            colors={['#00BFFF', '#64D5E6', '#47E5E7']}
            style={styles.cardClass}>
            <View style={styles.viewHi}>
              <Icon
                name="tag-heart"
                color="#fff"
                size={responsiveFontSize(7)}
                style={styles.iconView}
              />
              <Text style={styles.textTitle}> Hai John Doe. </Text>
            </View>
            <View style={styles.viewDivider} />
            <View style={styles.viewBottom}>
              <Text style={styles.textBottom}>
                Di bawah ini adalah data update pada kelas kamu
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.dataCard}>
            <View style={styles.itemCard}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
            <View style={styles.itemCard2}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
          </View>
          <View style={styles.dataCard}>
            <View style={styles.itemCard}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
            <View style={styles.itemCard2}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
          </View>
          <View style={styles.dataCard}>
            <View style={styles.itemCard}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
            <View style={styles.itemCard2}>
              <Icon
                name="book"
                color="#64D5E6"
                size={responsiveFontSize(5)}
                style={styles.iconViewText}
              />
              <Text style={styles.itemTextTitle}>Tugas Kelas (6)</Text>
              <Text style={styles.itemTextSUb}>
                Merupkan tugas yang harus dikerjakan siswa
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardClass: {
    width: responsiveWidth(92),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(2.33),
    backgroundColor: 'red',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#64D5E6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  viewHi: {
    flexDirection: 'row',
  },
  iconView: {
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.33),
  },
  textTitle: {
    marginTop: responsiveHeight(3.8),
    fontSize: responsiveFontSize(3),
    color: '#FFFFFF',
  },
  viewDivider: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(92),
    height: responsiveHeight(0.5),
  },
  viewBottom: {
    borderWidth: 2,
    marginTop: responsiveHeight(1.33),
    borderColor: '#FFFFFF',
    borderRadius: 10,
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  textBottom: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1.33),
    marginBottom: responsiveHeight(1.33),
    justifyContent: 'space-between',
  },
  dataCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3.33),
    marginBottom: responsiveHeight(2.33),
  },
  itemCard: {
    width: responsiveHeight(25),
    height: responsiveHeight(20),
    backgroundColor: '#FFFFFF',
    marginLeft: responsiveWidth(5.33),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemCard2: {
    width: responsiveHeight(25),
    height: responsiveHeight(20),
    backgroundColor: '#FFFFFF',
    marginLeft: responsiveWidth(2.33),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemTextTitle: {
    color: '#64D5E6',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(2.66),
    marginTop: responsiveHeight(1),
  },
  itemTextSUb: {
    color: '#64D5E6',
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveWidth(2.66),
    marginRight: responsiveWidth(2.6),
  },
  iconViewText: {
    marginLeft: responsiveWidth(2.33),
    marginTop: responsiveHeight(2.33),
  },
});
