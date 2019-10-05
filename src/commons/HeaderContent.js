import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Icon,
  Container,
} from 'native-base';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header style={styles.headerContent} androidStatusBarColor="#4285F4">
          <Left style={{flex: 1, marginLeft: responsiveWidth(2)}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: '#fff'}} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 3, justifyContent: 'center'}}>
            <Title style={styles.titleHeader}>{this.props.children}</Title>
          </Body>
          <Right style={{flex: 1}} />
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContent: {
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
});
export default withNavigation(HeaderContent);
