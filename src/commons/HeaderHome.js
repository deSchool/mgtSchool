import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Left, Right, Body, Title } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { withNavigation } from 'react-navigation'
import {
  responsiveFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions'
class HeaderHome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Header style={styles.headerHome} androidStatusBarColor="#4285F4">
          <Left style={{ flex: 1, marginLeft: responsiveWidth(2) }}>
            <Title style={styles.titleHeader}>{this.props.children}</Title>
          </Left>
          <Body style={{ flex: 1, justifyContent: 'center' }}></Body>
          <Right style={{ flex: 1 }}>
            <Icon name={'message'} size={20} color={'#FFFFFF'} />
          </Right>
        </Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: '#00B1FF',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14
  },
  titleHeader: {
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2.2),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Open Sans'
  }
})
export default withNavigation(HeaderHome)
