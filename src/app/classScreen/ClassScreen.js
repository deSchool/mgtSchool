import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base'
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import HeaderContent from '../../commons/HeaderContent' 
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'


export default class ClassScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <HeaderContent >
          POST CLASS
        </HeaderContent>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'}} />
                <Body>
                  <Text>John K</Text>
                  <Text note>10 menit</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name={'share'} size={20} color={'#00BFFF'} />
                  </Button>
                </Right>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/08/real_history_game_of_thrones_daenerys_targaryen.jpg?itok=qrjovvuC'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text style={
                    {marginLeft: responsiveWidth(-5.33),
                      marginRight: responsiveWidth(-2.33),
                      color:'#00BFFF',
                      fontSize: responsiveFontSize(2.2)
                    }}>12</Text>
                  <Icon name={'thumbs-up'} size={20} color={'#00BFFF'} />
                </Button>
                <Button transparent>
                  <Icon name={'message-square'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Left>
              <Body>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name={'star'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'}} />
                <Body>
                  <Text>Jenie B</Text>
                  <Text note>30 menit</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name={'share'} size={20} color={'#00BFFF'} />
                  </Button>
                </Right>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/08/real_history_game_of_thrones_daenerys_targaryen.jpg?itok=qrjovvuC'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text style={{marginLeft: responsiveWidth(-2)}}>Hello World</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name={'thumbs-up'} size={20} color={'#00BFFF'} />
                </Button>
                <Button transparent>
                  <Text style={
                    {marginLeft: responsiveWidth(-5.33),
                      marginRight: responsiveWidth(-2.33),
                      color:'#00BFFF',
                      fontSize: responsiveFontSize(2.2)
                    }}>2</Text>
                  <Icon name={'message-square'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Left>
              <Body>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name={'star'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'}} />
                <Body>
                  <Text>Rebeca L</Text>
                  <Text note>11 menit</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name={'share'} size={20} color={'#00BFFF'} />
                  </Button>
                </Right>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/08/real_history_game_of_thrones_daenerys_targaryen.jpg?itok=qrjovvuC'}} style={{height: 200, width: null, flex: 1}}/>
              <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices augue nibh, nec tincidunt libero eleifend ut. Phasellus finibus justo vel luctus tempus. Phasellus eget urna elit. Nullam placerat, nulla fermentum rhoncus euismod, massa odio laoreet elit, vel consequat diam ipsum in nibh. Nam facilisis arcu vitae nunc rhoncus, vitae accumsan odio sagittis. Morbi volutpat fermentum eros. Praesent interdum felis orci, sit amet pharetra nibh iaculis varius. Nulla quis dolor ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name={'thumbs-up'} size={20} color={'#00BFFF'} />
                </Button>
                <Button transparent>
                  <Text style={
                    {marginLeft: responsiveWidth(-5.33),
                      marginRight: responsiveWidth(-2.33),
                      color:'#00BFFF',
                      fontSize: responsiveFontSize(2.2)
                    }}>2</Text>
                  <Icon name={'message-square'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Left>
              <Body>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name={'star'} size={20} color={'#00BFFF'} />                    
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
