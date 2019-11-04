import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from '../app/homepageScreen/HomeScreen'
import ClassScreen from '../app/classScreen/ClassScreen'
import PostScreen from '../app/postScreen/PostScreen'
import AccountScreen from '../app/accountScreen/AccountScreen'
import LoginScreen from '../app/loginScreen/LoginScreen'
import EventScreen from '../app/eventScreen/EventScreen'
import MainApp from '../app/homepageScreen/MainApp'
import EditAccountScreen from '../app/accountScreen/EditAccountScreen'
import Absen from '../app/absen/Absen'
import DashBoardScreen from '../app/dashboadrScreen/DashBoardScreen'
import GetHooks from '../template/hooks/GetHooks'
const RootStack = createStackNavigator(
  {
    Home: {
      screen: MainApp,
      navigationOptions: {
        header: null
      }
    },
    Absen: {
      screen: Absen,
      navigationOptions: {
        header: null
      }
    },
    EditAccount: {
      screen: EditAccountScreen,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: DashBoardScreen,
      navigationOptions: {
        header: null
      }
    },
    GetHooks: {
      screen: GetHooks
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  },
)

export const AppContainer = createAppContainer(RootStack)
