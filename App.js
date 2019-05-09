import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Components/Home'
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
const MainNavigator = createStackNavigator({
  Home: {screen: Home}
});

const App = createAppContainer(MainNavigator);

export default App;