
import React, { Component } from 'react';
import {TextInputLayout} from 'rn-textinputlayout';
import { AppRegistry,Image,Text, StyleSheet,View ,TextInput} from 'react-native';

  export default class Login extends Component {
    static navigationOptions = {
      header:null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <View style={styles.LoginForm}>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000'}}>Sign In</Text>
            <Text style={{color:'#000',marginLeft:150}}>I don't have an account</Text></View>
           
           
            <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Email' 
              />
               
               <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Password' 
              />
               <View style={{borderRadius:25,marginLeft:250,borderWidth:1,borderColor:'#000000',backgroundColor:'grey', padding:10,marginTop:20, justifyContent:'center'}}>
              <Text style={{color:'#000000'}}>Log In</Text>
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
    LoginForm: {
        marginTop:200,
        justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginLeft:30,
    },
    Input:{
        width:'90%',
        marginTop:20,
        borderBottomWidth: 0.5,
        marginLeft:10,
        marginRight:10
      },
    inputLayout: {
        marginTop: 16,
        marginHorizontal: 36
    }
});