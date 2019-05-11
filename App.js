import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Components/Login'
import DashBoard from './Components/DashBoard'
import StudentList from './Components/StudentList'
import AddStudents from './Components/AddStudents'
import StudentDetails from './Components/StudentDetails'
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
const MainNavigator = createStackNavigator({
  
  Login: {screen: Login},
  DashBoard: {screen: DashBoard},
  StudentList: {screen: StudentList},
  AddStudents: {screen: AddStudents},
  StudentDetails: {screen: StudentDetails},

});

const App = createAppContainer(MainNavigator);

export default App;