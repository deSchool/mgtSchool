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
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: responsiveWidth(92),
                height: responsiveHeight(2),
              }}
            />
          </LinearGradient>
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
    flex: 1,
    flexDirection: 'row',
  },
  iconView: {
    marginLeft: responsiveWidth(5.33),
    marginTop: responsiveHeight(2.33),
  },
  textTitle: {
    marginTop: responsiveHeight(2.33),
    fontSize: responsiveFontSize(3),
    color: '#FFFFFF',
  },
});
