import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../app/homepageScreen/HomeScreen';
import ClassScreen from '../app/classScreen/ClassScreen';
import PostScreen from '../app/postScreen/PostScreen';
import AccountScreen from '../app/accountScreen/AccountScreen';
import LoginScreen from '../app/loginScreen/LoginScreen';
import EventScreen from '../app/eventScreen/EventScreen';
import MainApp from '../app/homepageScreen/MainApp';
import EditAccountScreen from '../app/accountScreen/EditAccountScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: MainApp,
      navigationOptions: {
        header: null,
      },
    },
    EditAccount: {
      screen: EditAccountScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export const AppContainer = createAppContainer(RootStack);