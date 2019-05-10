import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Login:{screen:Login},
  SignUp:{screen:SignUp}
});

const App = createAppContainer(MainNavigator);

export default App;