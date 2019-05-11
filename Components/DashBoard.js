
import React, { Component } from 'react';
import { AppRegistry,Image,Text, StyleSheet,View ,TouchableOpacity} from 'react-native';

  export default class Home extends Component {
    static navigationOptions = {
      header:null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={ styles.container }>
        <Image source={require('./Assets/background.jpeg')} style={styles.backgroundImage} />
        <View style={ styles.loginForm }>
    
          
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity onPress={()=>navigate('StudentList')}>
  <View style={{flexDirection:'column',justifyContent:'space-between'}}>
  <View style={styles.Googlecircle}>
          <Image source={require('./Assets/student.png')} style={styles.GoogleImage} />
          </View>
  <Text style={{color:'#fff',fontSize:20,fontWeight: 'bold',marginLeft:30,marginTop:10}}>STUDENT</Text>
  </View>
          
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigate('AddStudents')}>
          <View style={{flexDirection:'column',marginLeft:40}}>
  <View style={styles.Googlecircle}>
          <Image source={require('./Assets/building.png')} style={styles.GoogleImage} />
          </View>
  <Text style={{color:'#fff',fontSize:20,fontWeight: 'bold',marginLeft:30,marginTop:10}}>SCHOOL</Text>
  </View>
</TouchableOpacity>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<TouchableOpacity >
<View style={{flexDirection:'column'}}>
  <View style={styles.Googlecircle}>
          <Image source={require('./Assets/classroom.png')} style={styles.GoogleImage} />
          </View>
  <Text style={{color:'#fff',fontSize:20,fontWeight: 'bold',marginLeft:30,marginTop:10}}>CLASS</Text>
  </View>
          </TouchableOpacity>
          <View style={{flexDirection:'column',marginLeft:40}}>
  <View style={styles.Googlecircle}>
          <Image source={require('./Assets/rank.png')} style={styles.GoogleImage} />
          </View>
  <Text style={{color:'#fff',fontSize:20,fontWeight: 'bold',marginLeft:40,marginTop:10}}>RANK</Text>
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
      width: 150,
      height: 150,
      borderRadius: 150/2,
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'#fff',
      justifyContent:'center',
      alignItems:'center'

  },
  FacebooCircle: {
    width: 150,
    height: 150,
    marginLeft:40,
    borderRadius: 150/2,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#fff',
    justifyContent:'center',
    alignItems:'center'

},
LinkedCircle: {
  width: 50,
  height: 50,
  marginLeft:40,
  borderRadius: 50/2,
  backgroundColor: '#fff',
  borderWidth:1,
  borderColor:'#fff',
  justifyContent:'center',
  alignItems:'center'

},
MailCircle: {
  width: 50,
  height: 50,
  marginLeft:40,
  borderRadius: 50/2,
  backgroundColor: '#fff',
  borderWidth:1,
  borderColor:'#fff',
  justifyContent:'center',
  alignItems:'center'

},
  GoogleImage:{
    width:80,
    height:80
  }
});