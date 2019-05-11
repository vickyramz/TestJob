


import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


class StudentDetails  extends Component {

  constructor(props) {
    super(props);  
  }
  render() {
   

    return (
        <View style={styles.container}>
        <View style={{flex:0.3,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <Text style={{fontSize: 20,
    fontWeight: 'bold',color:'#000000',marginLeft:20,}}>STUDENT DETAILS</Text>
        </View>
        <View>


        </View>
        <View style={styles.Googlecircle}>
          <Image source={require('./Assets/student.png')} style={styles.GoogleImage} />
          </View>
        </View>
        <View style={[styles.container, { backgroundColor: '#fff' }]} >
    <ScrollView>
    <View style={{justifyContent:'flex-start',marginTop:40,marginLeft:20,marginRight:20,borderRadius:15,marginBottom:20,borderColor:'grey',borderWidth:0.5,
  shadowOffset:{  width: 20,  height: 20,  },
  shadowColor: 'grey',
  shadowOpacity: 1.0,
  }}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Text style={{color:'#000000',marginTop:30,fontSize: 20,
    fontWeight: 'bold',}}>Name</Text>
    <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Balu</Text>
  
    </View>
    <View
    style={{
      marginTop:20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    }}
  />
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Text style={{fontSize: 20,
    fontWeight: 'bold',color:'#000000',marginTop:30}}>Father's Name</Text>
    <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Lakin</Text>
  
    </View>
    
    <View
    style={{
      marginTop:20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    }}
  />
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Text style={{fontSize: 20,
    fontWeight: 'bold',color:'#000000',marginTop:30}}>Sex</Text>
    <Text style={{fontSize:12,color:'#000000',marginTop:30}}>male</Text>
  
    </View>
    <View
    style={{
      marginTop:20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    }}
  />
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Text style={{fontSize: 20,
    fontWeight: 'bold',color:'#000000',marginTop:30}}>Class</Text>
    <Text style={{fontSize:12,color:'#000000',marginTop:30}}>First class</Text>
  
    </View>
    <View
    style={{
      marginTop:20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    }}
  />
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,paddingBottom:20}}>
    <Text style={{fontSize: 20,
    fontWeight: 'bold',color:'#000000',marginTop:30}}>City</Text>
    <Text style={{fontSize:12,color:'#000000',marginTop:30}}>New York</Text>
  
    </View>
    
    </View>
    
    </ScrollView>
    </View>
       
          </View>
       
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    tabBar: {
      flexDirection: 'row',
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
    Mapcontainer: {
      marginLeft:20,
      marginRight:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    LinkedCircle: {
      width: 50,
      height: 50,
      borderRadius: 50/2,
      backgroundColor: 'green',
      borderWidth:0,
      borderColor:'#fff',
      justifyContent:'center',
     
      alignItems:'center'
    
    },
    map: {
      height: 250,
      width: '90%',
    },
    Input:{
      width:'35%',
      marginTop:20,
     
      borderWidth: 0.5,
      marginLeft:10,
      marginRight:10
    },
    GoogleImage:{
      width:80,
      height:80
    },
    Googlecircle: {
      width: 150,
      height: 150,
      borderRadius: 150/2,
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'#fff',
      justifyContent:'center',
      alignItems:'center'

  },
  });
  
  
export default StudentDetails;










 





