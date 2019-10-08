import React from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/homepageScreen/HomeScreen';
import ClassScreen from './app/classScreen/ClassScreen';
import PostScreen from './app/postScreen/PostScreen';
import AccountScreen from './app/accountScreen/AccountScreen';
import LoginScreen from './app/loginScreen/LoginScreen';
console.disableYellowBox = true;

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const SettingsStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Settings: {screen: SettingsScreen},
  Details: {screen: DetailsScreen},
  Class: {screen: ClassScreen},
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: HomeScreen},
      Post: {screen: PostScreen},
      Class: {screen: ClassScreen},
      Settings: {screen: SettingsStack},
      Account: {screen: AccountScreen},
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `home${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `settings${focused ? '' : '-outline'}`;
          } else if (routeName === 'Class') {
            iconName = `book${focused ? '' : '-outline'}`;
          } else if (routeName === 'Post') {
            iconName = `image${focused ? '' : '-outline'}`;
          } else if (routeName === 'Account') {
            iconName = `account${focused ? '' : '-outline'}`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#00BFFF',
        inactiveTintColor: '#888888',
      },
    },
  ),
);
