import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ClassScreen from '../classScreen/ClassScreen';
import PostScreen from '../postScreen/PostScreen';
import AccountScreen from '../accountScreen/AccountScreen';
import EventScreen from '../eventScreen/EventScreen';
import HomeScreen from './HomeScreen';

const MainApp = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Post: {screen: PostScreen},
    Class: {screen: ClassScreen},
    Event: {screen: EventScreen},
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
        } else if (routeName === 'Event') {
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
);

export default MainApp;
