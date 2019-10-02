import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Container } from 'native-base'
import {
  Header,
  Left,
  Right,
  Body,
  Title
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card, ListItem } from 'react-native-elements'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

export default class AccountScreen extends Component {

  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: '#00BFFF', zIndex: 2 }}
          androidStatusBarColor="#4285F4"
        >
          <Left style={{ flex: 1, marginLeft: responsiveWidth(2) }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" size={25} style={{ color: '#fff' }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 3, justifyContent: 'center' }}>
            <Title style={styles.titleHeader}>{this.props.children}</Title>
          </Body>
          <Right style={{ flex: 1 }} >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="pencil" size={25} style={{ color: '#fff' }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{ uri: 'http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg' }} />
                <Text style={styles.name}>
                  John Doe
                </Text>
              </View>
            </View>

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

            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Card
                  containerStyle={{ width: responsiveWidth(100) }}
                >
                  <Text>Name: Zidni Ryi</Text>
                </Card>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF'
  },
  headerContent: {
    padding: 30,
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600'
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
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2
  },
  detailContent: {
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#00CED1'
  },
  count: {
    fontSize: 18
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 8
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969'
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
    backgroundColor: '#00CED1'
  },
  description: {
    fontSize: 20,
    color: '#00CED1',
    marginTop: 10,
    textAlign: 'center'
  },
  titleHeader: {
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.8),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Open Sans'
  }
})