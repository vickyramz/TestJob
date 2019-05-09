
import React, { Component } from 'react';
import { AppRegistry,Image,Text, StyleSheet,View ,Button} from 'react-native';

  export default class Home extends Component {
    static navigationOptions = {
      header:null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={ styles.container }>
        <Image source={require('./Assets/building.png')} style={styles.backgroundImage} />
        <View style={ styles.loginForm }>
          <Text style={styles.WelcomeText}>Welcome to Creid</Text>
          <Text style={styles.DescriptionText}>Track your Property Value in Real-time</Text>
          <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
          <View style={styles.Googlecircle}>
          <Image source={require('./Assets/google-plus-logo.png')} style={styles.GoogleImage} />
          </View>
          <View style={styles.Googlecircle}>
          <Image source={require('./Assets/google-plus-logo.png')} style={styles.GoogleImage} />
          </View>
          <View style={styles.Googlecircle}>
          <Image source={require('./Assets/google-plus-logo.png')} style={styles.GoogleImage} />
          </View>
          <View style={styles.Googlecircle}>
          <Image source={require('./Assets/google-plus-logo.png')} style={styles.GoogleImage} />
          </View>
          </View>
        </View>
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    loginForm: {
      justifyContent: 'center',
      alignItems:'flex-start',
      marginLeft:30,


        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    WelcomeText:{
      color:'#fff',
      fontSize:22,
      marginBottom:10

    },
    DescriptionText:{
    color:'#fff',
    fontSize:15
    },
    Googlecircle: {
      width: 50,
      height: 50,
      marginLeft:40,
      borderRadius: 50/2,
      backgroundColor: 'red',
      borderWidth:1,
      borderColor:'#fff',
      justifyContent:'center',
      alignItems:'center'

  },
  GoogleImage:{
    width:30,
    height:30
  }
});